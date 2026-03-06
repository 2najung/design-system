import React from 'react';

import styled, { css } from 'styled-components';

import { borderColor } from '../../tokens/borderColor';
import color from '../../tokens/color';
import fontWeight from '../../tokens/fontWeight';
import { radius } from '../../tokens/radius';
import textColor from '../../tokens/textColor';
import { ChipProps } from './types';

type ChipType = 'solid' | 'outline';
type ChipSize = 'x-small' | 'small' | 'medium' | 'large';
type ChipState = 'default' | 'hovered' | 'pressed' | 'focused';

interface StyledChipProps {
  $type: ChipType;
  $size: ChipSize;
  $state: ChipState;
  $active: boolean;
  $disabled: boolean;
  $radius: keyof typeof radius;
}

const StyledChip = styled.div<StyledChipProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: ${({ $radius }) => radius[$radius]};
  font-weight: ${fontWeight['500']};
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: inherit;

  ${({ $size }) => {
    switch ($size) {
      case 'x-small':
        return css`
          padding: 4px 6px;
          height: 24px;
          font-size: 14px;
          line-height: 20px;
          font-weight: ${fontWeight['500']};
        `;
      case 'small':
        return css`
          padding: 6px 8px;
          height: 32px;
          font-size: 14px;
          line-height: 20px;
          font-weight: ${fontWeight['500']};
        `;
      case 'large':
        return css`
          padding: 8px 12px;
          height: 40px;
          font-size: 16px;
          line-height: 24px;
          font-weight: ${fontWeight['500']};
        `;
      default:
        return css`
          padding: 8px 12px;
          height: 36px;
          font-size: 14px;
          line-height: 20px;
          font-weight: ${fontWeight['500']};
        `;
    }
  }}

  ${({ $type, $state, $active, $disabled }) => {
    const getColors = () => {
      if ($disabled) {
        return {
          background: $type === 'solid' ? color.gray['50'] : 'transparent',
          text: textColor.light['fg-neutral-disable'],
          border: $type === 'outline' ? borderColor.light['color-border-primary'] : 'transparent',
        };
      }

      if ($active) {
        if ($type === 'solid') {
          return {
            background: color.gray['950'],
            text: color.common['100'],
            border: 'transparent',
          };
        } else {
          return {
            background: color.gray['950'] + '1F',
            text: textColor.light['fg-neutral-alternative'],
            border: borderColor.light['color-border-focused'],
          };
        }
      }

      if ($type === 'solid') {
        switch ($state) {
          case 'hovered':
            return {
              background: color.gray['200'],
              text: textColor.light['fg-neutral-alternative'],
              border: 'transparent',
            };
          case 'pressed':
            return {
              background: color.gray['300'],
              text: textColor.light['fg-neutral-alternative'],
              border: 'transparent',
            };
          case 'focused':
            return {
              background: color.gray['950'],
              text: color.common['100'],
              border: 'transparent',
            };
          default:
            return {
              background: color.gray['100'],
              text: textColor.light['fg-neutral-alternative'],
              border: 'transparent',
            };
        }
      } else {
        switch ($state) {
          case 'hovered':
            return {
              background: color.gray['950'] + '0D',
              text: textColor.light['fg-neutral-alternative'],
              border: borderColor.light['color-border-primary'],
            };
          case 'pressed':
            return {
              background: color.gray['950'] + '14',
              text: textColor.light['fg-neutral-alternative'],
              border: borderColor.light['color-border-primary'],
            };
          case 'focused':
            return {
              background: color.gray['950'] + '1F',
              text: textColor.light['fg-neutral-alternative'],
              border: borderColor.light['color-border-focused'],
            };
          default:
            return {
              background: 'transparent',
              text: textColor.light['fg-neutral-alternative'],
              border: borderColor.light['color-border-primary'],
            };
        }
      }
    };

    const colors = getColors();
    return css`
      background-color: ${colors.background};
      color: ${colors.text};
      border: 1px solid ${colors.border};
    `;
  }}

  &[data-disabled='true'] {
    cursor: not-allowed;
    pointer-events: none;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Chip = ({
  type = 'outline',
  size = 'medium',
  state = 'default',
  disabled = false,
  active = false,
  text,
  children,
  leadingIcon,
  trailingIcon,
  onClick,
  className,
  radius = 'rounded-full',
  lang,
}: ChipProps) => {
  const [interactionState, setInteractionState] = React.useState(state);

  React.useEffect(() => {
    setInteractionState(state);
  }, [state]);

  const handleMouseEnter = () => {
    if (!disabled && state === 'default') {
      setInteractionState('hovered');
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setInteractionState(state);
    }
  };

  const handleMouseDown = () => {
    if (!disabled && state === 'default') {
      setInteractionState('pressed');
    }
  };

  const handleMouseUp = () => {
    if (!disabled && state === 'default') {
      setInteractionState('hovered');
    }
  };

  const handleFocus = () => {
    if (!disabled && state === 'default') {
      setInteractionState('focused');
    }
  };

  const handleBlur = () => {
    if (!disabled) {
      setInteractionState(state);
    }
  };

  return (
    <StyledChip
      $type={type}
      $size={size}
      $state={state !== 'default' ? state : interactionState}
      $disabled={disabled}
      $active={active}
      $radius={radius}
      data-disabled={disabled}
      className={className}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={disabled ? -1 : 0}
      lang={lang}
    >
      {leadingIcon && <span className='icon'>{leadingIcon}</span>}
      <span>{children || text}</span>
      {trailingIcon && <span className='icon'>{trailingIcon}</span>}
    </StyledChip>
  );
};
