import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import styled, { css, keyframes } from 'styled-components';

import { typography } from '../../tokens';
import { borderColor } from '../../tokens/borderColor';
import color from '../../tokens/color';
import { radius } from '../../tokens/radius';
import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';
import { TooltipProps } from './types';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  hotkey,
  variant = 'primary',
  placement = 'bottom-left',
  offset = 4,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const calculatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (placement) {
      case 'top-left':
        top = triggerRect.top - tooltipRect.height - offset;
        left = triggerRect.left;
        break;
      case 'top-center':
        top = triggerRect.top - tooltipRect.height - offset;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'top-right':
        top = triggerRect.top - tooltipRect.height - offset;
        left = triggerRect.right - tooltipRect.width;
        break;
      case 'bottom-left':
        top = triggerRect.bottom + offset;
        left = triggerRect.left;
        break;
      case 'bottom-center':
        top = triggerRect.bottom + offset;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom-right':
        top = triggerRect.bottom + offset;
        left = triggerRect.right - tooltipRect.width;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left - tooltipRect.width - offset;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + offset;
        break;
    }

    setPosition({ top, left });
  };

  useEffect(() => {
    if (isVisible) {
      calculatePosition();
    }
  }, [isVisible, placement, offset]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <Container
      ref={triggerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
      {isVisible &&
        createPortal(
          <TooltipContent
            ref={tooltipRef}
            $variant={variant}
            style={{ top: position.top, left: position.left }}
          >
            <Text $variant={variant}>{text}</Text>
            {hotkey && <Hotkey $variant={variant}>{hotkey}</Hotkey>}
          </TooltipContent>,
          document.body
        )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-flex;
`;

const TooltipContent = styled.div<{
  $variant: 'primary' | 'secondary';
}>`
  position: fixed;
  display: flex;
  align-items: center;
  gap: ${spacing.gap['gap-1.5']};
  padding: ${spacing.gap['gap-1']} ${spacing.gap['gap-2']};
  border-radius: ${radius['rounded-1.5']};
  white-space: nowrap;
  z-index: 9999;
  animation: ${fadeIn} 0.15s ease-in-out;
  pointer-events: none;

  ${({ $variant }) =>
    $variant === 'primary'
      ? css`
          background-color: ${color.gray['990']};
          border: none;
        `
      : css`
          background-color: ${color.common['100']};
          border: 1px solid ${borderColor.light['color-border-primary']};
        `}
`;

const Text = styled.span<{ $variant: 'primary' | 'secondary' }>`
  ${typography(undefined, 'body2', 'medium')}
  color: ${({ $variant }) =>
    $variant === 'primary' ? color.common['100'] : textColor.light['fg-neutral-primary']};
`;

const Hotkey = styled.span<{ $variant: 'primary' | 'secondary' }>`
  ${typography(undefined, 'body2', 'medium')}
  color: ${({ $variant }) =>
    $variant === 'primary'
      ? textColor.light['fg-neutral-assistive']
      : textColor.light['fg-neutral-assistive']};
`;

export default Tooltip;
