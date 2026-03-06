import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import styled from 'styled-components';

import { textColor } from '../../tokens';
import { borderColor } from '../../tokens';
import { radius } from '../../tokens';
import { spacing } from '../../tokens';
import { typography } from '../../tokens';
import { color } from '../../tokens';
import { Cell } from '../Cell';
import { Chip } from '../Chip';
import { Menu } from '../Menu';
import { IconCloseOutline16 } from '../icons/generated';
import { MultiSelectOption, MultiSelectProps } from './types';

const MultiSelect: React.FC<MultiSelectProps> = ({
  size = 'medium',
  disabled = false,
  placeholder = '입력하거나 선택해주세요.',
  value = [],
  options = [],
  onChange,
  onFocus,
  onBlur,
  className = '',
  style,
  lang = 'ko',
  lineMode = 'multi',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalFocused, setInternalFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedValues, setSelectedValues] = useState<string[]>(value);
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    openUpward: false,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (portalRef.current && portalRef.current.contains(target)) return;

      if (containerRef.current && !containerRef.current.contains(target)) {
        setIsOpen(false);
        setInternalFocused(false);
        setInputValue('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      const updatePosition = () => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const MENU_MAX_HEIGHT = 400;
          const SPACING = 4;

          // 아래쪽 공간 확인
          const spaceBelow = window.innerHeight - rect.bottom;
          const spaceAbove = rect.top;

          // 아래쪽 공간이 부족하고 위쪽 공간이 더 크면 위로 열기
          const shouldOpenUpward = spaceBelow < MENU_MAX_HEIGHT && spaceAbove > spaceBelow;

          setMenuPosition({
            top: shouldOpenUpward
              ? rect.top + window.scrollY - SPACING
              : rect.bottom + window.scrollY + SPACING,
            left: rect.left + window.scrollX,
            width: rect.width,
            openUpward: shouldOpenUpward,
          });
        }
      };

      updatePosition();

      // ResizeObserver로 컨테이너 높이 변화 감지
      const resizeObserver = new ResizeObserver(() => {
        updatePosition();
      });

      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener('scroll', updatePosition, true);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [isOpen, selectedValues.length]);

  useEffect(() => {
    setSelectedValues(value);
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setInternalFocused(true);
    setIsOpen(true);
    onFocus?.(event);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setInternalFocused(false);
    onBlur?.(event);
  };

  const handleOptionClick = (option: MultiSelectOption) => {
    // 이미 선택된 항목이 아닌 경우에만 추가
    if (!selectedValues.includes(option.value)) {
      const newValues = [...selectedValues, option.value];
      setSelectedValues(newValues);
      onChange?.(newValues);
    }
    setInputValue('');
    inputRef.current?.focus();
  };

  const handleChipRemove = (valueToRemove: string) => {
    const newValues = selectedValues.filter((v) => v !== valueToRemove);
    setSelectedValues(newValues);
    onChange?.(newValues);
  };

  // 입력값으로 필터링하고, 이미 선택된 항목은 제외
  const filteredOptions = options.filter((option) => {
    const matchesSearch = inputValue
      ? option.label.toLowerCase().includes(inputValue.toLowerCase())
      : true;
    const notSelected = !selectedValues.includes(option.value);
    return matchesSearch && notSelected;
  });

  const getSelectedOption = (value: string) => {
    return options.find((opt) => opt.value === value);
  };

  // MultiSelect size에 따른 Chip size 매핑
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
    <MultiSelectContainer
      ref={containerRef}
      className={`multiselect-container ${className}`}
      style={style}
      {...props}
    >
      <MultiSelectInputWrapper
        $size={size}
        $disabled={disabled}
        $focused={internalFocused}
        $hasChips={selectedValues.length > 0}
        lang={lang}
      >
        <ChipsContainer $maxHeight={getMaxHeight()} $lineMode={lineMode} $size={size}>
          {selectedValues.map((val) => {
            const option = getSelectedOption(val);
            return option ? (
              <StyledChipWrapper
                key={val}
                onClick={(e) => {
                  if (!disabled) {
                    e.stopPropagation();
                    handleChipRemove(val);
                  }
                }}
              >
                <Chip
                  type='solid'
                  size={getChipSize()}
                  disabled={disabled}
                  trailingIcon={<IconCloseOutline16 color='currentColor' />}
                >
                  {option.label}
                </Chip>
              </StyledChipWrapper>
            ) : null;
          })}
          <MultiSelectInput
            ref={inputRef}
            $size={size}
            $disabled={disabled}
            $focused={internalFocused}
            $hasChips={selectedValues.length > 0}
            lang={lang}
            value={inputValue}
            placeholder={selectedValues.length === 0 ? placeholder : ''}
            disabled={disabled}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </ChipsContainer>
      </MultiSelectInputWrapper>

      {isOpen &&
        filteredOptions.length > 0 &&
        createPortal(
          <PortalMenuWrapper
            ref={portalRef}
            onMouseDown={(e) => e.stopPropagation()}
            onMouseDownCapture={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            data-portal-menu
            $top={menuPosition.top}
            $left={menuPosition.left}
            $width={menuPosition.width}
            $openUpward={menuPosition.openUpward}
          >
            <Menu>
              {filteredOptions.map((option) => (
                <Cell
                  key={option.value}
                  text={option.label}
                  description={option.description}
                  leadingContent={option.leadingContent}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOptionClick(option);
                  }}
                />
              ))}
            </Menu>
          </PortalMenuWrapper>,
          document.body
        )}
    </MultiSelectContainer>
  );
};

const MultiSelectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MultiSelectInputWrapper = styled.div<{
  $size: 'small' | 'medium' | 'large';
  $disabled: boolean;
  $focused: boolean;
  $hasChips: boolean;
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

const MultiSelectInput = styled.input<{
  $size: 'small' | 'medium' | 'large';
  $disabled: boolean;
  $focused: boolean;
  $hasChips: boolean;
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

const PortalMenuWrapperBase = styled.div<{
  $top: number;
  $left: number;
  $width: number;
  $openUpward: boolean;
}>`
  position: absolute;
  ${({ $top, $openUpward }) =>
    $openUpward ? `bottom: calc(100vh - ${$top}px);` : `top: ${$top}px;`}
  left: ${({ $left }) => $left}px;
  width: ${({ $width }) => $width}px;
  z-index: 9999;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

const PortalMenuWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof PortalMenuWrapperBase>
>((props, ref) => <PortalMenuWrapperBase ref={ref} {...props} />);

MultiSelect.displayName = 'MultiSelect';

export { MultiSelect };
