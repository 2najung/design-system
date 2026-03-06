import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import styled from 'styled-components';

import { borderColor } from '../../tokens/borderColor';
import color from '../../tokens/color';
import { radius } from '../../tokens/radius';
import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';
import typography from '../../tokens/typography';
import { Description } from '../Description';
import { Label } from '../Label';
import { TextAreaProps } from './types';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      labelType = 'default',
      description,
      descriptionLeadingIcon = false,
      status = 'default',
      disabled = false,
      active = false,
      focused = false,
      placeholder,
      value,
      showCharacterCounter = false,
      maxCount,
      maxHeight = 232,
      onChange,
      onFocus,
      onBlur,
      className = '',
      lang,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(focused);
    const [isActive, setIsActive] = useState(active);
    const [internalValue, setInternalValue] = useState(value);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const effectiveLang = lang;

    useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

    const rawValue = value !== undefined ? value : internalValue;
    const currentValue = maxCount ? (rawValue || '').slice(0, maxCount) : rawValue || '';
    const characterCount = currentValue.length;

    const adjustHeight = () => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = 'auto';
        const newHeight = Math.min(textarea.scrollHeight, maxHeight);
        textarea.style.height = `${newHeight}px`;
      }
    };

    useEffect(() => {
      adjustHeight();
    }, [currentValue, maxHeight]);

    const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      setIsActive(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      setIsActive(false);
      onBlur?.(event);
    };

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = event.target.value;
      if (maxCount && newValue.length > maxCount) {
        return;
      }
      setInternalValue(newValue);
      onChange?.(event);
    };

    const getTextColor = () => {
      if (disabled) {
        return textColor.light['fg-neutral-disable'];
      }
      if (isActive || currentValue) {
        return textColor.light['fg-neutral-primary'];
      }
      return textColor.light['fg-neutral-assistive'];
    };

    const getCounterColor = () => {
      if (disabled) {
        return textColor.light['fg-neutral-disable'];
      }
      return textColor.light['fg-neutral-alternative'];
    };

    const getBorderColor = () => {
      if (disabled) {
        return borderColor.light['color-border-primary'];
      }
      if (isFocused) {
        return borderColor.light['color-border-focused'];
      }
      return borderColor.light['color-border-primary'];
    };

    const getBackgroundColor = () => {
      if (disabled) {
        return color.gray['50'];
      }
      return color.common['100'];
    };

    return (
      <Container className={className}>
        {label && (
          <Label type={labelType} lang={effectiveLang}>
            {label}
          </Label>
        )}

        <TextAreaWrapper
          $disabled={disabled}
          $focused={isFocused}
          $borderColor={getBorderColor()}
          $backgroundColor={getBackgroundColor()}
        >
          <StyledTextArea
            ref={textareaRef}
            placeholder={placeholder}
            value={currentValue}
            disabled={disabled}
            maxLength={maxCount}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            $textColor={getTextColor()}
            $maxHeight={maxHeight}
            lang={effectiveLang}
            {...props}
          />
          {showCharacterCounter && maxCount && (
            <CharacterCounter $color={getCounterColor()} lang={effectiveLang}>
              {characterCount}/{maxCount}
            </CharacterCounter>
          )}
        </TextAreaWrapper>

        {description && (
          <Description
            status={status === 'default' ? undefined : status === 'error' ? 'negative' : 'positive'}
            leadingIcon={descriptionLeadingIcon}
            lang={effectiveLang}
          >
            {description}
          </Description>
        )}
      </Container>
    );
  }
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap['gap-1']};
`;

const TextAreaWrapper = styled.div<{
  $disabled: boolean;
  $focused: boolean;
  $borderColor: string;
  $backgroundColor: string;
}>`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap['gap-3']};
  min-height: 80px;
  padding: ${spacing.gap['gap-3']} ${spacing.gap['gap-2.5']};
  border: 1px solid ${({ $borderColor }) => $borderColor};
  border-radius: ${radius['rounded-2']};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'text')};
  transition: border-color 0.2s ease-in-out;
`;

const StyledTextArea = styled.textarea<{
  $textColor: string;
  $maxHeight: number;
  lang?: 'ko' | 'en';
}>`
  min-height: 48px;
  max-height: ${({ $maxHeight }) => $maxHeight}px;
  padding: 0 ${spacing.gap['gap-1']};
  border: none;
  outline: none;
  background: transparent;
  resize: none;
  overflow-y: auto;
  ${({ lang }) => typography(lang, 'body3', 'regular')}
  color: ${({ $textColor }) => $textColor};
  font-family: inherit;

  &::placeholder {
    color: ${textColor.light['fg-neutral-assistive']};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${color.gray[300]};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${color.gray[400]};
  }
`;

const CharacterCounter = styled.span<{
  $color: string;
  lang?: 'ko' | 'en';
}>`
  ${({ lang }) => typography(lang, 'body2', 'regular')}
  color: ${({ $color }) => $color};
  text-align: left;
  font-family: inherit;
`;

TextArea.displayName = 'TextArea';

export { TextArea };
