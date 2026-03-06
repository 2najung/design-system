import React, { createContext, useContext } from 'react';

import styled from 'styled-components';

import { typography } from '../../tokens';
import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';

interface LNBContextValue {
  iconOnly: boolean;
}

const LNBContext = createContext<LNBContextValue>({ iconOnly: false });

export const useLNBContext = () => useContext(LNBContext);

export interface LNBProps {
  children?: React.ReactNode;
  className?: string;
  lang?: 'ko' | 'en';
  style?: React.CSSProperties;
  bottom?: React.ReactNode;
  title?: string | React.ReactNode;
  iconOnly?: boolean;
}

export const LNB: React.FC<LNBProps> = ({
  children,
  className,
  lang,
  style,
  bottom,
  title,
  iconOnly = false,
}) => {
  return (
    <LNBContext.Provider value={{ iconOnly }}>
      <Container className={className} lang={lang} style={style} $iconOnly={iconOnly}>
        {title &&
          (typeof title === 'string' ? (
            !iconOnly && <Title lang={lang}>{title}</Title>
          ) : (
            <TitleWrapper>{title}</TitleWrapper>
          ))}
        <Groups>{children}</Groups>
        {bottom && <Bottom $iconOnly={iconOnly}>{bottom}</Bottom>}
      </Container>
    </LNBContext.Provider>
  );
};

const Container = styled.nav<{ $iconOnly: boolean }>`
  ${typography(undefined, 'body3', 'medium')}

  display: flex;
  flex-direction: column;
  gap: 0;
  padding: ${({ $iconOnly }) => ($iconOnly ? spacing.gap['gap-2'] : spacing.gap['gap-4'])};
  width: 100%;
  height: 100%;
`;

const Bottom = styled.div<{ $iconOnly: boolean }>`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap['gap-2']};
`;

const Title = styled.div`
  ${typography(undefined, 'body3', 'medium')}
  color: ${textColor.light['fg-neutral-strong']};
  margin-bottom: ${spacing.gap['gap-5']};
`;

const TitleWrapper = styled.div`
  margin-bottom: ${spacing.gap['gap-5']};
`;

const Groups = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap['gap-2']};
`;
