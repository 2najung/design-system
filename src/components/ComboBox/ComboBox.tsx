import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import styled from 'styled-components';

import { textColor } from '../../tokens';
import { borderColor } from '../../tokens';
import { radius } from '../../tokens';
import { spacing } from '../../tokens';
import { typography } from '../../tokens';
import { color } from '../../tokens';
import { Cell } from '../Cell';
import { Menu } from '../Menu';
import { IconArrowDown, IconArrowUp } from '../icons';
import { ComboBoxOption, ComboBoxProps } from './types';

const ComboBox: React.FC<ComboBoxProps> = ({
  size = 'medium',
  disabled = false,
  active = false,
  focused = false,
  placeholder = '입력하거나 선택해주세요.',
  value,
  options = [],
  onChange,
  onFocus,
  onBlur,
  className = '',
  style,
  lang = 'ko',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalFocused, setInternalFocused] = useState(focused);
  const [inputValue, setInputValue] = useState(value || '');
  const [showAllOptions, setShowAllOptions] = useState(true);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const [menuPosition, setMenuPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });
  const comboBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (portalRef.current && portalRef.current.contains(target)) return;

      if (comboBoxRef.current && !comboBoxRef.current.contains(target)) {
        setIsOpen(false);
        setInternalFocused(false);
        setShowAllOptions(false);

        if (selectedValue) {
          const selectedOption = options.find((option) => option.value === selectedValue);
          setInputValue(selectedOption ? selectedOption.label : '');
        } else {
          setInputValue('');
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedValue, options]);

  useEffect(() => {
    setInternalFocused(focused);
  }, [focused]);

  useEffect(() => {
    if (isOpen && comboBoxRef.current) {
      const updatePosition = () => {
        if (comboBoxRef.current) {
          const rect = comboBoxRef.current.getBoundingClientRect();
          setMenuPosition({
            top: rect.bottom + window.scrollY,
            left: rect.left + window.scrollX,
            width: rect.width,
          });
        }
      };

      updatePosition();

      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);

      return () => {
        window.removeEventListener('scroll', updatePosition, true);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (value) {
      const selectedOption = options.find((option) => option.value === value);
      setInputValue(selectedOption ? selectedOption.label : value);
      setSelectedValue(value);
    } else {
      setInputValue('');
      setSelectedValue('');
    }
  }, [value, options]);

  const handleIconClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setInternalFocused(true);
        setShowAllOptions(true);
        inputRef.current?.focus();
      } else {
        setShowAllOptions(false);
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setShowAllOptions(false);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setInternalFocused(true);
    setIsOpen(true);
    setShowAllOptions(true);
    onFocus?.(event);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setInternalFocused(false);
    onBlur?.(event);
  };

  const handleOptionClick = (option: ComboBoxOption) => {
    setInputValue(option.label);
    setSelectedValue(option.value);
    onChange?.(option.value);
    setIsOpen(false);
    setInternalFocused(false);
  };

  const getIconColor = () => {
    if (disabled) {
      return textColor.light['fg-neutral-alternative'];
    }
    return textColor.light['fg-neutral-primary'];
  };

  const filteredOptions = showAllOptions
    ? options
    : options.filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));

  return (
    <ComboBoxContainer
      ref={comboBoxRef}
      className={`combobox-container ${className}`}
      style={style}
      {...props}
    >
      <ComboBoxInputWrapper
        $size={size}
        $disabled={disabled}
        $active={active}
        $focused={internalFocused}
        lang={lang}
      >
        <ComboBoxInput
          ref={inputRef}
          $size={size}
          $disabled={disabled}
          $active={active}
          $focused={internalFocused}
          $hasValue={!!inputValue}
          lang={lang}
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <ComboBoxIcon size={size} onClick={handleIconClick}>
          {isOpen ? (
            <IconArrowUp
              width={size === 'small' ? 16 : size === 'large' ? 24 : 20}
              height={size === 'small' ? 16 : size === 'large' ? 24 : 20}
              color={getIconColor()}
            />
          ) : (
            <IconArrowDown
              width={size === 'small' ? 16 : size === 'large' ? 24 : 20}
              height={size === 'small' ? 16 : size === 'large' ? 24 : 20}
              color={getIconColor()}
            />
          )}
        </ComboBoxIcon>
      </ComboBoxInputWrapper>

      {isOpen &&
        filteredOptions.length > 0 &&
        createPortal(
          <PortalMenuWrapper
            ref={portalRef}
            onMouseDown={(e) => e.stopPropagation()}
            onMouseDownCapture={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            data-portal-menu
            $top={menuPosition.top}
            $left={menuPosition.left}
            $width={menuPosition.width}
          >
            <Menu>
              {filteredOptions.map((option) => (
                <Cell
                  key={option.value}
                  text={option.label}
                  description={option.description}
                  leadingContent={option.leadingContent}
                  active={option.value === selectedValue}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOptionClick(option);
                  }}
                />
              ))}
            </Menu>
          </PortalMenuWrapper>,
          document.body
        )}
    </ComboBoxContainer>
  );
};

const ComboBoxContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ComboBoxInputWrapper = styled.div<{
  $size: 'small' | 'medium' | 'large';
  $disabled: boolean;
  $active: boolean;
  $focused: boolean;
  lang?: 'ko' | 'en';
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${radius['rounded-2']};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  ${({ $disabled, $active, $focused }) => {
    if ($disabled) {
      return `
        background-color: ${color.common['100']};
        border-color: ${borderColor.light['color-border-primary']};
        cursor: not-allowed;
      `;
    }

    if ($active && $focused) {
      return `
        background-color: ${color.common['100']};
        border-color: ${borderColor.light['color-border-focused']};
      `;
    }

    if ($active) {
      return `
        background-color: ${color.common['100']};
        border-color: ${borderColor.light['color-border-primary']};
      `;
    }

    if ($focused) {
      return `
        background-color: ${color.common['100']};
        border-color: ${borderColor.light['color-border-focused']};
      `;
    }

    return `
      background-color: ${color.common['100']};
      border-color: ${borderColor.light['color-border-primary']};
    `;
  }}
`;

const ComboBoxInput = styled.input<{
  $size: 'small' | 'medium' | 'large';
  $disabled: boolean;
  $active: boolean;
  $focused: boolean;
  $hasValue: boolean;
  lang?: 'ko' | 'en';
}>`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;

  ${({ $size, lang = 'ko' }) => {
    const iconGap = $size === 'large' ? spacing.gap['gap-2.5'] : spacing.gap['gap-2'];
    const iconSize = $size === 'small' ? 16 : $size === 'large' ? 24 : 20;
    const rightPadding = iconSize + parseInt(iconGap) * 2;

    switch ($size) {
      case 'small':
        return `
          height: 30px;
          ${typography(lang, 'body2', 'regular')}
          padding: ${spacing.gap['gap-1']} ${spacing.gap['gap-2']};
          padding-right: ${rightPadding}px;
        `;
      case 'large':
        return `
          height: 46px;
          ${typography(lang, 'body3', 'regular')}
          padding: ${spacing.gap['gap-3']} ${spacing.gap['gap-2.5']};
          padding-right: ${rightPadding}px;
        `;
      default:
        return `
          height: 38px;
          ${typography(lang, 'body3', 'regular')}
          padding: ${spacing.gap['gap-2']} ${spacing.gap['gap-2']};
          padding-right: ${rightPadding}px;
        `;
    }
  }}

  ${({ $disabled, $active, $focused, $hasValue }) => {
    if ($disabled) {
      return `
        color: ${textColor.light['fg-neutral-disable']};
        cursor: not-allowed;
      `;
    }

    if ($active && $focused) {
      return `
        color: ${textColor.light['fg-neutral-primary']};
      `;
    }

    if ($active || $hasValue) {
      return `
        color: ${textColor.light['fg-neutral-primary']};
      `;
    }

    if ($focused) {
      return `
        color: ${textColor.light['fg-neutral-alternative']};
      `;
    }

    return `
      color: ${textColor.light['fg-neutral-alternative']};
    `;
  }}

  &::placeholder {
    color: ${textColor.light['fg-neutral-alternative']};
  }
`;

const ComboBoxMenuWrapper = styled.div`
  position: absolute;
  top: calc(100% + ${spacing.gap['gap-1']});
  left: 0;
  right: 0;
  z-index: 1000;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

const PortalMenuWrapperBase = styled.div<{
  $top: number;
  $left: number;
  $width: number;
}>`
  position: absolute;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  width: ${({ $width }) => $width}px;
  z-index: 9999;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

const PortalMenuWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof PortalMenuWrapperBase>
>((props, ref) => <PortalMenuWrapperBase ref={ref} {...props} />);

const ComboBoxIcon = styled.div<{ size: 'small' | 'medium' | 'large' }>`
  position: absolute;
  right: ${({ size }) => (size === 'large' ? spacing.gap['gap-2.5'] : spacing.gap['gap-2'])};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
`;

ComboBox.displayName = 'ComboBox';

export { ComboBox };
