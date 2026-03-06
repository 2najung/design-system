import styled, { css } from 'styled-components';

import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';
import typography from '../../tokens/typography';
import { TabItemProps } from './types';

const StyledTabItem = styled.button<{
  $active?: boolean;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: ${spacing.gap['gap-2']} ${spacing.gap['gap-1']}; // gap-2 (Top/Bottom), gap-1 (Left/Right)
  height: 40px;
  white-space: nowrap;
  position: relative;

  ${typography(undefined, 'body3', 'medium')}

  ${({ $active, $disabled }) => {
    if ($disabled) {
      return css`
        color: ${textColor.light['fg-neutral-disable']};
        pointer-events: none;
        cursor: not-allowed;
      `;
    }

    if ($active) {
      return css`
        color: ${textColor.light['fg-neutral-strong']};
      `;
    }

    return css`
      color: ${textColor.light['fg-neutral-alternative']};
    `;
  }}

  &:focus {
    outline: none;
  }

  &:active {
    ${({ $disabled, $active }) =>
      !$disabled &&
      !$active &&
      css`
        transform: scale(0.98);
      `}
  }
`;

export const TabItem = ({
  children,
  active = false,
  disabled = false,
  onClick,
  className,
  ...props
}: TabItemProps) => {
  return (
    <StyledTabItem
      $active={active}
      $disabled={disabled}
      onClick={onClick}
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledTabItem>
  );
};
