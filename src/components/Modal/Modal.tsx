import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import {
  borderColor,
  color,
  layerColor,
  radius,
  shadow,
  spacing,
  textColor,
  typographyCSS,
} from '../../tokens';
import { IconClose } from '../icons';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({
  size = 'medium',
  position = 'center',
  open = false,
  onClose,
  title = '제목',
  description,
  showCloseButton = true,
  children,
  actions,
  className = '',
  style,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      // 약간의 지연 후 애니메이션 시작
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      // 애니메이션 완료 후 DOM에서 제거
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 200); // transition 시간과 동일
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!shouldRender) return null;

  const handleOverlayMouseDown = (e: React.MouseEvent) => {
    const target = e.target as Element;

    // Portal 드롭다운 메뉴 내부 클릭은 모달을 닫지 않음
    if (target.closest('[data-portal-menu]')) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  const handleCloseClick = () => {
    onClose?.();
  };

  return (
    <Overlay $isVisible={isVisible} $position={position} onMouseDown={handleOverlayMouseDown}>
      <ModalContainer
        $size={size}
        $isVisible={isVisible}
        className={className}
        style={style}
        {...props}
      >
        <Header>
          <HeaderTextArea>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
          </HeaderTextArea>
          {showCloseButton && (
            <CloseButton onClick={handleCloseClick}>
              <IconClose width={24} height={24} color='currentColor' />
            </CloseButton>
          )}
        </Header>

        <Content>{children}</Content>

        {actions && <ActionArea>{actions}</ActionArea>}
      </ModalContainer>
    </Overlay>
  );
};

const Overlay = styled.div<{ $isVisible: boolean; $position: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${layerColor.light['bg-overlay']};
  display: flex;
  z-index: 1000;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  padding: 40px;

  ${({ $position }) => {
    // Vertical alignment
    const alignItems = $position.startsWith('top-')
      ? 'flex-start'
      : $position.startsWith('bottom-')
        ? 'flex-end'
        : 'center';

    // Horizontal alignment
    const justifyContent = $position.endsWith('-left')
      ? 'flex-start'
      : $position.endsWith('-right')
        ? 'flex-end'
        : 'center';

    return `
      align-items: ${alignItems};
      justify-content: ${justifyContent};
    `;
  }}
`;

const ModalContainer = styled.div<{
  $size: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  $isVisible: boolean;
}>`
  background-color: ${layerColor.light['bg-layer-floating']};
  border: 1px solid ${borderColor.light['color-border-primary']};
  border-radius: ${radius['rounded-3']};
  box-shadow: ${shadow.light['shadow-lg']};
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: visible;
  transform: ${({ $isVisible }) => ($isVisible ? 'scale(1)' : 'scale(0.95)')};
  transition: transform 0.2s ease-in-out;

  ${({ $size }) => {
    switch ($size) {
      case 'x-small':
        return `
          width: 320px;
        `;
      case 'small':
        return `
          width: 480px;
        `;
      case 'medium':
        return `
          width: 640px;
        `;
      case 'large':
        return `
          width: 960px;
        `;
      case 'x-large':
        return `
          width: 1200px;
        `;
      default:
        return `
          width: 500px;
          min-height: 300px;
        `;
    }
  }}
`;

const Header = styled.div`
  padding: ${spacing.gap['gap-6']} ${spacing.gap['gap-6']} ${spacing.gap['gap-3']}
    ${spacing.gap['gap-6']};
  border-radius: ${radius['rounded-3']} ${radius['rounded-3']} 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const HeaderTextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap['gap-1']};
`;

const Title = styled.h2`
  ${typographyCSS.heading1}
  font-weight: 600;
  color: ${color.gray[950]};
  margin: 0;
`;

const Description = styled.p`
  ${typographyCSS.body2}
  color: ${textColor.light['fg-neutral-alternative']};
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${color.gray[950]};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

const Content = styled.div`
  padding: ${spacing.gap['gap-3']} ${spacing.gap['gap-6']};
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`;

const ActionArea = styled.div`
  padding: ${spacing.gap['gap-3']} ${spacing.gap['gap-6']} ${spacing.gap['gap-6']}
    ${spacing.gap['gap-6']};
  display: flex;
  gap: ${spacing.gap['gap-2']};
`;

const CancelButton = styled.button`
  padding: ${spacing.gap['gap-2']} ${spacing.gap['gap-4']};
  background-color: ${color.common[100]};
  border: 1px solid ${borderColor.light['color-border-primary']};
  border-radius: ${radius['rounded-2']};
  color: ${color.gray[950]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${color.gray[50]};
  }
`;

const ConfirmButton = styled.button`
  padding: ${spacing.gap['gap-2']} ${spacing.gap['gap-4']};
  background-color: ${color.gray[950]};
  border: none;
  border-radius: ${radius['rounded-2']};
  color: ${color.common[100]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${color.gray[925]};
  }
`;

Modal.displayName = 'Modal';

export { Modal };
