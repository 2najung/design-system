import React from 'react';

export interface CellProps {
  disable?: boolean;
  active?: boolean;
  leadingContent?: React.ComponentType<{ width?: number; height?: number; color?: string }>;
  text?: string;
  description?: string;
  trailingIcon?: React.ComponentType<{ width?: number; height?: number; color?: string }>;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  showCheckIcon?: boolean;
}
