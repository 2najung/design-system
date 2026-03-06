import React from 'react';

export type ToastVariant = 'default' | 'positive' | 'negative' | 'cautionary';
export type ToastPlacement =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  children: React.ReactNode;
  description?: string;
  variant?: ToastVariant;
  placement?: ToastPlacement;
  offset?: number;
  onClose?: () => void;
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
  showDivider?: boolean;
  className?: string;
  autoClose?: boolean;
  autoCloseDelay?: number;
  index?: number;
  disablePositioning?: boolean;
}
