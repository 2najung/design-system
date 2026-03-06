import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Switch, SwitchProps } from '../components/Switch';

const SwitchWithState = (args: SwitchProps) => {
  const [active, setActive] = useState(args.active || false);

  return <Switch {...args} active={active} onChange={(newActive) => setActive(newActive)} />;
};

const meta: Meta<typeof Switch> = {
  title: 'Components/Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '토글 스위치 컴포넌트입니다. 3가지 크기와 active/disabled 상태를 지원합니다.',
      },
    },
  },
  args: {
    size: 'medium',
    disabled: false,
    active: false,
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
  render: (args) => <SwitchWithState {...args} />,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Switch</h1>
        <p style={s.desc}>
          토글 스위치 컴포넌트입니다.
          <br />
          3가지 크기와 active/disabled 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ ...s.label, width: 60 }}>{size}</span>
              <SwitchWithState size={size} />
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {([
            { active: false, disabled: false, label: 'default' },
            { active: true, disabled: false, label: 'active' },
            { active: false, disabled: true, label: 'disabled' },
            { active: true, disabled: true, label: 'active + disabled' },
          ]).map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ ...s.label, width: 120 }}>{item.label}</span>
              <Switch size='medium' active={item.active} disabled={item.disabled} />
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Example</p>
      <div style={s.card}>
        <SettingsExample />
      </div>
    </div>
  ),
};

const SettingsExample = () => {
  const [states, setStates] = useState({ notifications: true, darkMode: false, autoSave: true });

  const toggle = (key: keyof typeof states) =>
    setStates((prev) => ({ ...prev, [key]: !prev[key] }));

  const items = [
    { key: 'notifications' as const, title: '알림', desc: '새로운 메시지와 업데이트를 받아보세요' },
    { key: 'darkMode' as const, title: '다크 모드', desc: '어두운 테마를 사용합니다' },
    { key: 'autoSave' as const, title: '자동 저장', desc: '변경사항을 자동으로 저장합니다' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {items.map((item) => (
        <div key={item.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0' }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{item.title}</div>
            <div style={{ fontSize: 12, color: '#7b7e85' }}>{item.desc}</div>
          </div>
          <Switch size='medium' active={states[item.key]} onChange={() => toggle(item.key)} />
        </div>
      ))}
    </div>
  );
};

export const Sizes: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {(['small', 'medium', 'large'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <SwitchWithState size={size} />
          <span style={s.label}>{size}</span>
        </div>
      ))}
    </div>
  ),
};

export const States: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {([
        { active: false, disabled: false, label: 'default' },
        { active: true, disabled: false, label: 'active' },
        { active: false, disabled: true, label: 'disabled' },
        { active: true, disabled: true, label: 'active+disabled' },
      ]).map((item) => (
        <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Switch size='medium' active={item.active} disabled={item.disabled} />
          <span style={s.label}>{item.label}</span>
        </div>
      ))}
    </div>
  ),
};
