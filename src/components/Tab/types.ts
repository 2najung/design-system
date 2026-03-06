import { HTMLAttributes, ReactNode } from 'react';

export interface TabItemProps extends HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  disabled?: boolean;
  children: ReactNode;
}

export interface TabProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultValue?: number;
  value?: number;
  onChange?: (index: number) => void;
  children: ReactNode;
  showDivider?: boolean;
}
