import React from 'react';

export interface SwitchProps {
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  active?: boolean;
  onChange?: (active: boolean) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  lang?: 'ko' | 'en';
}
