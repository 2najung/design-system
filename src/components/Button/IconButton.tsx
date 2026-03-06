import { SVGProps } from 'react';
import React from 'react';

import styled, { css } from 'styled-components';

import { borderColor } from '../../tokens/borderColor';
import brandColor from '../../tokens/brandColor';
import color from '../../tokens/color';
import negativeColor from '../../tokens/negativeColor';
import positiveColor from '../../tokens/positiveColor';
import { radius } from '../../tokens/radius';
import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';
import { Spinner } from './Spinner';
import { ButtonRadius, radiusMap } from './types';

export type IconButtonSize = 'small' | 'medium' | 'large';
export type IconButtonRadius = ButtonRadius;
export type IconButtonState = 'default' | 'hovered' | 'pressed' | 'focused';
export type IconButtonType = 'solid' | 'outline';
export type IconButtonVariant = 'primary' | 'secondary' | 'brand' | 'positive' | 'negative';

export interface IconButtonProps {
  type?: IconButtonType;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  radius?: IconButtonRadius;
  state?: IconButtonState;
  disabled?: boolean;
  loading?: boolean;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  className?: string;
  lang?: 'ko' | 'en';
}

interface StyledIconButtonProps {
  $type: IconButtonType;
  $variant: IconButtonVariant;
  $size: IconButtonSize;
  $state: IconButtonState;
  $loading: boolean;
  $radius: IconButtonRadius;
}

const StyledIconButton = styled.button<StyledIconButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ $radius }) => radius[radiusMap[$radius]]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: inherit;

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          padding: ${spacing.gap['gap-2']};
          width: 32px;
          height: 32px;
          svg {
            width: 16px;
            height: 16px;
          }
        `;
      case 'large':
        return css`
          padding: ${spacing.gap['gap-3']};
          width: 48px;
          height: 48px;
          svg {
            width: 24px;
            height: 24px;
          }
        `;
      default:
        return css`
          padding: ${spacing.gap['gap-2.5']};
          width: 40px;
          height: 40px;
          svg {
            width: 20px;
            height: 20px;
          }
        `;
    }
  }}

  ${({ $type, $variant, $state }) => {
    if ($type === 'solid') {
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
    } else {
      // Outline type
      const getBorderColor = () => {
        switch ($variant) {
          case 'secondary':
            switch ($state) {
              case 'focused':
                return borderColor.light['color-border-focused'];
              default:
                return borderColor.light['color-border-primary'];
            }
          case 'brand':
            switch ($state) {
              case 'focused':
                return borderColor.light['color-border-brand'];
              default:
                return color.deeppurple['200'];
            }
          case 'positive':
            switch ($state) {
              case 'hovered':
                return color.green['400'];
              case 'pressed':
                return color.green['300'];
              case 'focused':
                return color.green['400'];
              default:
                return color.green['500'];
            }
          case 'negative':
            switch ($state) {
              case 'focused':
                return borderColor.light['color-border-negative'];
              default:
                return color.red['200'];
            }
          default:
            return borderColor.light['color-border-primary'];
        }
      };

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
                return `${color.gray['900']}14`;
              case 'focused':
                return `${color.gray['850']}1F`;
              default:
                return 'transparent';
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
                return 'transparent';
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
                return 'transparent';
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
                return 'transparent';
            }
          default:
            return 'transparent';
        }
      };

      return css`
        border: 1px solid ${getBorderColor()};
        color: ${getTextColor()};
        background-color: ${getBackgroundColor()};

        &:focus {
          outline: 2px solid ${color.blue['300']};
          outline-offset: 2px;
        }
      `;
    }
  }}

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
  }

  ${({ $type, $variant }) => css`
    &:disabled {
      ${$type === 'solid'
        ? css`
            background-color: ${$variant === 'primary'
              ? color.gray['700']
              : color.gray['50']} !important;
            border-color: ${$variant === 'primary'
              ? color.gray['600']
              : borderColor.light['color-border-primary']} !important;
            color: ${$variant === 'primary'
              ? color.gray['500']
              : textColor.light['fg-neutral-disable']} !important;
          `
        : css`
            border-color: ${borderColor.light['color-border-primary']} !important;
            color: ${textColor.light['fg-neutral-disable']} !important;
            background-color: ${color.gray['50']} !important;
          `}
    }
  `}

  ${({ $loading }) =>
    $loading &&
    css`
      cursor: wait;
      pointer-events: none;
    `}
`;

export const IconButton = ({
  type = 'solid',
  variant = 'primary',
  size = 'medium',
  radius = 'small',
  state = 'default',
  disabled = false,
  loading = false,
  icon,
  onClick,
  className,
  lang,
}: IconButtonProps) => {
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
    <StyledIconButton
      $type={type}
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
          width: '100%',
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.2s ease',
        }}
      >
        {icon && React.createElement(icon)}
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
    </StyledIconButton>
  );
};
