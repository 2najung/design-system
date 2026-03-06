import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../components';
import type { InputProps } from '../components/Input/types';

const InputWithState = (props: InputProps) => {
  const [value, setValue] = useState(props.value || '');
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    setIsActive(true);
    props.onFocus?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setIsActive(false);
    props.onBlur?.(event);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <Input
      {...props}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      active={isActive}
      focused={isFocused}
    />
  );
};

const meta: Meta<typeof Input> = {
  title: 'Components/Inputs/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '텍스트 입력을 위한 기본 Input 컴포넌트입니다. 3가지 size, 3가지 status, active/focused 상태를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const s = {
  page: {
    padding: '40px',
    maxWidth: 960,
    margin: '0 auto',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  } as React.CSSProperties,
  header: {
    marginBottom: 48,
  } as React.CSSProperties,
  title: {
    fontSize: 28,
    fontWeight: 700,
    color: '#171719',
    margin: '0 0 8px',
    letterSpacing: -0.5,
  } as React.CSSProperties,
  desc: {
    fontSize: 15,
    color: '#7b7e85',
    margin: 0,
    lineHeight: 1.5,
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: 13,
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
    color: '#8f9298',
    margin: '0 0 16px',
  } as React.CSSProperties,
  card: {
    border: '1px solid #e6e7e9',
    borderRadius: 12,
    padding: '24px',
    marginBottom: 16,
  } as React.CSSProperties,
  cardLabel: {
    fontSize: 13,
    fontWeight: 500,
    color: '#525459',
    marginBottom: 16,
  } as React.CSSProperties,
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 16,
  } as React.CSSProperties,
  gridItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 8,
  } as React.CSSProperties,
  label: {
    fontSize: 11,
    color: '#8f9298',
    fontFamily: "'SF Mono', monospace",
  } as React.CSSProperties,
};

// ─── Playground ──────────────────────────────────────────────
export const Playground: Story = {
  parameters: { layout: 'centered' },
  render: (args) => <InputWithState {...args} />,
  args: {
    placeholder: '텍스트를 입력해 주세요.',
    size: 'medium',
    status: 'default',
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    status: { control: 'select', options: ['default', 'negative', 'positive'] },
    disabled: { control: 'boolean' },
    active: { control: 'boolean' },
    focused: { control: 'boolean' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

// ─── Overview ────────────────────────────────────────────────
export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Input</h1>
        <p style={s.desc}>
          3가지 사이즈와 상태(default, negative, positive)를 지원하는 텍스트 입력 컴포넌트입니다.
          <br />
          클릭하면 active/focused 상태가 자동 적용되며, cancel/check/error 아이콘이 상태에 따라 표시됩니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={s.grid}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} style={s.gridItem}>
              <span style={s.label}>{size} ({size === 'small' ? '32px' : size === 'medium' ? '40px' : '48px'})</span>
              <InputWithState placeholder='텍스트를 입력해 주세요.' size={size} />
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Status</p>
      <div style={s.card}>
        <div style={s.grid}>
          {([
            { status: 'default' as const, label: 'default', value: '' },
            { status: 'negative' as const, label: 'negative', value: '올바르지 않은 입력' },
            { status: 'positive' as const, label: 'positive', value: '올바른 입력' },
          ]).map(({ status, label, value }) => (
            <div key={label} style={s.gridItem}>
              <span style={s.label}>{label}</span>
              <InputWithState value={value} placeholder='텍스트를 입력해 주세요.' status={status} />
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Disabled</p>
      <div style={s.card}>
        <div style={{ ...s.grid, gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div style={s.gridItem}>
            <span style={s.label}>empty</span>
            <Input placeholder='텍스트를 입력해 주세요.' disabled />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>with value</span>
            <Input value='비활성화된 입력' disabled />
          </div>
        </div>
      </div>
    </div>
  ),
};

// ─── States Matrix ───────────────────────────────────────────
export const StatesMatrix: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>States</h1>
        <p style={s.desc}>
          status와 active/focused 조합에 따른 Input의 시각적 변화를 확인할 수 있습니다.
          <br />
          상태에 따라 border 색상, 아이콘(cancel, error, check)이 변경됩니다.
        </p>
      </div>

      {([
        {
          title: 'Default',
          items: [
            { label: 'idle', props: { status: 'default' as const, value: 'Default idle' } },
            { label: 'active', props: { status: 'default' as const, value: 'Default active', active: true } },
            { label: 'focused', props: { status: 'default' as const, value: 'Default focused', focused: true } },
            { label: 'active + focused', props: { status: 'default' as const, value: 'Active + Focused', active: true, focused: true } },
            { label: 'disabled', props: { status: 'default' as const, value: 'Disabled', disabled: true } },
          ],
        },
        {
          title: 'Negative',
          items: [
            { label: 'idle', props: { status: 'negative' as const, value: 'Negative idle' } },
            { label: 'focused', props: { status: 'negative' as const, value: 'Negative focused', focused: true } },
            { label: 'active + focused', props: { status: 'negative' as const, value: 'Active + Focused', active: true, focused: true } },
          ],
        },
        {
          title: 'Positive',
          items: [
            { label: 'active', props: { status: 'positive' as const, value: 'Positive active', active: true } },
            { label: 'active + focused', props: { status: 'positive' as const, value: 'Active + Focused', active: true, focused: true } },
            { label: 'disabled', props: { status: 'positive' as const, value: 'Positive disabled', disabled: true } },
          ],
        },
      ]).map(({ title, items }) => (
        <div key={title}>
          <p style={s.sectionTitle}>{title}</p>
          <div style={s.card}>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(items.length, 3)}, 1fr)`, gap: 16 }}>
              {items.map(({ label, props }) => (
                <div key={label} style={s.gridItem}>
                  <span style={s.label}>{label}</span>
                  <Input {...props} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

// ─── Password ────────────────────────────────────────────────
export const Password: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Password Input</h1>
        <p style={s.desc}>
          type="password"로 설정하면 비밀번호 입력 모드가 됩니다.
          <br />
          값이 입력되면 visibility 토글 아이콘이 나타납니다.
        </p>
      </div>

      <div style={s.card}>
        <div style={{ ...s.grid, gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div style={s.gridItem}>
            <span style={s.label}>empty</span>
            <InputWithState type='password' placeholder='비밀번호를 입력해 주세요.' />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>with value</span>
            <InputWithState type='password' value='mypassword123' placeholder='비밀번호를 입력해 주세요.' />
          </div>
        </div>
      </div>
    </div>
  ),
};
