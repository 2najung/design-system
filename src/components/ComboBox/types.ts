export interface ComboBoxOption {
  value: string;
  label: string;
  description?: string;
  leadingContent?: React.ComponentType<{ width?: number; height?: number; color?: string }>;
}

export interface ComboBoxProps {
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  active?: boolean;
  focused?: boolean;
  placeholder?: string;
  value?: string;
  options?: ComboBoxOption[];
  onChange?: (value: string) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  lang?: 'ko' | 'en';
  showCheckIcon?: boolean;
}
