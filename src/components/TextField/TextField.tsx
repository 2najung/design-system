import React, { forwardRef, useState } from 'react';

import styled from 'styled-components';

import { spacing } from '../../tokens';
import { Description } from '../Description';
import { Input } from '../Input';
import { Label } from '../Label';
import { TextFieldProps } from './types';

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      labelType = 'default',
      description,
      descriptionLeadingIcon = false,
      size = 'medium',
      status = 'default',
      disabled = false,
      placeholder,
      value,
      type = 'text',
      onChange,
      onFocus,
      onBlur,
      className = '',
      lang,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const effectiveLang = lang;

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      setIsActive(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setIsActive(false);
      onBlur?.(event);
    };

    return (
      <Container className={className}>
        {label && (
          <Label type={labelType} lang={effectiveLang}>
            {label}
          </Label>
        )}

        <Input
          ref={ref}
          size={size}
          status={status}
          disabled={disabled}
          active={isActive}
          focused={isFocused}
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          lang={effectiveLang}
          {...props}
        />

        {description && (
          <Description status={status} leadingIcon={descriptionLeadingIcon} lang={effectiveLang}>
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

TextField.displayName = 'TextField';

export { TextField };
