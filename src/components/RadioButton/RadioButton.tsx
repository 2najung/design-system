import React from 'react';

import styled from 'styled-components';

import { color } from '../../tokens';
import { borderColor } from '../../tokens';
import { radius } from '../../tokens';
import { RadioButtonProps } from './types';

const RadioButton: React.FC<RadioButtonProps> = ({
  state = 'unchecked',
  disabled = false,
  onChange,
  className = '',
  style,
  ...props
}) => {
  const handleClick = () => {
    if (disabled) return;

    const nextState = !(state === 'checked');
    onChange?.(nextState);
  };

  return (
    <StyledRadioButton
      $state={state}
      $disabled={disabled}
      onClick={handleClick}
      className={className}
      style={style}
      {...props}
    >
      {state === 'checked' && <RadioDot />}
    </StyledRadioButton>
  );
};

const StyledRadioButton = styled.div<{
  $state: 'checked' | 'unchecked';
  $disabled: boolean;
}>`
  width: 16px;
  height: 16px;
  border-radius: ${radius['rounded-full']};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  position: relative;

  ${({ $state, $disabled }) => {
    if ($disabled) {
      if ($state === 'checked') {
        return `
          background-color: ${color.gray[200]};
          border: 1px solid ${borderColor.light['color-border-alternative']};
        `;
      } else {
        return `
          background-color: ${color.gray[50]};
          border: 1px solid ${borderColor.light['color-border-alternative']};
        `;
      }
    }

    if ($state === 'checked') {
      return `
        background-color: ${color.gray[950]};
        border: none;
      `;
    } else {
      return `
        background-color: ${color.common[100]};
        border: 1px solid ${borderColor.light['color-border-primary']};
      `;
    }
  }}

  &:disabled {
    cursor: not-allowed;
  }
`;

const RadioDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: ${radius['rounded-full']};
  background-color: ${color.common[100]};
  position: absolute;
`;

RadioButton.displayName = 'RadioButton';

export { RadioButton };
