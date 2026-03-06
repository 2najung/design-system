import styled, { css } from 'styled-components';

import { borderColor } from '../../tokens/borderColor';
import brandColor from '../../tokens/brandColor';
import cautioniaryColor from '../../tokens/cautioniaryColor';
import color from '../../tokens/color';
import fontWeight from '../../tokens/fontWeight';
import infoColor from '../../tokens/infoColor';
import negativeColor from '../../tokens/negativeColor';
import positiveColor from '../../tokens/positiveColor';
import { radius } from '../../tokens/radius';
import textColor from '../../tokens/textColor';
import { BadgeProps, BadgeStyleProps } from './types';

const StyledBadge = styled.div<BadgeStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: ${radius['rounded-2']};
  font-weight: ${fontWeight['500']};
  white-space: nowrap;

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;

      path {
        fill: currentColor;
      }
    }
  }

  // 크기 변형
  ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return css`
          padding: 2px 6px;
          height: 20px;
          font-size: 12px; // Caption2-medium
          line-height: 16px;
        `;
      case 'large':
        return css`
          padding: 4px 8px;
          height: 28px;
          font-size: 14px; // Body2-medium
          line-height: 20px;
        `;
      default: // medium
        return css`
          padding: 4px 6px;
          height: 24px;
          font-size: 12px; // Caption2-medium
          line-height: 16px;
        `;
    }
  }}

  // 색상 변형
  ${({ variant = 'primary', type = 'outline' }) => {
    const getColors = () => {
      switch (type) {
        case 'solid':
          switch (variant) {
            case 'primary':
              return {
                background: color.gray['100'],
                text: textColor.light['fg-neutral-primary'],
                border: 'transparent',
              };
            case 'secondary':
              return {
                background: color.gray['100'],
                text: textColor.light['fg-neutral-alternative'],
                border: 'transparent',
              };
            case 'brand':
              return {
                background: color.deeppurple['100'],
                text: brandColor.light['fg-brand-strong'],
                border: 'transparent',
              };
            case 'positive':
              return {
                background: color.green['50'],
                text: positiveColor.light['fg-positive-primary'],
                border: 'transparent',
              };
            case 'negative':
              return {
                background: color.red['50'],
                text: negativeColor.light['fg-negative-primary'],
                border: 'transparent',
              };
            case 'info':
              return {
                background: color.blue['50'],
                text: infoColor.light['fg-info-primary'],
                border: 'transparent',
              };
            case 'cautionary':
              return {
                background: color.yellow['50'],
                text: cautioniaryColor.light['fg-cautionary-primary'],
                border: 'transparent',
              };
            default:
              return {
                background: color.gray['50'],
                text: textColor.light['fg-neutral-primary'],
                border: 'transparent',
              };
          }
        case 'strong':
          switch (variant) {
            case 'primary':
              return {
                background: color.gray['950'],
                text: color.common['100'], // common-white
                border: 'transparent',
              };
            case 'secondary':
              return {
                background: color.gray['800'],
                text: color.common['100'], // common-white
                border: 'transparent',
              };
            case 'brand':
              return {
                background: color.deeppurple['800'],
                text: color.common['100'], // common-white
                border: 'transparent',
              };
            case 'positive':
              return {
                background: color.green['600'],
                text: color.common['100'], // common-white
                border: 'transparent',
              };
            case 'negative':
              return {
                background: color.red['600'],
                text: color.common['100'], // common-white
                border: 'transparent',
              };
            case 'info':
              return {
                background: color.blue['600'],
                text: color.common['100'], // common-white
                border: 'transparent',
              };
            case 'cautionary':
              return {
                background: cautioniaryColor.light['bg-cautionary-primary-default'],
                text: color.common['100'], // common-white
                border: 'transparent',
              };
            default:
              return {
                background: color.gray['950'],
                text: color.common['100'],
                border: 'transparent',
              };
          }
        default: // outline
          switch (variant) {
            case 'primary':
              return {
                background: 'transparent',
                text: textColor.light['fg-neutral-primary'],
                border: borderColor.light['color-border-primary'],
              };
            case 'secondary':
              return {
                background: 'transparent',
                text: textColor.light['fg-neutral-alternative'],
                border: borderColor.light['color-border-primary'],
              };
            case 'brand':
              return {
                background: 'transparent',
                text: brandColor.light['fg-brand-strong'],
                border: borderColor.light['color-border-brand'],
              };
            case 'positive':
              return {
                background: 'transparent',
                text: positiveColor.light['fg-positive-primary'],
                border: borderColor.light['color-border-positive'],
              };
            case 'negative':
              return {
                background: 'transparent',
                text: negativeColor.light['fg-negative-primary'],
                border: color.red['500'],
              };
            case 'info':
              return {
                background: 'transparent',
                text: infoColor.light['fg-info-primary'],
                border: color.blue['500'],
              };
            case 'cautionary':
              return {
                background: 'transparent',
                text: cautioniaryColor.light['fg-cautionary-primary'],
                border: color.yellow['400'],
              };
            default:
              return {
                background: 'transparent',
                text: textColor.light['fg-neutral-primary'],
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
`;

export const Badge = ({
  variant = 'primary',
  type = 'outline',
  size = 'medium',
  text,
  children,
  leadingIcon,
  trailingIcon,
  className,
}: BadgeProps) => {
  return (
    <StyledBadge variant={variant} type={type} size={size} className={className}>
      {leadingIcon && <span className='icon'>{leadingIcon}</span>}
      <span>{children || text}</span>
      {trailingIcon && <span className='icon'>{trailingIcon}</span>}
    </StyledBadge>
  );
};
