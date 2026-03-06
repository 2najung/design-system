import styled, { css } from 'styled-components';

import color from '../../tokens/color';
import { radius } from '../../tokens/radius';
import { shadow } from '../../tokens/shadow';
import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';
import typography from '../../tokens/typography';
import { SegmentItemProps } from './types';

const StyledSegmentItem = styled.button<{
  $active?: boolean;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${radius['rounded-1']};
  ${typography(undefined, 'body3', 'medium')}
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: ${spacing.gap['gap-1']} ${spacing.gap['gap-6']}; // gap-1 (Top/Bottom) gap-6 (Left/Right)
  white-space: nowrap;

  ${({ $active, $disabled }) => {
    if ($disabled) {
      return css`
        background-color: ${color.gray['50']};
        color: ${textColor.light['fg-neutral-disable']};
        pointer-events: none;
        cursor: not-allowed;
      `;
    }

    if ($active) {
      return css`
        background-color: transparent;
        color: ${textColor.light['fg-neutral-primary']};
        position: relative;
        z-index: 1;
      `;
    }

    return css`
      background-color: transparent;
      color: ${textColor.light['fg-neutral-alternative']};
      position: relative;
      z-index: 1;
    `;
  }}

  &:focus {
    outline: none;
  }
`;

export const SegmentItem = ({
  children,
  active = false,
  disabled = false,
  onClick,
  className,
}: SegmentItemProps) => {
  return (
    <StyledSegmentItem
      $active={active}
      $disabled={disabled}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </StyledSegmentItem>
  );
};
