import { SVGProps } from 'react';

import { radius } from '../../tokens/radius';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonRadius = 'small' | 'medium' | 'large';

export const radiusMap: Record<ButtonRadius, keyof typeof radius> = {
  small: 'rounded-2',
  medium: 'rounded-3',
  large: 'rounded-full',
};
export type ButtonState = 'default' | 'hovered' | 'pressed' | 'focused';
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'brand'
  | 'positive'
  | 'negative';

export interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
  state?: ButtonState;
  disabled?: boolean;
  loading?: boolean;
}

export interface ButtonProps extends ButtonStyleProps {
  leadingIcon?: React.ComponentType<SVGProps<SVGSVGElement>>;
  trailingIcon?: React.ComponentType<SVGProps<SVGSVGElement>>;
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  lang?: 'ko' | 'en';
}
