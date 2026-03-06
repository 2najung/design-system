import React, { useState } from 'react';

import styled from 'styled-components';

import { color } from '../../tokens';
import { textColor } from '../../tokens';
import { radius } from '../../tokens/radius';
import { spacing } from '../../tokens/spacing';
import { SwitchProps } from './types';

const Switch: React.FC<SwitchProps & { lang?: 'ko' | 'en' }> = ({
  size = 'medium',
  disabled = false,
  active = false,
  onChange,
  onClick,
  onFocus,
  onBlur,
  className = '',
  style,
  lang,
  ...props
}) => {
  const [internalActive, setInternalActive] = useState(active);

  React.useEffect(() => {
    setInternalActive(active);
  }, [active]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      const newActive = !internalActive;
      setInternalActive(newActive);
      onChange?.(newActive);
      onClick?.(event);
    }
  };

  return (
    <SwitchButton
      $size={size}
      $disabled={disabled}
      $active={internalActive}
      disabled={disabled}
      onClick={handleClick}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`switch ${className}`}
      style={style}
      {...props}
    >
      <SwitchKnob $size={size} $disabled={disabled} $active={internalActive} />
    </SwitchButton>
  );
};

const SwitchButton = styled.button<{
  $size: 'small' | 'medium' | 'large';
  $disabled: boolean;
  $active: boolean;
}>`
  position: relative;
  border: none;
  outline: none;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease-in-out;
  border-radius: ${radius['rounded-full']};

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return `
          width: ${16 * 2 + parseInt(spacing.gap['gap-0.5']) * 2}px;
          height: ${16 + parseInt(spacing.gap['gap-0.5']) * 2}px;
        `;
      case 'large':
        return `
          width: ${24 * 2 + parseInt(spacing.gap['gap-1']) * 2}px;
          height: ${24 + parseInt(spacing.gap['gap-1']) * 2}px;
        `;
      default: // medium
        return `
          width: ${20 * 2 + parseInt(spacing.gap['gap-0.5']) * 2}px;
          height: ${20 + parseInt(spacing.gap['gap-0.5']) * 2}px;
        `;
    }
  }}

  ${({ $active, $disabled }) => {
    if ($disabled && $active) {
      return `
        background-color: ${color.gray['900']};
      `;
    }

    if ($disabled && !$active) {
      return `
        background-color: ${color.gray['300']};
      `;
    }

    if ($active && !$disabled) {
      return `
        background-color: ${color.gray['950']};
      `;
    }

    return `
      background-color: ${color.gray['100']};
    `;
  }}

  &:focus-visible {
    box-shadow: 0 0 0 2px ${color.gray['300']};
  }
`;

const SwitchKnob = styled.div<{
  $size: 'small' | 'medium' | 'large';
  $disabled: boolean;
  $active: boolean;
}>`
  position: absolute;
  border-radius: ${radius['rounded-full']};
  transition: all 0.2s ease-in-out;

  ${({ $size }) => {
    const gap =
      $size === 'large' ? parseInt(spacing.gap['gap-1']) : parseInt(spacing.gap['gap-0.5']);

    switch ($size) {
      case 'small':
        return `
          width: 16px;
          height: 16px;
          top: ${gap}px;
          left: ${gap}px;
        `;
      case 'large':
        return `
          width: 24px;
          height: 24px;
          top: ${gap}px;
          left: ${gap}px;
        `;
      default: // medium
        return `
          width: 20px;
          height: 20px;
          top: ${gap}px;
          left: ${gap}px;
        `;
    }
  }}

  ${({ $active, $disabled }) => {
    if ($disabled && $active) {
      return `
        background-color: ${textColor.light['fg-neutral-alternative']};
      `;
    }

    if ($disabled && !$active) {
      return `
        background-color: ${color.gray['50']};
      `;
    }

    return `
      background-color: ${color.common['100']};
    `;
  }}

  ${({ $active, $size }) => {
    const knobSize = $size === 'small' ? 16 : $size === 'large' ? 24 : 20;
    const gap =
      $size === 'large' ? parseInt(spacing.gap['gap-1']) : parseInt(spacing.gap['gap-0.5']);
    const totalWidth = knobSize * 2 + gap * 2;
    const maxTranslate = totalWidth - knobSize - gap * 2;

    return `
      transform: translateX(${$active ? maxTranslate : 0}px);
    `;
  }}
`;

Switch.displayName = 'Switch';

export { Switch };
