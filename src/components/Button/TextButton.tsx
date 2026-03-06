import React from 'react';

import styled, { css } from 'styled-components';

import { borderColor } from '../../tokens/borderColor';
import brandColor from '../../tokens/brandColor';
import color from '../../tokens/color';
import fontSize from '../../tokens/fontSize';
import fontWeight from '../../tokens/fontWeight';
import negativeColor from '../../tokens/negativeColor';
import positiveColor from '../../tokens/positiveColor';
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
  background: transparent;
  border: none;
  border-radius: ${({ $radius }) => radius[radiusMap[$radius]]};
  font-weight: ${fontWeight['500']};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: inherit;

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
    const getTextColor = () => {
      switch ($variant) {
        case 'secondary':
          return textColor.light['fg-neutral-strong'];
        case 'brand':
          return brandColor.light['fg-brand-strong'];
        case 'positive':
          return positiveColor.light['fg-positive-strong'];
        case 'negative':
          return negativeColor.light['fg-negative-strong'];
        default:
          return textColor.light['fg-neutral-strong'];
      }
    };

    const getBackgroundColor = () => {
      switch ($variant) {
        case 'secondary':
          switch ($state) {
            case 'hovered':
              return `${color.gray['950']}0D`;
            case 'pressed':
              return `${color.gray['950']}14`;
            case 'focused':
              return `${color.gray['950']}1F`;
            default:
              return `${color.gray['950']}00`;
          }
        case 'brand':
          switch ($state) {
            case 'hovered':
              return `${color.deeppurple['600']}0D`;
            case 'pressed':
              return `${color.deeppurple['600']}14`;
            case 'focused':
              return `${color.deeppurple['600']}1F`;
            default:
              return `${color.deeppurple['600']}00`;
          }
        case 'positive':
          switch ($state) {
            case 'hovered':
              return `${color.green['600']}0D`;
            case 'pressed':
              return `${color.green['600']}14`;
            case 'focused':
              return `${color.green['600']}1F`;
            default:
              return `${color.green['600']}00`;
          }
        case 'negative':
          switch ($state) {
            case 'hovered':
              return `${color.red['600']}0D`;
            case 'pressed':
              return `${color.red['600']}14`;
            case 'focused':
              return `${color.red['600']}1F`;
            default:
              return `${color.red['600']}00`;
          }
        default:
          return 'transparent';
      }
    };

    const getBorderColor = () => {
      if ($state === 'focused') {
        switch ($variant) {
          case 'secondary':
            return borderColor.light['color-border-focused'];
          case 'brand':
            return borderColor.light['color-border-brand'];
          case 'positive':
            return borderColor.light['color-border-positive'];
          case 'negative':
            return borderColor.light['color-border-negative'];
          default:
            return 'transparent';
        }
      }
      return 'transparent';
    };

    return css`
      color: ${getTextColor()};
      background-color: ${getBackgroundColor()};
      border: 1px solid ${getBorderColor()};

      &:focus {
        outline: 2px solid ${color.blue['300']};
        outline-offset: 2px;
      }
    `;
  }}

  &:disabled {
    color: ${textColor.light['fg-neutral-disable']} !important;
    cursor: not-allowed;
    background-color: transparent !important;
    pointer-events: none;
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

export const TextButton = ({
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
      onClick={onClick}
      className={className}
      lang={lang}
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
