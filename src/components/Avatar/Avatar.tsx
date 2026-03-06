import React from 'react';

import styled, { css } from 'styled-components';

import { borderColor } from '../../tokens/borderColor';
import color from '../../tokens/color';
import { radius } from '../../tokens/radius';
import textColor from '../../tokens/textColor';
import typography from '../../tokens/typography';
import { AvatarProps, AvatarSize, AvatarType } from './types';

const StyledAvatar = styled.div<{
  $type: AvatarType;
  $size: AvatarSize;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${borderColor.light['color-border-primary']};
  overflow: hidden;
  flex-shrink: 0;

  ${({ $size }) => {
    switch ($size) {
      case 'x-small':
        return css`
          width: 24px;
          height: 24px;
          border-radius: ${radius['rounded-full']};
        `;
      case 'small':
        return css`
          width: 32px;
          height: 32px;
          border-radius: ${radius['rounded-full']};
        `;
      case 'medium':
        return css`
          width: 40px;
          height: 40px;
          border-radius: ${radius['rounded-full']};
        `;
      case 'large':
        return css`
          width: 48px;
          height: 48px;
          border-radius: ${radius['rounded-full']};
        `;
    }
  }}

  ${({ $type, $size }) => {
    if ($type === 'initial') {
      return css`
        background-color: ${color.gray['900']};
        color: ${color.common['100']};
        ${typography(
          undefined,
          $size === 'x-small'
            ? 'caption2'
            : $size === 'small'
              ? 'body3'
              : $size === 'medium'
                ? 'heading1'
                : 'heading3',
          'medium'
        )}
      `;
    }

    if ($type === 'custom') {
      return css`
        background-color: transparent;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `;
    }

    // default type
    return css`
      background-color: ${color.gray['100']};
      color: ${textColor.light['fg-neutral-assistive']};
      svg {
        ${$size === 'x-small' &&
        css`
          width: 16px;
          height: 16px;
        `}
        ${$size === 'small' &&
        css`
          width: 20px;
          height: 20px;
        `}
        ${$size === 'medium' &&
        css`
          width: 24px;
          height: 24px;
        `}
        ${$size === 'large' &&
        css`
          width: 32px;
          height: 32px;
        `}
      }
    `;
  }}
`;

// 고정된 SVG 아이콘 컴포넌트
const DefaultUserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M16 15.5897C14.7129 15.5897 13.6133 15.1337 12.7013 14.2217C11.7893 13.3099 11.3333 12.2103 11.3333 10.923C11.3333 9.6359 11.7893 8.53635 12.7013 7.62435C13.6133 6.71235 14.7129 6.25635 16 6.25635C17.2871 6.25635 18.3867 6.71235 19.2987 7.62435C20.2107 8.53635 20.6667 9.6359 20.6667 10.923C20.6667 12.2103 20.2107 13.3099 19.2987 14.2217C18.3867 15.1337 17.2871 15.5897 16 15.5897ZM6 23.718V22.7793C6 22.1265 6.17733 21.5218 6.532 20.9653C6.88667 20.4089 7.36067 19.9811 7.954 19.682C9.27178 19.036 10.6012 18.5515 11.9423 18.2283C13.2834 17.9052 14.636 17.7437 16 17.7437C17.364 17.7437 18.7166 17.9052 20.0577 18.2283C21.3988 18.5515 22.7282 19.036 24.046 19.682C24.6393 19.9811 25.1133 20.4089 25.468 20.9653C25.8227 21.5218 26 22.1265 26 22.7793V23.718C26 24.2802 25.803 24.7585 25.409 25.1527C25.015 25.5467 24.5368 25.7437 23.9743 25.7437H8.02567C7.46322 25.7437 6.985 25.5467 6.591 25.1527C6.197 24.7585 6 24.2802 6 23.718Z'
      fill='#CACCCF'
    />
  </svg>
);

export const Avatar = ({
  type = 'default',
  size = 'medium',
  value,
  src,
  alt,
  icon,
  className,
}: AvatarProps) => {
  const renderContent = () => {
    if (type === 'custom' && src) {
      return <img src={src} alt={alt || 'Avatar'} />;
    }

    if (type === 'initial' && value) {
      return value.charAt(0).toUpperCase();
    }

    if (type === 'default') {
      // icon prop이 있으면 사용, 없으면 기본 아이콘 사용
      const IconComponent = icon || DefaultUserIcon;
      return React.createElement(IconComponent);
    }

    return '?';
  };

  return (
    <StyledAvatar $type={type} $size={size} className={className}>
      {renderContent()}
    </StyledAvatar>
  );
};
