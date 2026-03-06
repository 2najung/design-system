import { HTMLAttributes, ReactNode } from 'react';

export interface ChipTabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultValue?: number;
  value?: number;
  onChange?: (index: number) => void;
  children: ReactNode;
}
