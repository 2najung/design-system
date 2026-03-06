import React, { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { textColor } from '../../tokens';
import { borderColor } from '../../tokens';
import { radius } from '../../tokens';
import { spacing } from '../../tokens';
import { typography } from '../../tokens';
import { color } from '../../tokens';
import { Chip } from '../Chip';
import { IconCloseOutline16 } from '../icons/generated';
import { TokenInputProps } from './types';

const TokenInput: React.FC<TokenInputProps> = ({
  size = 'medium',
  disabled = false,
  placeholder = '입력 후 Enter를 눌러주세요.',
  value = [],
  onChange,
  onFocus,
  onBlur,
  className = '',
  style,
  lang = 'ko',
  lineMode = 'multi',
  ...props
}) => {
  const [internalFocused, setInternalFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [tokens, setTokens] = useState<string[]>(value);
  const [isComposing, setIsComposing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTokens(value);
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setInternalFocused(true);
    onFocus?.(event);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setInternalFocused(false);
    onBlur?.(event);
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // IME 조합 중일 때는 Enter 처리하지 않음
    if (event.key === 'Enter' && !isComposing && inputValue.trim()) {
      event.preventDefault();
      const newToken = inputValue.trim();
      // 중복 체크
      if (!tokens.includes(newToken)) {
        const newTokens = [...tokens, newToken];
        setTokens(newTokens);
        onChange?.(newTokens);
      }
      setInputValue('');
    } else if (event.key === 'Backspace' && !inputValue && tokens.length > 0) {
      // input이 비어있을 때 Backspace를 누르면 마지막 토큰 삭제
      event.preventDefault();
      const newTokens = tokens.slice(0, -1);
      setTokens(newTokens);
      onChange?.(newTokens);
    }
  };

  const handleChipRemove = (tokenToRemove: string) => {
    const newTokens = tokens.filter((t) => t !== tokenToRemove);
    setTokens(newTokens);
    onChange?.(newTokens);
  };

  // TokenInput size에 따른 Chip size 매핑
  const getChipSize = (): 'x-small' | 'small' | 'medium' => {
    switch (size) {
      case 'small':
        return 'x-small';
      case 'large':
        return 'small';
      default: // medium
        return 'x-small';
    }
  };

  // Chip size에 따른 높이 계산
  const getChipHeight = (): number => {
    const chipSize = getChipSize();
    switch (chipSize) {
      case 'x-small':
        return 24;
      case 'small':
        return 32;
      case 'medium':
        return 36;
      default:
        return 24;
    }
  };

  // lineMode 기반 최대 높이 계산 (gap 포함)
  const getMaxHeight = (): number => {
    const chipHeight = getChipHeight();
    const gap = 4; // spacing.gap["gap-1"] = 4px
    const padding = 8; // ChipsContainer의 상하 padding

    if (lineMode === 'single') {
      // single: 한 줄만
      return chipHeight + padding;
    } else {
      // multi: 최대 3줄
      const maxLines = 3;
      return chipHeight * maxLines + gap * (maxLines - 1) + padding;
    }
  };

  return (
    <TokenInputContainer className={`tokeninput-container ${className}`} style={style} {...props}>
      <TokenInputWrapper
        $size={size}
        $disabled={disabled}
        $focused={internalFocused}
        $hasTokens={tokens.length > 0}
        lang={lang}
        onClick={() => inputRef.current?.focus()}
      >
        <ChipsContainer $maxHeight={getMaxHeight()} $lineMode={lineMode} $size={size}>
          {tokens.map((token, index) => (
            <StyledChipWrapper
              key={`${token}-${index}`}
              onClick={(e) => {
                if (!disabled) {
                  e.stopPropagation();
                  handleChipRemove(token);
                }
              }}
            >
              <Chip
                type='solid'
                size={getChipSize()}
                disabled={disabled}
                trailingIcon={<IconCloseOutline16 color='currentColor' />}
              >
                {token}
              </Chip>
            </StyledChipWrapper>
          ))}
          <StyledInput
            ref={inputRef}
            $size={size}
            $disabled={disabled}
            $focused={internalFocused}
            $hasTokens={tokens.length > 0}
            lang={lang}
            value={inputValue}
            placeholder={tokens.length === 0 ? placeholder : ''}
            disabled={disabled}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
          />
        </ChipsContainer>
      </TokenInputWrapper>
    </TokenInputContainer>
  );
};

const TokenInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TokenInputWrapper = styled.div<{
  $size: 'small' | 'medium' | 'large';
  $disabled: boolean;
  $focused: boolean;
  $hasTokens: boolean;
  lang?: 'ko' | 'en';
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${radius['rounded-2']};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  cursor: text;
  min-height: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '30px';
      case 'large':
        return '46px';
      default:
        return '38px';
    }
  }};

  ${({ $disabled, $focused }) => {
    if ($disabled) {
      return `
        background-color: ${color.common['100']};
        border-color: ${borderColor.light['color-border-primary']};
        cursor: not-allowed;
      `;
    }

    if ($focused) {
      return `
        background-color: ${color.common['100']};
        border-color: ${borderColor.light['color-border-focused']};
      `;
    }

    return `
      background-color: ${color.common['100']};
      border-color: ${borderColor.light['color-border-primary']};
    `;
  }}
`;

const ChipsContainer = styled.div<{
  $maxHeight: number;
  $lineMode: 'single' | 'multi';
  $size: 'small' | 'medium' | 'large';
}>`
  display: flex;
  flex-wrap: ${({ $lineMode }) => ($lineMode === 'single' ? 'nowrap' : 'wrap')};
  gap: ${spacing.gap['gap-1']};
  align-items: center;
  flex: 1;
  padding: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return `${spacing.gap['gap-1']} ${spacing.gap['gap-2']}`;
      case 'large':
        return `${spacing.gap['gap-3']} ${spacing.gap['gap-2.5']}`;
      default:
        return `${spacing.gap['gap-2']} ${spacing.gap['gap-2']}`;
    }
  }};
  min-height: inherit;
  max-height: ${({ $maxHeight }) => `${$maxHeight}px`};
  overflow-x: ${({ $lineMode }) => ($lineMode === 'single' ? 'auto' : 'hidden')};
  overflow-y: ${({ $lineMode }) => ($lineMode === 'single' ? 'hidden' : 'auto')};

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${color.gray['300']};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${color.gray['400']};
  }
`;

const StyledChipWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;
`;

const StyledInput = styled.input<{
  $size: 'small' | 'medium' | 'large';
  $disabled: boolean;
  $focused: boolean;
  $hasTokens: boolean;
  lang?: 'ko' | 'en';
}>`
  flex: 1;
  min-width: 120px;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;
  padding: 0;

  ${({ $size, lang = 'ko' }) => {
    switch ($size) {
      case 'small':
        return `
          height: 22px;
          ${typography(lang, 'body2', 'regular')}
        `;
      case 'large':
        return `
          height: 30px;
          ${typography(lang, 'body3', 'regular')}
        `;
      default:
        return `
          height: 26px;
          ${typography(lang, 'body3', 'regular')}
        `;
    }
  }}

  ${({ $disabled }) => {
    if ($disabled) {
      return `
        color: ${textColor.light['fg-neutral-disable']};
        cursor: not-allowed;
      `;
    }

    return `
      color: ${textColor.light['fg-neutral-primary']};
    `;
  }}

  &::placeholder {
    color: ${textColor.light['fg-neutral-assistive']};
  }
`;

TokenInput.displayName = 'TokenInput';

export { TokenInput };
