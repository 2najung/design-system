import { HTMLAttributes, ReactNode } from 'react';

export type ModalSize = 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
export type ModalPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  size?: ModalSize;
  position?: ModalPosition;
  open?: boolean;
  onClose?: () => void;
  title?: string;
  description?: string;
  showCloseButton?: boolean;
  actions?: ReactNode;
  children?: ReactNode;
  style?: React.CSSProperties;
}
