import React from 'react';

export type SearchfieldSize = 'small' | 'medium' | 'large';

export interface SearchfieldProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  size?: SearchfieldSize;
  disabled?: boolean;
  active?: boolean;
  focused?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  lang?: 'ko' | 'en';
}
