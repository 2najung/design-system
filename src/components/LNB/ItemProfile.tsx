import React from 'react';

import styled from 'styled-components';

import { typography } from '../../tokens';
import color from '../../tokens/color';
import fontFamily from '../../tokens/fontFamily';
import { radius } from '../../tokens/radius';
import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';
import { Avatar } from '../Avatar/Avatar';
import { useLNBContext } from './LNB';

export interface LNBItemProfileProps {
  name: string;
  avatarSrc?: string;
  avatarType?: 'default' | 'custom' | 'initial';
  onClick?: () => void;
  className?: string;
  lang?: 'ko' | 'en';
  style?: React.CSSProperties;
  trailingIcon?: React.ComponentType<{
    width?: number;
    height?: number;
    color?: string;
  }>;
}

export const LNBItemProfile: React.FC<LNBItemProfileProps> = ({
  name,
  avatarSrc,
  avatarType = 'custom',
  onClick,
  className,
  lang = 'ko',
  style,
  trailingIcon: TrailingIcon,
}) => {
  const { iconOnly: iconOnlyContext } = useLNBContext();

  return (
    <ProfileButton
      type='button'
      onClick={onClick}
      className={className}
      lang={lang}
      style={style}
      $iconOnly={iconOnlyContext}
    >
      <Avatar type={avatarType} size='x-small' src={avatarSrc} value={name} />
      {!iconOnlyContext && (
        <>
          <Name lang={lang}>{name}</Name>
          {TrailingIcon && (
            <TrailingIconWrapper>
              <TrailingIcon width={20} height={20} color={textColor.light['fg-neutral-primary']} />
            </TrailingIconWrapper>
          )}
        </>
      )}
    </ProfileButton>
  );
};

const ProfileButton = styled.button<{ $iconOnly: boolean }>`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: ${({ $iconOnly }) => ($iconOnly ? 'center' : 'flex-start')};
  gap: ${spacing.gap['gap-1.5']};
  padding: ${spacing.gap['gap-2']};
  border: 0;
  border-radius: ${radius['rounded-2']};
  background-color: ${color.common['100']};
  color: ${textColor.light['fg-neutral-primary']};
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${color.gray['50']};
  }

  &:active {
    background-color: ${color.gray['100']};
  }
`;

const Name = styled.span`
  ${typography(undefined, 'body2', 'medium')}
  flex: 1;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: inherit;
`;

const TrailingIconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
