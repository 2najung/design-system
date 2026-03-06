import React from 'react';

import styled from 'styled-components';

import { spacing } from '../../tokens';
import { Description } from '../Description';
import { Label } from '../Label';
import { TokenInput } from '../TokenInput';
import { TokenFieldProps } from './types';

const TokenField: React.FC<TokenFieldProps> = ({
  label,
  labelType = 'default',
  description,
  descriptionLeadingIcon = false,
  size = 'medium',
  disabled = false,
  placeholder,
  value = [],
  onChange,
  className = '',
  lang,
  lineMode = 'multi',
  ...props
}) => {
  const effectiveLang = lang;

  return (
    <Container className={className}>
      {label && (
        <Label type={labelType} lang={effectiveLang}>
          {label}
        </Label>
      )}

      <TokenInput
        size={size}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        lang={effectiveLang}
        lineMode={lineMode}
        {...props}
      />

      {description && (
        <Description status='default' leadingIcon={descriptionLeadingIcon} lang={effectiveLang}>
          {description}
        </Description>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap['gap-1']};
`;

TokenField.displayName = 'TokenField';

export { TokenField };
