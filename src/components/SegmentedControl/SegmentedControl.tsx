import React from 'react';

import styled from 'styled-components';

import color from '../../tokens/color';
import { radius } from '../../tokens/radius';
import { shadow } from '../../tokens/shadow';
import { spacing } from '../../tokens/spacing';
import { SegmentedControlProps } from './types';

const StyledSegmentedControl = styled.div`
  display: inline-flex;
  background-color: ${color.gray['50']};
  border-radius: ${radius['rounded-2']};
  padding: ${spacing.gap['gap-1']}; // gap-1 (Top/Bottom) gap-1 (Left/Right)
  gap: ${spacing.gap['gap-0.5']};
  position: relative;
`;

const SelectionIndicator = styled.div<{
  $activeIndex: number;
  $totalItems: number;
}>`
  position: absolute;
  top: ${spacing.gap['gap-1']};
  bottom: ${spacing.gap['gap-1']};
  background-color: ${color.common['100']};
  border-radius: ${radius['rounded-1']};
  box-shadow: ${shadow.light['shadow-xs']};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $activeIndex, $totalItems }) => {
    const gapSize = 2; // gap-0.5 = 2px
    const paddingSize = 4; // gap-1 = 4px
    const itemWidth = `calc((100% - ${($totalItems - 1) * gapSize}px - ${
      paddingSize * 2
    }px) / ${$totalItems})`;
    const leftPosition = `calc(${paddingSize}px + ${$activeIndex} * (${itemWidth} + ${gapSize}px))`;

    return `
      left: ${leftPosition};
      width: ${itemWidth};
    `;
  }}
`;

export const SegmentedControl = ({
  children,
  className,
  defaultValue = 0,
  value,
  onChange,
}: SegmentedControlProps) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const currentValue = value !== undefined ? value : internalValue;

  const handleItemClick = (index: number) => {
    if (value === undefined) {
      setInternalValue(index);
    }
    onChange?.(index);
  };

  const childrenArray = React.Children.toArray(children);

  return (
    <StyledSegmentedControl className={className}>
      <SelectionIndicator $activeIndex={currentValue} $totalItems={childrenArray.length} />
      {childrenArray.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            key: index,
            active: currentValue === index,
            onClick: () => handleItemClick(index),
          } as any);
        }
        return child;
      })}
    </StyledSegmentedControl>
  );
};
