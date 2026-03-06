import React, { ReactNode, useCallback, useState } from 'react';

import { Toast } from './Toast';
import { ToastPlacement, ToastVariant } from './types';

interface ToastItem {
  id: string;
  message: string;
  description?: string;
  variant: ToastVariant;
  placement?: ToastPlacement;
  autoClose?: boolean;
  autoCloseDelay?: number;
  showDivider?: boolean;
}

interface ToastSystemProps {
  children: ReactNode;
  maxToasts?: number;
  placement?: ToastPlacement;
  offset?: number;
}

// 전역 함수들을 저장할 변수들
let addToast: ((toast: Omit<ToastItem, 'id'>) => void) | null = null;
let removeToast: ((id: string) => void) | null = null;

export const ToastSystem: React.FC<ToastSystemProps> = ({
  children,
  maxToasts = 3,
  placement = 'bottom-right',
  offset = 40,
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [toastHeights, setToastHeights] = useState<{ [key: string]: number }>({});

  const addToastInternal = useCallback(
    (toastProps: Omit<ToastItem, 'id'>) => {
      const id = `toast-${Date.now()}-${Math.random()}`;
      const newToast: ToastItem = {
        ...toastProps,
        id,
        placement: toastProps.placement || placement,
      };

      setToasts((prev) => {
        const updatedToasts = [...prev, newToast];
        if (updatedToasts.length > maxToasts) {
          return updatedToasts.slice(-maxToasts);
        }
        return updatedToasts;
      });
    },
    [maxToasts, placement]
  );

  const removeToastInternal = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  // 전역 함수들을 설정
  React.useEffect(() => {
    addToast = addToastInternal;
    removeToast = removeToastInternal;

    return () => {
      addToast = null;
      removeToast = null;
    };
  }, [addToastInternal, removeToastInternal]);

  // placement에 따른 Container 스타일 계산
  const getContainerStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'fixed',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      pointerEvents: 'none',
    };

    switch (placement) {
      case 'top-left':
        return { ...baseStyle, top: offset, left: offset, alignItems: 'flex-start' };
      case 'top-center':
        return {
          ...baseStyle,
          top: offset,
          left: '50%',
          transform: 'translateX(-50%)',
          alignItems: 'center',
        };
      case 'top-right':
        return { ...baseStyle, top: offset, right: offset, alignItems: 'flex-end' };
      case 'bottom-left':
        return { ...baseStyle, bottom: offset, left: offset, alignItems: 'flex-start' };
      case 'bottom-center':
        return {
          ...baseStyle,
          bottom: offset,
          left: '50%',
          transform: 'translateX(-50%)',
          alignItems: 'center',
        };
      case 'bottom-right':
      default:
        return { ...baseStyle, bottom: offset, right: offset, alignItems: 'flex-end' };
    }
  };

  return (
    <>
      {children}

      {/* Toast Container */}
      <div style={getContainerStyle()}>
        {toasts
          .slice(-maxToasts)
          .reverse()
          .map((toast) => {
            return (
              <div
                key={toast.id}
                ref={(el) => {
                  if (el) {
                    const height = el.offsetHeight;
                    if (height !== toastHeights[toast.id]) {
                      setToastHeights((prev) => ({
                        ...prev,
                        [toast.id]: height,
                      }));
                    }
                  }
                }}
                style={{ pointerEvents: 'auto' }}
              >
                <Toast
                  variant={toast.variant}
                  placement={toast.placement || placement}
                  showDivider={toast.showDivider}
                  autoClose={toast.autoClose !== false}
                  autoCloseDelay={toast.autoCloseDelay || 3000}
                  onClose={() => removeToastInternal(toast.id)}
                  disablePositioning={true}
                  description={toast.description}
                >
                  {toast.message}
                </Toast>
              </div>
            );
          })}
      </div>
    </>
  );
};

// 편의 함수들
export const toast = {
  show: (props: Omit<ToastItem, 'id'>) => {
    if (addToast) {
      addToast(props);
    } else {
      console.warn('ToastSystem이 초기화되지 않았습니다. 앱 루트에 ToastSystem을 추가해주세요.');
    }
  },

  success: (message: string, description?: string) => {
    toast.show({ message, description, variant: 'positive', showDivider: false });
  },

  error: (message: string, description?: string) => {
    toast.show({ message, description, variant: 'negative', showDivider: false });
  },

  warning: (message: string, description?: string) => {
    toast.show({ message, description, variant: 'cautionary', showDivider: false });
  },

  info: (message: string, description?: string) => {
    toast.show({ message, description, variant: 'default', showDivider: false });
  },
};
