import React from 'react';

import styled from 'styled-components';

import { typography } from '../../tokens';
import fontFamily from '../../tokens/fontFamily';
import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';
import { useLNBContext } from './LNB';

export interface LNBItemGroupProps {
  title?: string;
  children?: React.ReactNode;
  lang?: 'ko' | 'en';
  className?: string;
  style?: React.CSSProperties;
}

export const LNBItemGroup: React.FC<LNBItemGroupProps> = ({
  title,
  children,
  lang,
  className,
  style,
}) => {
  const { iconOnly } = useLNBContext();

  return (
    <Wrapper className={className} style={style}>
      {!iconOnly && title && <Title lang={lang}>{title}</Title>}
      <Items>{children}</Items>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap['gap-1.5']};
`;

const Title = styled.div`
  ${typography(undefined, 'body2', 'regular')}
  color: ${textColor.light['fg-neutral-alternative']};
  font-family: inherit;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap['gap-1.5']};
`;
