export type ChipType = 'outline' | 'solid';
export type ChipSize = 'x-small' | 'small' | 'medium' | 'large';
export type ChipState = 'default' | 'hovered' | 'pressed' | 'focused';
export type ChipRadius =
  | 'rounded-1'
  | 'rounded-1.5'
  | 'rounded-2'
  | 'rounded-3'
  | 'rounded-4'
  | 'rounded-5'
  | 'rounded-full';

export interface ChipProps {
  type?: ChipType;
  size?: ChipSize;
  state?: ChipState;
  disabled?: boolean;
  active?: boolean;
  text?: string;
  children?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  radius?: ChipRadius;
  lang?: 'ko' | 'en';
}

export interface ChipStyleProps {
  type: ChipType;
  size: ChipSize;
  state: ChipState;
  disabled: boolean;
  active: boolean;
  radius: ChipRadius;
}
