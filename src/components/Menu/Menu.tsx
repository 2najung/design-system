import React from 'react';

import styled from 'styled-components';

import { borderColor } from '../../tokens/borderColor';
import color from '../../tokens/color';
import { shadow } from '../../tokens/shadow';
import { spacing } from '../../tokens/spacing';
import { MenuProps } from './types';

const Menu: React.FC<MenuProps> = ({
  children,
  className,
  width,
  showCheckIcon = true,
  ...props
}) => {
  // children을 순회하면서 showCheckIcon prop을 주입
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement<{ showCheckIcon?: boolean }>(child)) {
      // Cell 컴포넌트에만 showCheckIcon을 전달 (이미 설정된 경우 무시)
      if (child.props.showCheckIcon === undefined) {
        return React.cloneElement(child, { showCheckIcon } as any);
      }
    }
    return child;
  });

  return (
    <StyledMenu className={className} $width={width} {...props}>
      {childrenWithProps}
    </StyledMenu>
  );
};

const StyledMenu = styled.div<{ $width?: string | number }>`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap['gap-1']};
  padding: ${spacing.gap['gap-1']};
  box-shadow: ${shadow.light['shadow-md']};
  background-color: white;
  border: 1px solid ${borderColor.light['color-border-primary']};
  border-radius: 8px;
  box-sizing: border-box;
  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width || '300px')};

  font-family: inherit;

  .dropdown-container & {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${color.gray['200']};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${color.gray['200']};
  }

  /* Firefox 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: ${color.gray['200']} transparent;
`;

Menu.displayName = 'Menu';

export { Menu };
