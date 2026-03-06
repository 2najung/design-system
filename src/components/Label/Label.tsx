import React from 'react';

import styled from 'styled-components';

import { textColor } from '../../tokens';
import { color } from '../../tokens';
import { typography } from '../../tokens';
import { spacing } from '../../tokens';
import fontFamily from '../../tokens/fontFamily';
import { LabelProps } from './types';

const Label: React.FC<LabelProps & { lang?: 'ko' | 'en' }> = ({
  children,
  type = 'default',
  className = '',
  lang,
  ...props
}) => {
  const effectiveLang = lang;
  const getLabelContent = () => {
    switch (type) {
      case 'required':
        return (
          <>
            <span>{children}</span>
            <RequiredIndicator>*</RequiredIndicator>
          </>
        );
      case 'optional':
        return (
          <>
            <span>{children}</span>
            <OptionalText>(선택)</OptionalText>
          </>
        );
      default:
        return <span>{children}</span>;
    }
  };

  return (
    <StyledLabel $type={type} lang={effectiveLang} className={className} {...props}>
      {getLabelContent()}
    </StyledLabel>
  );
};

const StyledLabel = styled.label<{
  $type: 'default' | 'required' | 'optional';
}>`
  ${typography(undefined, 'body2', 'medium')}
  font-family: inherit;
  height: 20px;
  display: flex;
  align-items: center;
  color: ${textColor.light['fg-neutral-strong']};
`;

const RequiredIndicator = styled.span`
  ${typography(undefined, 'caption2', 'regular')}
  color: ${color.red[500]};
  margin-left: ${spacing.gap['gap-0.5']};
`;

const OptionalText = styled.span`
  ${typography(undefined, 'body2', 'regular')}
  color: ${textColor.light['fg-neutral-alternative']};
  margin-left: ${spacing.gap['gap-0.5']};
`;

Label.displayName = 'Label';

export { Label };
