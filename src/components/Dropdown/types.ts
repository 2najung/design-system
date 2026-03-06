import React from 'react';

export interface DropdownOption {
  value: string;
  label: string;
  description?: string;
  leadingContent?: React.ComponentType<{ width?: number; height?: number; color?: string }>;
}

export interface DropdownProps {
  type?: 'selector' | 'combobox' | 'multiselect';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  active?: boolean;
  focused?: boolean;
  placeholder?: string;
  value?: string | string[];
  options?: DropdownOption[];
  label?: string;
  labelType?: 'default' | 'required' | 'optional';
  description?: string;
  descriptionLeadingIcon?: boolean;
  status?: 'default' | 'negative' | 'positive';
  onChange?: (value: string | string[]) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  showCheckIcon?: boolean;
  lineMode?: 'single' | 'multi';
}
