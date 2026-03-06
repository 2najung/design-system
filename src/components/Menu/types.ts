import React from 'react';

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  width?: string | number;
  showCheckIcon?: boolean;
}
