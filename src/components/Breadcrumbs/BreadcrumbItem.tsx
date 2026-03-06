import React from 'react';

import styled, { css } from 'styled-components';

import color from '../../tokens/color';
import { radius } from '../../tokens/radius';
import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';
import typography from '../../tokens/typography';
import { BreadcrumbItemProps } from './types';

export const BreadcrumbItem = React.forwardRef<HTMLButtonElement, BreadcrumbItemProps>(
  (
    {
      children,
      onClick,
      active = false,
      disabled = false,
      leadingIcon,
      trailingIcon,
      className,
      ...props
    },
    ref
  ) => {
    const [state, setState] = React.useState<'default' | 'hovered' | 'pressed' | 'focused'>(
      'default'
    );

    const handleMouseEnter = () => {
      if (!disabled) setState('hovered');
    };

    const handleMouseLeave = () => {
      if (!disabled) setState('default');
    };

    const handleMouseDown = () => {
      if (!disabled) setState('pressed');
    };

    const handleMouseUp = () => {
      if (!disabled) setState('hovered');
    };

    const handleFocus = () => {
      if (!disabled) setState('focused');
    };

    const handleBlur = () => {
      if (!disabled) setState('default');
    };

    const handleClick = () => {
      if (!disabled && onClick) {
        onClick();
      }
    };

    return (
      <StyledBreadcrumbItem
        ref={ref}
        className={className}
        $state={state}
        $active={active}
        $disabled={disabled}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
        disabled={disabled}
        {...props}
      >
        {leadingIcon}
        {children}
        {trailingIcon}
      </StyledBreadcrumbItem>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

const StyledBreadcrumbItem = styled.button<{
  $state: 'default' | 'hovered' | 'pressed' | 'focused';
  $active: boolean;
  $disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.gap['gap-1']};
  padding: ${spacing.gap['gap-1']} ${spacing.gap['gap-2']};
  height: 28px;
  border: none;
  border-radius: ${radius['rounded-2']};
  background: none;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  ${typography(undefined, 'body2', 'medium')}

  ${({ $state, $disabled, $active }) => {
    if ($disabled) {
      return css`
        background-color: transparent;
        color: ${textColor.light['fg-neutral-disable']};
        cursor: not-allowed;
      `;
    }

    if ($active) {
      return css`
        background-color: transparent;
        color: ${textColor.light['fg-neutral-primary']};
        cursor: default;
        pointer-events: none;
      `;
    }

    switch ($state) {
      case 'hovered':
        return css`
          background-color: ${color.gray['50']};
          color: ${textColor.light['fg-neutral-alternative']};
        `;
      case 'pressed':
        return css`
          background-color: ${color.gray['100']};
          color: ${textColor.light['fg-neutral-alternative']};
        `;
      case 'focused':
        return css`
          background-color: transparent;
          color: ${textColor.light['fg-neutral-primary']};
        `;
      default:
        return css`
          background-color: transparent;
          color: ${textColor.light['fg-neutral-alternative']};
        `;
    }
  }}

  &:focus {
    outline: none;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
