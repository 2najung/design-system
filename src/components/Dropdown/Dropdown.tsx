import React from 'react';

import styled from 'styled-components';

import { spacing } from '../../tokens';
import { ComboBox } from '../ComboBox';
import { Description } from '../Description';
import { Label } from '../Label';
import { MultiSelect } from '../MultiSelect';
import { Selector } from '../Selector';
import { DropdownProps } from './types';

const Dropdown: React.FC<DropdownProps & { lang?: 'ko' | 'en' }> = ({
  type = 'selector',
  size = 'medium',
  disabled = false,
  active = false,
  focused = false,
  placeholder = '선택해주세요.',
  value,
  options = [],
  label,
  labelType = 'default',
  description,
  descriptionLeadingIcon = false,
  status = 'default',
  onChange,
  onFocus,
  onBlur,
  className = '',
  style,
  lang,
  showCheckIcon = true,
  lineMode,
  ...props
}) => {
  const effectiveLang = lang;

  return (
    <DropdownContainer
      className={`dropdown-container ${className}`}
      style={style}
      {...Object.fromEntries(
        Object.entries(props).filter(
          ([key]) => !['active', 'focused', 'size', 'disabled'].includes(key)
        )
      )}
    >
      {label && (
        <Label type={labelType} lang={effectiveLang}>
          {label}
        </Label>
      )}

      {type === 'combobox' ? (
        <ComboBox
          size={size}
          disabled={disabled}
          active={active}
          focused={focused}
          placeholder={placeholder}
          value={typeof value === 'string' ? value : undefined}
          options={options}
          onChange={onChange as (value: string) => void}
          onFocus={onFocus}
          onBlur={onBlur}
          lang={effectiveLang}
          showCheckIcon={showCheckIcon}
        />
      ) : type === 'multiselect' ? (
        <MultiSelect
          size={size}
          disabled={disabled}
          placeholder={placeholder}
          value={Array.isArray(value) ? value : []}
          options={options}
          onChange={onChange as (value: string[]) => void}
          onFocus={onFocus}
          onBlur={onBlur}
          lang={effectiveLang}
          lineMode={lineMode}
        />
      ) : (
        <Selector
          size={size}
          disabled={disabled}
          active={active}
          focused={focused}
          placeholder={placeholder}
          value={typeof value === 'string' ? value : undefined}
          options={options}
          onChange={onChange as (value: string) => void}
          onFocus={onFocus}
          onBlur={onBlur}
          lang={effectiveLang}
          showCheckIcon={showCheckIcon}
        />
      )}

      {description && (
        <Description status={status} leadingIcon={descriptionLeadingIcon} lang={effectiveLang}>
          {description}
        </Description>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap['gap-1']};
  width: 100%;
`;

Dropdown.displayName = 'Dropdown';

export { Dropdown };
