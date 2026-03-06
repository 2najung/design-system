import React, { useEffect, useRef, useState } from 'react';

import styled, { css } from 'styled-components';

import color from '../../tokens/color';
import { radius } from '../../tokens/radius';
import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';
import { Cell } from '../Cell';
import { Menu } from '../Menu';
import { Icons } from '../icons';
import { Avatar } from './Avatar';
import { AvatarProps } from './types';

type AvatarGroupState = 'default' | 'hovered' | 'pressed' | 'selected';

interface AvatarItemData extends AvatarProps {
  name?: string;
}

export interface AvatarGroupProps {
  avatars: AvatarItemData[];
  max?: number;
  state?: AvatarGroupState;
  dropdownWidth?: number;
  onItemClick?: (avatar: AvatarItemData, index: number) => void;
  className?: string;
}

export const AvatarGroup = ({
  avatars,
  max = 4,
  state = 'default',
  dropdownWidth,
  onItemClick,
  className,
}: AvatarGroupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const displayedAvatars = avatars.slice(0, max);
  const lastIndex = displayedAvatars.length - 1;

  const getBackgroundColor = () => {
    switch (state) {
      case 'hovered':
        return color.gray['50'];
      case 'pressed':
        return color.gray['100'];
      case 'selected':
        return color.gray['50'];
      default:
        return 'transparent';
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (avatar: AvatarItemData, index: number) => {
    onItemClick?.(avatar, index);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Container ref={containerRef} className={className}>
      <TriggerWrapper onClick={handleToggle}>
        <AvatarsWrapper>
          {displayedAvatars.map((avatarProps, index) => {
            const isLast = index === lastIndex;

            if (isLast) {
              return (
                <LastAvatarWrapper key={index} $index={index}>
                  <LastAvatarContainer $state={state} $bgColor={getBackgroundColor()}>
                    <Avatar {...avatarProps} size='x-small' />
                    <IconWrapper>
                      <Icons.IconChevronDownOutline16
                        color={textColor.light['fg-neutral-alternative']}
                      />
                    </IconWrapper>
                  </LastAvatarContainer>
                </LastAvatarWrapper>
              );
            }

            return (
              <AvatarWrapper key={index} $index={index}>
                <Avatar {...avatarProps} size='x-small' />
              </AvatarWrapper>
            );
          })}
        </AvatarsWrapper>
      </TriggerWrapper>

      {isOpen && (
        <DropdownMenuWrapper $width={dropdownWidth}>
          <Menu width={dropdownWidth || 160} showCheckIcon={false}>
            {avatars.map((avatar, index) => {
              const AvatarLeading = () => <Avatar {...avatar} size='x-small' />;
              return (
                <Cell
                  key={index}
                  leadingContent={AvatarLeading}
                  text={avatar.name || avatar.value || 'Name'}
                  active={index === 0}
                  onClick={() => handleItemClick(avatar, index)}
                />
              );
            })}
          </Menu>
        </DropdownMenuWrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-flex;
`;

const TriggerWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const AvatarsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div<{ $index: number }>`
  ${({ $index }) =>
    $index > 0 &&
    css`
      margin-left: -6px;
    `}

  > div {
    border: ${spacing.gap['gap-0.5']} solid ${color.common['100']};
    box-sizing: content-box;
  }
`;

const LastAvatarWrapper = styled.div<{ $index: number }>`
  ${({ $index }) =>
    $index > 0 &&
    css`
      margin-left: -6px;
    `}
`;

const LastAvatarContainer = styled.div<{
  $state: AvatarGroupState;
  $bgColor: string;
}>`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.gap['gap-0.5']};
  padding-right: ${spacing.gap['gap-1']};
  border-radius: ${radius['rounded-full']};
  background-color: ${({ $bgColor }) => $bgColor};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${color.gray['50']};
  }

  &:active {
    background-color: ${color.gray['100']};
  }

  > div:first-child {
    border: ${spacing.gap['gap-0.5']} solid ${color.common['100']};
    box-sizing: content-box;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${textColor.light['fg-neutral-alternative']};
`;

const DropdownMenuWrapper = styled.div<{ $width?: number }>`
  position: absolute;
  top: calc(100% + ${spacing.gap['gap-1']});
  right: 0;
  transform: translateX(calc(50% - 8px));
  z-index: 1000;
`;
