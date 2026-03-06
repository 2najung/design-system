import styled, { keyframes } from 'styled-components';

import color from '../../tokens/color';

type LoadingIndicatorType = 'spinner' | 'dots';
type LoadingIndicatorSize = 'small' | 'medium' | 'large' | 'x-large';

export interface LoadingIndicatorProps {
  type?: LoadingIndicatorType;
  size?: LoadingIndicatorSize;
  color?: string;
  className?: string;
}

const sizeMap = {
  small: 16,
  medium: 20,
  large: 24,
  'x-large': 32,
};

const dotSizeMap = {
  small: 4,
  medium: 6,
  large: 8,
  'x-large': 10,
};

export const LoadingIndicator = ({
  type = 'spinner',
  size = 'medium',
  color: indicatorColor,
  className,
}: LoadingIndicatorProps) => {
  const defaultColor = indicatorColor || color.gray['950'];

  if (type === 'dots') {
    const dotSize = dotSizeMap[size];
    const gap = Math.max(4, dotSize / 2);

    return (
      <DotsWrapper className={className} $gap={gap}>
        <Dot $size={dotSize} $color={defaultColor} $delay='0s' />
        <Dot $size={dotSize} $color={defaultColor} $delay='0.15s' />
        <Dot $size={dotSize} $color={defaultColor} $delay='0.3s' />
      </DotsWrapper>
    );
  }

  const pixelSize = sizeMap[size];
  const strokeWidth = Math.max(2, pixelSize / 8);
  const radius = (pixelSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <SpinnerWrapper className={className} $size={pixelSize}>
      <SpinnerSvg viewBox={`0 0 ${pixelSize} ${pixelSize}`}>
        <circle
          cx={pixelSize / 2}
          cy={pixelSize / 2}
          r={radius}
          fill='none'
          stroke={color.gray['200']}
          strokeWidth={strokeWidth}
        />
        <SpinnerCircle
          cx={pixelSize / 2}
          cy={pixelSize / 2}
          r={radius}
          fill='none'
          stroke={defaultColor}
          strokeWidth={strokeWidth}
          strokeLinecap='round'
          strokeDasharray={`${circumference * 0.25} ${circumference * 0.75}`}
        />
      </SpinnerSvg>
    </SpinnerWrapper>
  );
};

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0.6);
    opacity: 0.4;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
`;

const SpinnerWrapper = styled.div<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
`;

const SpinnerSvg = styled.svg`
  width: 100%;
  height: 100%;
  animation: ${rotate} 0.8s linear infinite;
`;

const SpinnerCircle = styled.circle``;

const DotsWrapper = styled.div<{ $gap: number }>`
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => $gap}px;
`;

const Dot = styled.div<{ $size: number; $color: string; $delay: string }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  animation: ${bounce} 1s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
`;

LoadingIndicator.displayName = 'LoadingIndicator';
