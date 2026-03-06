import React from 'react';

import styled from 'styled-components';

import { spacing } from '../../tokens/spacing';
import { ChipTabsProps } from './types';

const StyledChipTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.gap['gap-2']}; // gap-2 (8px)
`;

export const ChipTabs = ({
  children,
  className,
  defaultValue = 0,
  value,
  onChange,
  ...props
}: ChipTabsProps) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const currentValue = value !== undefined ? value : internalValue;

  const handleItemClick = (index: number) => {
    if (value === undefined) {
      setInternalValue(index);
    }
    onChange?.(index);
  };

  const childrenArray = React.Children.toArray(children);

  const limitedChildren = childrenArray.slice(0, 8);

  if (childrenArray.length > 8) {
    console.warn(
      `ChipTabs: 최대 8개 이하의 칩만 허용됩니다. ${childrenArray.length}개 중 8개만 표시됩니다. 8개 이상 항목이 필요한 경우 드롭다운(Select) 컴포넌트 사용을 고려하세요.`
    );
  }

  return (
    <StyledChipTabs className={className} {...props}>
      {limitedChildren.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            key: index,
            type: 'solid',
            active: currentValue === index,
            onClick: () => handleItemClick(index),
          } as unknown as React.ReactElement);
        }
        return child;
      })}
    </StyledChipTabs>
  );
};
