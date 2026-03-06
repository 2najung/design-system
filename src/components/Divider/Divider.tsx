import React from 'react';

import styled, { css } from 'styled-components';

import color from '../../tokens/color';

export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps {
  orientation?: DividerOrientation;
  thickness?: 1 | 2 | 4 | 6 | 8 | 12;
  className?: string;
  style?: React.CSSProperties;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  thickness = 1,
  className,
  style,
}) => {
  return (
    <Line $orientation={orientation} $thickness={thickness} className={className} style={style} />
  );
};

const Line = styled.div<{
  $orientation: DividerOrientation;
  $thickness: 1 | 2 | 4 | 6 | 8 | 12;
}>`
  background-color: ${color.gray[200]};

  ${({ $orientation, $thickness }) =>
    $orientation === 'horizontal'
      ? css`
          width: 100%;
          height: ${$thickness}px;
        `
      : css`
          width: ${$thickness}px;
          height: 100%;
        `}
`;
