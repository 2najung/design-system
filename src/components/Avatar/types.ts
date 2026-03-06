import { SVGProps } from 'react';

export type AvatarType = 'default' | 'custom' | 'initial';
export type AvatarSize = 'x-small' | 'small' | 'medium' | 'large';

export interface AvatarProps {
  type?: AvatarType;
  size?: AvatarSize;
  value?: string;
  src?: string;
  alt?: string;
  icon?: React.ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
}
