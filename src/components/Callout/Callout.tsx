import React from 'react';

import styled from 'styled-components';

import color from '../../tokens/color';
import negativeColor from '../../tokens/negativeColor';
import positiveColor from '../../tokens/positiveColor';
import { radius } from '../../tokens/radius';
import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';
import typography from '../../tokens/typography';
import { Icons } from '../icons';
import { CalloutProps } from './types';

export const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      title,
      description,
      leadingIcon = true,
      trailingIcon = false,
      onTrailingIconClick,
      className,
      ...props
    },
    ref
  ) => {
    const getLeadingIcon = () => {
      if (!leadingIcon) return null;

      switch (variant) {
        case 'positive':
          return <Icons.IconCirclecheckFill16 />;
        case 'negative':
          return <Icons.IconErrorFill16 />;
        case 'cautionary':
          return <Icons.IconWarningFill16 />;
        case 'info':
          return <Icons.IconInfoFill16 />;
        default:
          return <Icons.IconInfoFill16 />;
      }
    };

    return (
      <CalloutContainer ref={ref} className={className} $variant={variant} $size={size} {...props}>
        {leadingIcon && (
          <LeadingIconWrapper $variant={variant} $size={size}>
            {getLeadingIcon()}
          </LeadingIconWrapper>
        )}

        <ContentWrapper>
          <Title $variant={variant}>{title}</Title>
          {description && <Description $variant={variant}>{description}</Description>}
        </ContentWrapper>

        {trailingIcon && (
          <TrailingIconWrapper onClick={onTrailingIconClick} $variant={variant}>
            <Icons.IconChevronRightOutline20 />
          </TrailingIconWrapper>
        )}
      </CalloutContainer>
    );
  }
);

Callout.displayName = 'Callout';

const CalloutContainer = styled.div<{ $variant: string; $size: string }>`
  display: flex;
  align-items: flex-start;
  gap: ${spacing.gap['gap-2']};
  padding: ${({ $size }) =>
    $size === 'small'
      ? `${spacing.gap['gap-2.5']} ${spacing.gap['gap-3']}`
      : `${spacing.gap['gap-3.5']} ${spacing.gap['gap-3']}`};
  border-radius: ${radius['rounded-2']};
  min-width: 240px;
  width: 100%;
  background-color: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return color.gray['50'];
      case 'secondary':
        return color.gray['50'];
      case 'positive':
        return color.green['50'];
      case 'negative':
        return color.red['50'];
      case 'cautionary':
        return color.orange['50'];
      case 'info':
        return color.blue['50'];
      default:
        return color.gray['50'];
    }
  }};
`;

const LeadingIconWrapper = styled.div<{ $variant: string; $size: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding-top: ${spacing.gap['gap-0.5']};
  color: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return textColor.light['fg-neutral-strong'];
      case 'secondary':
        return textColor.light['fg-neutral-alternative'];
      case 'positive':
        return positiveColor.light['fg-positive-primary'];
      case 'negative':
        return negativeColor.light['fg-negative-primary'];
      case 'cautionary':
        return color.orange['500'];
      case 'info':
        return color.blue['500'];
      default:
        return textColor.light['fg-neutral-strong'];
    }
  }};

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap['gap-1']};
  flex: 1;
`;

const Title = styled.div<{ $variant: string }>`
  ${typography(undefined, 'body2', 'medium')}
  color: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return textColor.light['fg-neutral-strong'];
      case 'secondary':
        return textColor.light['fg-neutral-alternative'];
      case 'positive':
        return positiveColor.light['fg-positive-primary'];
      case 'negative':
        return negativeColor.light['fg-negative-primary'];
      case 'cautionary':
        return color.orange['500'];
      case 'info':
        return color.blue['500'];
      default:
        return textColor.light['fg-neutral-strong'];
    }
  }};
`;

const Description = styled.div<{ $variant: string }>`
  ${typography(undefined, 'caption2', 'regular')}
  color: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return textColor.light['fg-neutral-alternative'];
      case 'secondary':
        return textColor.light['fg-neutral-alternative'];
      case 'positive':
        return color.green['500'];
      case 'negative':
        return color.red['400'];
      case 'cautionary':
        return color.orange['400'];
      case 'info':
        return color.blue['500'];
      default:
        return textColor.light['fg-neutral-alternative'];
    }
  }};
`;

const TrailingIconWrapper = styled.div<{ $variant: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-shrink: 0;
  cursor: pointer;
  color: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return textColor.light['fg-neutral-strong'];
      case 'secondary':
        return textColor.light['fg-neutral-alternative'];
      case 'positive':
        return positiveColor.light['fg-positive-primary'];
      case 'negative':
        return negativeColor.light['fg-negative-primary'];
      case 'cautionary':
        return color.orange['500'];
      case 'info':
        return color.blue['500'];
      default:
        return textColor.light['fg-neutral-strong'];
    }
  }};

  svg {
    width: 20px;
    height: 20px;
  }
`;
