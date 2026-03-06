import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { RadioButton, RadioButtonProps } from '../components/RadioButton';

const RadioButtonWithState = ({
  state = 'unchecked',
  disabled = false,
  onChange,
  ...props
}: RadioButtonProps) => {
  const [currentState, setCurrentState] = useState(state);

  const handleChange = (checked: boolean) => {
    setCurrentState(checked ? 'checked' : 'unchecked');
    onChange?.(checked);
  };

  return (
    <RadioButton state={currentState} disabled={disabled} onChange={handleChange} {...props} />
  );
};

const meta: Meta<typeof RadioButton> = {
  title: 'Components/Inputs/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Radio Button은 사용자가 여러 선택지 중 하나만 선택할 수 있도록 제한하는 기본 UI 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

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
  render: (args) => <RadioButtonWithState {...args} />,
  args: {
    state: 'unchecked',
    disabled: false,
  },
  argTypes: {
    state: { control: 'select', options: ['checked', 'unchecked'] },
    disabled: { control: 'boolean' },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Radio Button</h1>
        <p style={s.desc}>
          여러 선택지 중 하나만 선택할 수 있는 라디오 버튼입니다.
          <br />
          checked/unchecked 상태와 disabled 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {([
            { state: 'checked' as const, disabled: false, label: 'checked' },
            { state: 'unchecked' as const, disabled: false, label: 'unchecked' },
            { state: 'checked' as const, disabled: true, label: 'disabled checked' },
            { state: 'unchecked' as const, disabled: true, label: 'disabled unchecked' },
          ]).map((item) => (
            <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <RadioButton state={item.state} disabled={item.disabled} />
              <span style={s.label}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Interactive</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <RadioButtonWithState state='unchecked' />
          <RadioButtonWithState state='checked' />
        </div>
      </div>
    </div>
  ),
};

export const States: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {([
        { state: 'checked' as const, disabled: false, label: 'checked' },
        { state: 'unchecked' as const, disabled: false, label: 'unchecked' },
        { state: 'checked' as const, disabled: true, label: 'disabled checked' },
        { state: 'unchecked' as const, disabled: true, label: 'disabled unchecked' },
      ]).map((item) => (
        <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <RadioButton state={item.state} disabled={item.disabled} />
          <span style={s.label}>{item.label}</span>
        </div>
      ))}
    </div>
  ),
};
