import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxProps } from '../components/Checkbox';

const CheckboxWithState = ({
  variant = 'secondary',
  state = 'unchecked',
  disabled = false,
  onChange,
  ...props
}: CheckboxProps) => {
  const [currentState, setCurrentState] = useState(state);

  const handleChange = (checked: boolean) => {
    setCurrentState(checked ? 'checked' : 'unchecked');
    onChange?.(checked);
  };

  return (
    <Checkbox
      variant={variant}
      state={currentState}
      disabled={disabled}
      onChange={handleChange}
      {...props}
    />
  );
};

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Checkbox는 사용자의 선택을 나타내는 컴포넌트입니다. Primary와 Secondary 변형을 지원하며, checked와 unchecked 상태를 가집니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const s = {
  page: { padding: '40px', maxWidth: 960, margin: '0 auto', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" } as React.CSSProperties,
  header: { marginBottom: 48 } as React.CSSProperties,
  title: { fontSize: 28, fontWeight: 700, color: '#171719', margin: '0 0 8px', letterSpacing: -0.5 } as React.CSSProperties,
  desc: { fontSize: 15, color: '#7b7e85', margin: 0, lineHeight: 1.5 } as React.CSSProperties,
  sectionTitle: { fontSize: 13, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#8f9298', margin: '0 0 16px' } as React.CSSProperties,
  card: { border: '1px solid #e6e7e9', borderRadius: 12, padding: '24px', marginBottom: 16 } as React.CSSProperties,
  label: { fontSize: 11, color: '#8f9298', fontFamily: "'SF Mono', monospace" } as React.CSSProperties,
};

export const Playground: Story = {
  parameters: { layout: 'centered' },
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    variant: 'secondary',
    state: 'unchecked',
    disabled: false,
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    state: { control: 'select', options: ['checked', 'unchecked'] },
    disabled: { control: 'boolean' },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Checkbox</h1>
        <p style={s.desc}>
          사용자의 선택을 나타내는 체크박스 컴포넌트입니다.
          <br />
          Primary/Secondary 변형과 checked/unchecked/disabled 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Variants × States</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {(['primary', 'secondary'] as const).map((variant) => (
            <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={s.label}>{variant}</span>
              <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <Checkbox variant={variant} state='checked' />
                  <span style={s.label}>checked</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <Checkbox variant={variant} state='unchecked' />
                  <span style={s.label}>unchecked</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <Checkbox variant={variant} state='checked' disabled />
                  <span style={s.label}>disabled checked</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <Checkbox variant={variant} state='unchecked' disabled />
                  <span style={s.label}>disabled unchecked</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Interactive</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <CheckboxWithState variant='primary' state='unchecked' />
            <span style={s.label}>primary</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <CheckboxWithState variant='secondary' state='unchecked' />
            <span style={s.label}>secondary</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {(['primary', 'secondary'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Checkbox variant={variant} state='checked' />
          <span style={s.label}>{variant}</span>
        </div>
      ))}
    </div>
  ),
};

export const States: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {(['primary', 'secondary'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={s.label}>{variant}</span>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Checkbox variant={variant} state='checked' />
              <span style={s.label}>checked</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Checkbox variant={variant} state='unchecked' />
              <span style={s.label}>unchecked</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Checkbox variant={variant} state='checked' disabled />
              <span style={s.label}>disabled</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};
