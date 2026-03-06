import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import styled, { keyframes } from 'styled-components';

import { typography } from '../../tokens';
import color from '../../tokens/color';
import { radius } from '../../tokens/radius';
import { spacing } from '../../tokens/spacing';
import { VisualTooltipProps } from './types';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const VisualTooltip: React.FC<VisualTooltipProps> = ({
  children,
  text,
  description,
  content,
  contentWidth = 224,
  contentHeight = 126,
  placement = 'bottom-center',
  offset = 4,
  className,
  defaultVisible = false,
}) => {
  const [isVisible, setIsVisible] = useState(defaultVisible);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [pointerPosition, setPointerPosition] = useState<'top' | 'bottom' | 'left' | 'right'>(
    'top'
  );
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const calculatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const pointerHeight = 8;

    let top = 0;
    let left = 0;

    switch (placement) {
      case 'top-left':
        top = triggerRect.top - tooltipRect.height - offset - pointerHeight;
        left = triggerRect.left;
        setPointerPosition('bottom');
        break;
      case 'top-center':
        top = triggerRect.top - tooltipRect.height - offset - pointerHeight;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        setPointerPosition('bottom');
        break;
      case 'top-right':
        top = triggerRect.top - tooltipRect.height - offset - pointerHeight;
        left = triggerRect.right - tooltipRect.width;
        setPointerPosition('bottom');
        break;
      case 'bottom-left':
        top = triggerRect.bottom + offset + pointerHeight;
        left = triggerRect.left;
        setPointerPosition('top');
        break;
      case 'bottom-center':
        top = triggerRect.bottom + offset + pointerHeight;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        setPointerPosition('top');
        break;
      case 'bottom-right':
        top = triggerRect.bottom + offset + pointerHeight;
        left = triggerRect.right - tooltipRect.width;
        setPointerPosition('top');
        break;
      case 'left-top':
        top = triggerRect.top;
        left = triggerRect.left - tooltipRect.width - offset - pointerHeight;
        setPointerPosition('right');
        break;
      case 'left-center':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left - tooltipRect.width - offset - pointerHeight;
        setPointerPosition('right');
        break;
      case 'left-bottom':
        top = triggerRect.bottom - tooltipRect.height;
        left = triggerRect.left - tooltipRect.width - offset - pointerHeight;
        setPointerPosition('right');
        break;
      case 'right-top':
        top = triggerRect.top;
        left = triggerRect.right + offset + pointerHeight;
        setPointerPosition('left');
        break;
      case 'right-center':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + offset + pointerHeight;
        setPointerPosition('left');
        break;
      case 'right-bottom':
        top = triggerRect.bottom - tooltipRect.height;
        left = triggerRect.right + offset + pointerHeight;
        setPointerPosition('left');
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
    if (!defaultVisible) {
      setIsVisible(false);
    }
  };

  const getPointerLeftPosition = () => {
    switch (placement) {
      case 'top-left':
      case 'bottom-left':
        return '24px';
      case 'top-right':
      case 'bottom-right':
        return 'calc(100% - 24px)';
      default:
        return '50%';
    }
  };

  const getPointerTopPosition = () => {
    switch (placement) {
      case 'left-top':
      case 'right-top':
        return '24px';
      case 'left-bottom':
      case 'right-bottom':
        return 'calc(100% - 24px)';
      default:
        return '50%';
    }
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
            style={{
              top: position.top,
              left: position.left,
              width: content ? contentWidth : undefined,
            }}
          >
            <Pointer
              $position={pointerPosition}
              $left={getPointerLeftPosition()}
              $top={getPointerTopPosition()}
            />
            {content && <ContentArea style={{ height: contentHeight }}>{content}</ContentArea>}
            {(text || description) && (
              <TextArea>
                {text && <Text>{text}</Text>}
                {description && <Description>{description}</Description>}
              </TextArea>
            )}
          </TooltipContent>,
          document.body
        )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const TooltipContent = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap['gap-2']};
  padding: ${spacing.gap['gap-2']} ${spacing.gap['gap-2']} ${spacing.gap['gap-2.5']}
    ${spacing.gap['gap-2']};
  border-radius: ${radius['rounded-2']};
  background-color: ${color.gray['990']};
  z-index: 9999;
  animation: ${fadeIn} 0.25s ease-in-out;
  pointer-events: none;
`;

const ContentArea = styled.div`
  width: 100%;
  border-radius: ${radius['rounded-1']};
  overflow: hidden;
  background-color: ${color.gray['200']};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap['gap-1']};
`;

const Text = styled.span`
  ${typography(undefined, 'body2', 'medium')}
  color: ${color.common['100']};
  word-break: break-word;
`;

const Description = styled.span`
  ${typography(undefined, 'caption2', 'regular')}
  color: ${color.gray['700']};
  word-break: break-word;
`;

const Pointer = styled.div<{
  $position: 'top' | 'bottom' | 'left' | 'right';
  $left: string;
  $top: string;
}>`
  position: absolute;
  background-color: ${color.gray['990']};

  ${({ $position, $left, $top }) => {
    switch ($position) {
      case 'top':
        return `
          width: 16px;
          height: 8px;
          top: -7px;
          left: ${$left};
          transform: translateX(-50%);
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        `;
      case 'bottom':
        return `
          width: 16px;
          height: 8px;
          bottom: -7px;
          left: ${$left};
          transform: translateX(-50%);
          clip-path: polygon(50% 100%, 0% 0%, 100% 0%);
        `;
      case 'left':
        return `
          width: 8px;
          height: 16px;
          left: -7px;
          top: ${$top};
          transform: translateY(-50%);
          clip-path: polygon(0% 50%, 100% 0%, 100% 100%);
        `;
      case 'right':
        return `
          width: 8px;
          height: 16px;
          right: -7px;
          top: ${$top};
          transform: translateY(-50%);
          clip-path: polygon(100% 50%, 0% 0%, 0% 100%);
        `;
    }
  }}
`;

export default VisualTooltip;
