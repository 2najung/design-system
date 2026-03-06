import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div<{ size?: 'small' | 'medium' | 'large' }>`
  width: ${({ size }) => (size === 'small' ? '14px' : size === 'large' ? '18px' : '16px')};
  height: ${({ size }) => (size === 'small' ? '14px' : size === 'large' ? '18px' : '16px')};
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  display: block;
`;

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

export const Spinner = ({ size = 'medium' }: SpinnerProps) => {
  return <SpinnerWrapper size={size} />;
};
