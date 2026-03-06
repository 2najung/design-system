import React from 'react';

import styled, { css } from 'styled-components';

import { borderColor } from '../../tokens/borderColor';
import color from '../../tokens/color';
import { spacing } from '../../tokens/spacing';
import { DividerProps } from './types';

export const StepDivider = ({ status, orientation = 'vertical' }: DividerProps) => {
  return <StyledDivider $status={status} $orientation={orientation} />;
};

const StyledDivider = styled.div<{ $status: string; $orientation: string }>`
  flex: 1 1 auto;
  height: 1px;
  margin-top: 12px;
  margin-right: ${({ $orientation }) =>
    $orientation === 'horizontal' ? spacing.gap['gap-2'] : '0'};
  transition: all 0.2s ease-in-out;

  ${({ $status }) => {
    switch ($status) {
      case 'Complete':
        return css`
          background-color: ${color.gray['975']};
        `;
      case 'Active':
      case 'Inactive':
      default:
        return css`
          background-color: ${borderColor.light['color-border-primary']};
        `;
    }
  }}
`;
