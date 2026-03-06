import React from 'react';

import styled from 'styled-components';

import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';
import { Icons } from '../icons';
import { BreadcrumbsProps } from './types';

export const Breadcrumbs = ({ children, className, style, ...props }: BreadcrumbsProps) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <StyledBreadcrumbs className={className} style={style} {...props}>
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {index < childrenArray.length - 1 && (
            <Separator>
              <Icons.IconChevronRightOutline20 />
            </Separator>
          )}
        </React.Fragment>
      ))}
    </StyledBreadcrumbs>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';

const StyledBreadcrumbs = styled.nav`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.gap['gap-0']};
`;

const Separator = styled.span`
  display: inline-flex;
  align-items: center;
  color: inherit;
  color: ${textColor.light['fg-neutral-alternative']};

  svg {
    width: 20px;
    height: 20px;
  }
`;
