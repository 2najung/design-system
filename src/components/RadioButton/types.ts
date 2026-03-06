import { HTMLAttributes } from 'react';

export type RadioButtonState = 'checked' | 'unchecked';

export interface RadioButtonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  state?: RadioButtonState;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  style?: React.CSSProperties;
}
