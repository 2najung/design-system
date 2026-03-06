import React from 'react';

import styled, { css } from 'styled-components';

import { borderColor } from '../../tokens/borderColor';
import color from '../../tokens/color';
import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';
import typography from '../../tokens/typography';
import { IconCheck } from '../icons/IconCheck';
import { ProgressTrackerProps } from './types';

const TRACKER_SIZE = 24;
const ICON_SIZE = 16;

export const ProgressTracker = ({
  status,
  step,
  label,
  showLabel = false,
  orientation = 'vertical',
}: ProgressTrackerProps) => {
  return (
    <StyledProgressTracker $orientation={orientation}>
      <StyledCircle $status={status}>
        {status === 'Complete' ? (
          <StyledIconWrapper>
            <IconCheck color='white' width={16} height={16} />
          </StyledIconWrapper>
        ) : (
          step
        )}
      </StyledCircle>
      {showLabel && label && <StyledLabel $status={status}>{label}</StyledLabel>}
    </StyledProgressTracker>
  );
};

const StyledProgressTracker = styled.div<{ $orientation: string }>`
  display: flex;
  flex-direction: ${({ $orientation }) => ($orientation === 'vertical' ? 'column' : 'row')};
  align-items: center;
  gap: ${spacing.gap['gap-2']};
  flex: 0 0 auto;
  width: ${({ $orientation }) => ($orientation === 'vertical' ? `${TRACKER_SIZE}px` : 'auto')};
  margin-right: ${({ $orientation }) =>
    $orientation === 'horizontal' ? spacing.gap['gap-2'] : '0'};
`;

const StyledCircle = styled.div<{ $status: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${TRACKER_SIZE}px;
  height: ${TRACKER_SIZE}px;
  border-radius: 50%;
  flex-shrink: 0;
  ${typography(undefined, 'caption2', 'medium')}
  transition: all 0.2s ease-in-out;

  ${({ $status }) => {
    switch ($status) {
      case 'Complete':
        return css`
          background-color: ${color.gray['975']};
          color: ${color.common['100']};
          border: none;
        `;
      case 'Active':
        return css`
          background-color: ${color.common['100']};
          color: ${textColor.light['fg-neutral-primary']};
          border: 1px solid ${color.gray['975']};
        `;
      case 'Inactive':
      default:
        return css`
          background-color: ${color.common['100']};
          color: ${textColor.light['fg-neutral-assistive']};
          border: 1px solid ${borderColor.light['color-border-primary']};
        `;
    }
  }}
`;

const StyledLabel = styled.span<{ $status: string }>`
  ${typography(undefined, 'caption2', 'medium')}
  color: ${({ $status }) =>
    $status === 'Active'
      ? textColor.light['fg-neutral-primary']
      : textColor.light['fg-neutral-alternative']};
  white-space: nowrap;
  width: 100%;
  text-align: center; // 컨테이너 폭 내에서 중앙 정렬
`;

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
`;
