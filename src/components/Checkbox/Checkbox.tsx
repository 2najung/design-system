import React from 'react';

import styled from 'styled-components';

import { color } from '../../tokens';
import { textColor } from '../../tokens';
import { borderColor } from '../../tokens';
import { radius } from '../../tokens';
import { spacing } from '../../tokens';
import { IconCheck } from '../icons';
import { CheckboxProps } from './types';

const Checkbox: React.FC<CheckboxProps> = ({
  variant = 'secondary',
  state = 'unchecked',
  disabled = false,
  onChange,
  className = '',
  ...props
}) => {
  const handleClick = () => {
    if (disabled) return;

    const nextState = !(state === 'checked');
    onChange?.(nextState);
  };

  const getIcon = () => {
    if (state === 'checked') {
      return <IconCheck width={16} height={16} color='currentColor' />;
    }
    return null;
  };

  return (
    <StyledCheckbox
      $variant={variant}
      $state={state}
      $disabled={disabled}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {getIcon()}
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.div<{
  $variant: 'primary' | 'secondary';
  $state: 'checked' | 'unchecked';
  $disabled: boolean;
}>`
  width: 16px;
  height: 16px;
  border-radius: ${radius['rounded-1']};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  padding: ${spacing.gap['gap-0']};

  ${({ $variant, $state, $disabled }) => {
    if ($variant === 'primary') {
      if ($state === 'checked') {
        if ($disabled) {
          // Primary + Checked + Disabled
          return `
            background-color: ${color.gray[700]};
            border: 1px solid ${color.gray[600]};
            color: ${color.gray[500]};
          `;
        }
        // Primary + Checked
        return `
          background-color: ${color.gray[950]};
          border: 1px solid ${color.gray[925]};
          color: ${color.common[100]};
        `;
      } else {
        if ($disabled) {
          // Primary + Unchecked + Disabled
          return `
            background-color: ${color.gray[50]};
            border: 1px solid ${borderColor.light['color-border-alternative']};
            color: ${textColor.light['fg-neutral-disable']};
          `;
        }
        // Primary + Unchecked
        return `
          background-color: ${color.common[100]};
          border: 1px solid ${color.gray[400]};
          color: ${textColor.light['fg-neutral-strong']};
        `;
      }
    }

    // Secondary
    if ($state === 'checked') {
      if ($disabled) {
        // Secondary + Checked + Disabled
        return `
          background-color: ${color.gray[50]};
          border: 1px solid ${borderColor.light['color-border-primary']};
          color: ${textColor.light['fg-neutral-disable']};
        `;
      }
      // Secondary + Checked
      return `
        background-color: ${color.common[100]};
        border: 1px solid ${color.gray[400]};
        color: ${textColor.light['fg-neutral-strong']};
      `;
    } else {
      if ($disabled) {
        // Secondary + Unchecked + Disabled
        return `
          background-color: ${color.gray[50]};
          border: 1px solid ${borderColor.light['color-border-alternative']};
          color: ${textColor.light['fg-neutral-disable']};
        `;
      }
      // Secondary + Unchecked
      return `
        background-color: ${color.common[100]};
        border: 1px solid ${color.gray[400]};
        color: ${textColor.light['fg-neutral-strong']};
      `;
    }
  }}

  &:disabled {
    cursor: not-allowed;
  }
`;

Checkbox.displayName = 'Checkbox';

export { Checkbox };
