import { TokenInputProps } from '../TokenInput/types';

export interface TokenFieldProps extends Omit<TokenInputProps, 'value' | 'onChange'> {
  label?: string;
  labelType?: 'default' | 'required' | 'optional';
  description?: string;
  descriptionLeadingIcon?: boolean;
  value?: string[];
  onChange?: (value: string[]) => void;
  className?: string;
  lang?: 'ko' | 'en';
}
