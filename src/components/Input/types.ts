import React from 'react';

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type'
> {
  size?: 'small' | 'medium' | 'large';
  status?: 'default' | 'negative' | 'positive';
  disabled?: boolean;
  active?: boolean;
  focused?: boolean;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'password';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  lang?: 'ko' | 'en';
}
