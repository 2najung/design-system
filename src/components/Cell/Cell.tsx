import React from 'react';

import styled from 'styled-components';

import { typography } from '../../tokens';
import color from '../../tokens/color';
import fontFamily from '../../tokens/fontFamily';
import { radius } from '../../tokens/radius';
import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';
import { IconCheck } from '../icons';
import { CellProps } from './types';

const Cell: React.FC<CellProps & { lang?: 'ko' | 'en' }> = ({
  disable = false,
  active = false,
  leadingContent: LeadingContent,
  text,
  description,
  trailingIcon: TrailingIcon,
  onClick,
  className,
  lang,
  showCheckIcon = true,
}) => {
  const effectiveLang = lang;
  const getForegroundColor = () => {
    if (disable) {
      return textColor.light['fg-neutral-disable'];
    }
    return textColor.light['fg-neutral-primary'];
  };

  const getDescriptionColor = () => {
    if (disable) {
      return textColor.light['fg-neutral-disable'];
    }
    return textColor.light['fg-neutral-alternative'];
  };

  const shouldShowTrailingIcon = () => {
    return active && !disable && showCheckIcon;
  };

  return (
    <StyledCell
      $disable={disable}
      $active={active}
      data-disable={disable}
      onClick={disable ? undefined : (e) => onClick?.(e)}
      className={className}
      lang={lang}
    >
      {LeadingContent && (
        <LeadingContentWrapper>
          <LeadingContent color={getForegroundColor()} />
        </LeadingContentWrapper>
      )}

      <ContentWrapper>
        {text && <Text>{text}</Text>}
        {description && <Description>{description}</Description>}
      </ContentWrapper>

      {shouldShowTrailingIcon() && (
        <TrailingIconWrapper>
          {TrailingIcon ? (
            <TrailingIcon color={getForegroundColor()} />
          ) : (
            <IconCheck width={16} height={16} color={getForegroundColor()} />
          )}
        </TrailingIconWrapper>
      )}
    </StyledCell>
  );
};

const StyledCell = styled.div<{
  $disable: boolean;
  $active: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${spacing.gap['gap-2']};
  padding: ${spacing.gap['gap-1.5']} ${spacing.gap['gap-2']};
  border-radius: ${radius['rounded-1']};
  background-color: ${color.common['100']};
  cursor: ${({ $disable }) => ($disable ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable='true']) {
    background-color: ${color.gray['50']};
  }
`;

const LeadingContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

const Text = styled.div`
  ${typography(undefined, 'body2', 'regular')}
  font-family: inherit;
  color: inherit;
`;

const Description = styled.div`
  ${typography(undefined, 'caption2', 'regular')}
  font-family: inherit;
  color: ${textColor.light['fg-neutral-alternative']};
`;

const TrailingIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

Cell.displayName = 'Cell';

export { Cell };
