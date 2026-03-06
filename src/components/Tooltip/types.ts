import { ReactNode } from 'react';

export type TooltipVariant = 'primary' | 'secondary';
export type TooltipPlacement =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left'
  | 'left-top'
  | 'left-center'
  | 'left-bottom'
  | 'right'
  | 'right-top'
  | 'right-center'
  | 'right-bottom';

export interface TooltipProps {
  children: ReactNode;
  text: string;
  hotkey?: string;
  variant?: TooltipVariant;
  placement?: TooltipPlacement;
  offset?: number;
  className?: string;
}

export interface VisualTooltipProps {
  children: ReactNode;
  text?: string;
  description?: string;
  content?: ReactNode;
  contentWidth?: number;
  contentHeight?: number;
  placement?: TooltipPlacement;
  offset?: number;
  className?: string;
  defaultVisible?: boolean;
}
