import React from 'react';

import styled from 'styled-components';

import { textColor } from '../../tokens';
import { negativeColor } from '../../tokens';
import { positiveColor } from '../../tokens';
import { typography } from '../../tokens';
import { spacing } from '../../tokens';
import fontFamily from '../../tokens/fontFamily';
import { IconCircleCheck, IconError } from '../icons';
import type { DescriptionProps } from './types';

const Description: React.FC<DescriptionProps & { lang?: 'ko' | 'en' }> = ({
  children,
  status = 'default',
  leadingIcon = false,
  className = '',
  lang,
  ...props
}) => {
  const effectiveLang = lang;
  const getIcon = () => {
    if (!leadingIcon) return null;

    switch (status) {
      case 'negative':
        return (
          <ErrorIcon>
            <IconError />
          </ErrorIcon>
        );
      case 'positive':
        return (
          <SuccessIcon>
            <IconCircleCheck />
          </SuccessIcon>
        );
      default:
        return null;
    }
  };

  return (
    <StyledDescription status={status} lang={effectiveLang} className={className} {...props}>
      {getIcon()}
      <span>{children}</span>
    </StyledDescription>
  );
};

const StyledDescription = styled.div<{
  status: 'default' | 'negative' | 'positive';
}>`
  ${typography(undefined, 'caption2', 'regular')}
  font-family: inherit;
  height: 16px;
  display: flex;
  align-items: center;

  color: ${({ status }) => {
    switch (status) {
      case 'negative':
        return negativeColor.light['fg-negative-primary'];
      case 'positive':
        return positiveColor.light['fg-positive-primary'];
      default:
        return textColor.light['fg-neutral-assistive'];
    }
  }};
`;

const IconBase = styled.div`
  width: 16px;
  height: 16px;
  margin-right: ${spacing.gap['gap-1']};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ErrorIcon = styled(IconBase)`
  color: ${negativeColor.light['fg-negative-primary']};
`;

const SuccessIcon = styled(IconBase)`
  color: ${positiveColor.light['fg-positive-primary']};
`;

Description.displayName = 'Description';

export { Description };
