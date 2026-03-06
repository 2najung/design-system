import React from 'react';

import styled, { css } from 'styled-components';

import { borderColor } from '../../tokens/borderColor';
import color from '../../tokens/color';
import fontSize from '../../tokens/fontSize';
import fontWeight from '../../tokens/fontWeight';
import { radius } from '../../tokens/radius';
import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';
import { Spinner } from './Spinner';
import {
  ButtonProps,
  ButtonRadius,
  ButtonSize,
  ButtonState,
  ButtonVariant,
  radiusMap,
} from './types';

interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $state: ButtonState;
  $loading: boolean;
  $radius: ButtonRadius;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.gap['gap-1']};
  border: none;
  border-radius: ${({ $radius }) => radius[radiusMap[$radius]]};
  font-weight: ${fontWeight['500']};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: inherit;
  white-space: nowrap;

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          padding: 6px 12px;
          height: 32px;
          font-size: ${fontSize.t4[0]};
          font-weight: ${fontWeight['500']};
          svg {
            width: 16px;
            height: 16px;
          }
        `;
      case 'large':
        return css`
          padding: 12px 16px;
          height: 48px;
          font-size: ${fontSize.t5[0]};
          font-weight: ${fontWeight['500']};
          svg {
            width: 24px;
            height: 24px;
          }
        `;
      default:
        return css`
          padding: 8px 16px;
          height: 40px;
          font-size: ${fontSize.t5[0]};
          font-weight: ${fontWeight['500']};
          svg {
            width: 20px;
            height: 20px;
          }
        `;
    }
  }}

  ${({ $variant, $state }) => {
    const getBackgroundColor = () => {
      switch ($variant) {
        case 'primary':
          switch ($state) {
            case 'hovered':
              return color.gray['925'];
            case 'pressed':
              return color.gray['900'];
            case 'focused':
              return color.gray['850'];
            default:
              return color.gray['950'];
          }
        case 'secondary':
          switch ($state) {
            case 'hovered':
              return color.gray['50'];
            case 'pressed':
              return color.gray['100'];
            case 'focused':
              return color.gray['200'];
            default:
              return color.common['100'];
          }
        case 'tertiary':
          switch ($state) {
            case 'hovered':
              return color.gray['100'];
            case 'pressed':
              return color.gray['200'];
            case 'focused':
              return color.gray['100'];
            default:
              return color.gray['50'];
          }
        case 'brand':
          switch ($state) {
            case 'hovered':
            case 'focused':
              return color.deeppurple['600'];
            case 'pressed':
              return color.deeppurple['400'];
            default:
              return color.deeppurple['800'];
          }
        case 'negative':
          switch ($state) {
            case 'hovered':
            case 'focused':
              return color.red['500'];
            case 'pressed':
              return color.red['400'];
            default:
              return color.red['600'];
          }
        case 'positive':
          switch ($state) {
            case 'hovered':
            case 'focused':
              return color.green['500'];
            case 'pressed':
              return color.green['400'];
            default:
              return color.green['600'];
          }
        default:
          return color.gray['950'];
      }
    };

    const getBorderColor = () => {
      switch ($variant) {
        case 'primary':
          return color.gray['800'];
        case 'secondary':
          return $state === 'focused'
            ? borderColor.light['color-border-focused']
            : borderColor.light['color-border-primary'];
        case 'tertiary':
          return $state === 'focused'
            ? borderColor.light['color-border-focused']
            : borderColor.light['color-border-primary'];
        case 'brand':
          switch ($state) {
            case 'hovered':
            case 'focused':
              return color.deeppurple['400'];
            case 'pressed':
              return color.deeppurple['300'];
            default:
              return borderColor.light['color-border-brand'];
          }
        case 'negative':
          switch ($state) {
            case 'hovered':
            case 'focused':
              return color.red['400'];
            case 'pressed':
              return color.red['300'];
            default:
              return color.red['400'];
          }
        case 'positive':
          switch ($state) {
            case 'hovered':
            case 'focused':
              return color.green['400'];
            case 'pressed':
              return color.green['300'];
            default:
              return color.green['500'];
          }
        default:
          return color.gray['800'];
      }
    };

    const getTextColor = () => {
      switch ($variant) {
        case 'primary':
          return color.common['100'];
        case 'secondary':
        case 'tertiary':
          return textColor.light['fg-neutral-strong'];
        case 'brand':
        case 'negative':
        case 'positive':
          return color.common['100'];
        default:
          return color.common['100'];
      }
    };

    return css`
      background-color: ${getBackgroundColor()};
      color: ${getTextColor()};
      border: 1px solid ${getBorderColor()};

      &:focus {
        outline: none;
        border-color: ${$variant === 'secondary'
          ? borderColor.light['color-border-focused']
          : getBorderColor()};
      }
    `;
  }}

  &:disabled {
    background-color: ${color.gray['50']} !important;
    border-color: ${borderColor.light['color-border-primary']} !important;
    color: ${textColor.light['fg-neutral-disable']} !important;
    pointer-events: none;
    cursor: not-allowed;
  }

  ${({ $loading }) =>
    $loading &&
    css`
      cursor: wait;
      pointer-events: none;
    `}
`;

const TextWrapper = styled.span`
  padding: 0 ${spacing.gap['gap-0.5']};
`;

export const SolidButton = ({
  variant = 'primary',
  size = 'medium',
  radius = 'small',
  state = 'default',
  disabled = false,
  loading = false,
  leadingIcon,
  trailingIcon,
  label,
  children,
  onClick,
  className,
  lang,
}: ButtonProps) => {
  const [interactionState, setInteractionState] = React.useState(state);

  React.useEffect(() => {
    setInteractionState(state);
  }, [state]);

  const handleMouseEnter = () => {
    if (!disabled && !loading && state === 'default') {
      setInteractionState('hovered');
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && !loading) {
      setInteractionState(state);
    }
  };

  const handleMouseDown = () => {
    if (!disabled && !loading && state === 'default') {
      setInteractionState('pressed');
    }
  };

  const handleMouseUp = () => {
    if (!disabled && !loading && state === 'default') {
      setInteractionState('hovered');
    }
  };

  const handleFocus = () => {
    if (!disabled && !loading && state === 'default') {
      setInteractionState('focused');
    }
  };

  const handleBlur = () => {
    if (!disabled && !loading) {
      setInteractionState(state);
    }
  };

  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $state={state !== 'default' ? state : interactionState}
      $loading={loading}
      $radius={radius}
      disabled={disabled}
      lang={lang}
      onClick={onClick}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          width: '100%',
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.2s ease',
        }}
      >
        {leadingIcon && React.createElement(leadingIcon)}
        <TextWrapper>{children || label}</TextWrapper>
        {trailingIcon && React.createElement(trailingIcon)}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: loading ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        <Spinner />
      </div>
    </StyledButton>
  );
};
