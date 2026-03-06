import React, { forwardRef, useEffect, useMemo, useState } from 'react';

import styled from 'styled-components';

import { borderColor, color, spacing, typography } from '../../tokens';
import fontFamily from '../../tokens/fontFamily';
import { radius } from '../../tokens/radius';
import textColor from '../../tokens/textColor';
import { IconCancel, IconSearch } from '../icons';

type SearchfieldPropsInternal = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  focused?: boolean;
  style?: React.CSSProperties;
  lang?: 'ko' | 'en';
};

export const Searchfield = forwardRef<HTMLInputElement, SearchfieldPropsInternal>(
  (
    {
      size = 'medium',
      disabled = false,
      focused = false,
      placeholder,
      value,
      onChange,
      onFocus,
      onBlur,
      className = '',
      style,
      lang,
      ...props
    },
    ref
  ) => {
    const [internalFocused, setInternalFocused] = useState(focused);

    useEffect(() => {
      setInternalFocused(focused);
    }, [focused]);

    const isFilled = useMemo(() => {
      if (typeof value === 'string') return value.trim().length > 0;
      return false;
    }, [value]);

    const effectiveLang = lang;

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setInternalFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setInternalFocused(false);
      onBlur?.(event);
    };

    return (
      <Wrapper className={className} style={style}>
        <FieldContainer
          $size={size}
          $disabled={disabled}
          $focused={internalFocused}
          lang={effectiveLang}
        >
          <LeadingIcon $size={size} $disabled={disabled}>
            <IconSearch
              width={size === 'small' ? 16 : size === 'large' ? 24 : 20}
              height={size === 'small' ? 16 : size === 'large' ? 24 : 20}
              color={
                disabled
                  ? textColor.light['fg-neutral-disable']
                  : textColor.light['fg-neutral-alternative']
              }
            />
          </LeadingIcon>

          <FieldInput
            ref={ref}
            disabled={disabled}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            $size={size}
            $disabled={disabled}
            $filled={isFilled}
            $focused={internalFocused}
            lang={effectiveLang}
            {...props}
          />

          {!disabled && isFilled && (
            <TrailingIcon
              $size={size}
              $color={textColor.light['fg-neutral-assistive']}
              type='button'
              onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
              }}
              onClick={() => {
                onChange?.({
                  target: { value: '' },
                } as unknown as React.ChangeEvent<HTMLInputElement>);
              }}
            >
              <IconCancel
                width={size === 'small' ? 16 : size === 'large' ? 24 : 20}
                height={size === 'small' ? 16 : size === 'large' ? 24 : 20}
                color={textColor.light['fg-neutral-assistive']}
              />
            </TrailingIcon>
          )}
        </FieldContainer>
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap['gap-1']};
`;

const FieldContainer = styled.div<{
  $size: 'small' | 'medium' | 'large';
  $disabled: boolean;
  $focused: boolean;
  lang?: 'ko' | 'en';
}>`
  position: relative;
  width: 100%;
  background-color: ${color.gray['50']};
  border-radius: ${radius['rounded-2']};
  border: ${({ $focused }) => ($focused ? '1.8px solid' : '1px solid')};
  border-color: ${({ $focused }) =>
    $focused
      ? borderColor.light['color-border-focused']
      : borderColor.light['color-border-primary']};
  transition: all 0.2s ease-in-out;

  font-family: inherit;

  ${({ $size, lang = 'ko' }) => {
    switch ($size) {
      case 'small':
        return `
          height: 32px;
          ${typography(lang, 'body2', 'regular')}
        `;
      case 'large':
        return `
          height: 48px;
          ${typography(lang, 'body3', 'regular')}
        `;
      default:
        return `
          height: 40px;
          ${typography(lang, 'body3', 'regular')}
        `;
    }
  }}
`;

const FieldInput = styled.input<{
  $size: 'small' | 'medium' | 'large';
  $disabled: boolean;
  $filled: boolean;
  $focused: boolean;
  lang?: 'ko' | 'en';
}>`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: ${({ $disabled, $filled }) =>
    $disabled
      ? textColor.light['fg-neutral-disable']
      : $filled
        ? textColor.light['fg-neutral-primary']
        : textColor.light['fg-neutral-assistive']};

  &::placeholder {
    color: ${textColor.light['fg-neutral-assistive']};
    opacity: 1;
  }

  ${({ $size }) => {
    const baseLeftGap = $size === 'large' ? spacing.gap['gap-2.5'] : spacing.gap['gap-2'];
    const baseRightGap = $size === 'large' ? spacing.gap['gap-2.5'] : spacing.gap['gap-2'];
    const tbGap =
      $size === 'small'
        ? spacing.gap['gap-1.5']
        : $size === 'large'
          ? spacing.gap['gap-3']
          : spacing.gap['gap-2'];
    const iconSize = $size === 'small' ? 16 : $size === 'large' ? 24 : 20;
    const leftPadding = iconSize + parseInt(baseLeftGap) * 2; /* icon + gaps */
    return `
      padding: ${tbGap} ${baseRightGap};
      padding-left: ${leftPadding}px;
    `;
  }}
`;

const LeadingIcon = styled.div<{
  $size: 'small' | 'medium' | 'large';
  $disabled: boolean;
}>`
  position: absolute;
  left: ${({ $size }) => ($size === 'large' ? spacing.gap['gap-2.5'] : spacing.gap['gap-2'])};
  top: 50%;
  transform: translateY(-50%);
  width: ${({ $size }) => ($size === 'small' ? 16 : $size === 'large' ? 24 : 20)}px;
  height: ${({ $size }) => ($size === 'small' ? 16 : $size === 'large' ? 24 : 20)}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TrailingIcon = styled.button<{
  $size: 'small' | 'medium' | 'large';
  $color: string;
}>`
  position: absolute;
  right: ${({ $size }) => ($size === 'large' ? spacing.gap['gap-2.5'] : spacing.gap['gap-2'])};
  top: 50%;
  transform: translateY(-50%);
  width: ${({ $size }) => ($size === 'small' ? 16 : $size === 'large' ? 24 : 20)}px;
  height: ${({ $size }) => ($size === 'small' ? 16 : $size === 'large' ? 24 : 20)}px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => $color};
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`;

Searchfield.displayName = 'Searchfield';
