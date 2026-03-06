import React from 'react';

import styled from 'styled-components';

import { typography } from '../../tokens';
import color from '../../tokens/color';
import fontFamily from '../../tokens/fontFamily';
import { radius } from '../../tokens/radius';
import { spacing } from '../../tokens/spacing';
import textColor from '../../tokens/textColor';
import { useLNBContext } from './LNB';

export type LNBItemVariant = 'default' | 'hovered' | 'pressed' | 'selected';

export interface LNBItemProps {
  value: string;
  selected?: boolean;
  disabled?: boolean;
  leadingIcon?: React.ComponentType<{
    width?: number;
    height?: number;
    color?: string;
  }>;
  iconOnly?: boolean;
  onClick?: () => void;
  className?: string;
  lang?: 'ko' | 'en';
  style?: React.CSSProperties;
}

export const LNBItem: React.FC<LNBItemProps> = ({
  value,
  selected = false,
  disabled = false,
  leadingIcon: LeadingIcon,
  iconOnly: iconOnlyProp,
  onClick,
  className,
  lang = 'ko',
  style,
}) => {
  const { iconOnly: iconOnlyContext } = useLNBContext();
  const iconOnly = iconOnlyProp ?? iconOnlyContext;

  const iconColor = disabled
    ? textColor.light['fg-neutral-disable']
    : textColor.light['fg-neutral-primary'];

  return (
    <ItemButton
      type='button'
      onClick={disabled ? undefined : onClick}
      $selected={selected}
      $disabled={disabled}
      $iconOnly={iconOnly}
      className={className}
      lang={lang}
      style={style}
    >
      {LeadingIcon && (
        <Leading>
          <LeadingIcon width={20} height={20} color={iconColor} />
        </Leading>
      )}
      {!iconOnly && <Label lang={lang}>{value}</Label>}
    </ItemButton>
  );
};

const ItemButton = styled.button<{
  $selected: boolean;
  $disabled: boolean;
  $iconOnly: boolean;
}>`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: ${({ $iconOnly }) => ($iconOnly ? 'center' : 'flex-start')};
  gap: ${spacing.gap['gap-1.5']};
  padding: ${spacing.gap['gap-2']};
  border: 0;
  border-radius: ${radius['rounded-2']};
  background-color: ${({ $selected }) => ($selected ? color.gray['50'] : color.common['100'])};
  color: ${({ $disabled }) =>
    $disabled ? textColor.light['fg-neutral-disable'] : textColor.light['fg-neutral-primary']};
  text-align: left;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${color.gray['50']};
  }

  &:active {
    background-color: ${color.gray['100']};
  }
`;

const Leading = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  ${typography(undefined, 'body2', 'medium')}
  font-family: inherit;
`;
