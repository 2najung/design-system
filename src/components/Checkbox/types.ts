import { HTMLAttributes } from 'react';

export type CheckboxVariant = 'primary' | 'secondary';
export type CheckboxState = 'checked' | 'unchecked';

export interface CheckboxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  variant?: CheckboxVariant;
  state?: CheckboxState;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}
