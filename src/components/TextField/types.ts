import { InputProps } from '../Input/types';

export interface TextFieldProps extends InputProps {
  label?: string;
  labelType?: 'default' | 'required' | 'optional';
  description?: string;
  descriptionLeadingIcon?: boolean;
  type?: 'text' | 'password';
  className?: string;
  lang?: 'ko' | 'en';
}
