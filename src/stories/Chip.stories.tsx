import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '../components/Chip';

const meta = {
  title: 'Components/Data Display/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '태그, 필터, 상태 표시 등에 사용되는 칩 컴포넌트입니다. Outline, Solid 타입과 4가지 크기를 지원합니다.',
      },
    },
  },
} satisfies Meta<typeof Chip>;

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
  render: (args) => <Chip {...args}>텍스트</Chip>,
  args: {
    type: 'outline',
    size: 'medium',
    active: false,
    disabled: false,
  },
  argTypes: {
    type: { control: 'select', options: ['outline', 'solid'] },
    size: { control: 'select', options: ['x-small', 'small', 'medium', 'large'] },
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Chip</h1>
        <p style={s.desc}>
          태그, 필터, 상태 표시 등에 사용되는 칩 컴포넌트입니다.
          <br />
          Outline/Solid 타입, 4가지 크기, active/disabled 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Types</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 24 }}>
          {(['outline', 'solid'] as const).map((type) => (
            <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Chip type={type}>텍스트</Chip>
              <span style={s.label}>{type}</span>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {(['x-small', 'small', 'medium', 'large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Chip size={size}>텍스트</Chip>
              <span style={s.label}>{size}</span>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {(['outline', 'solid'] as const).map((type) => (
            <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={s.label}>{type}</span>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Chip type={type}>default</Chip>
                <Chip type={type} state='hovered'>hovered</Chip>
                <Chip type={type} state='pressed'>pressed</Chip>
                <Chip type={type} state='focused'>focused</Chip>
                <Chip type={type} active>active</Chip>
                <Chip type={type} disabled>disabled</Chip>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Radius</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          {(['rounded-1', 'rounded-2', 'rounded-3', 'rounded-4', 'rounded-full'] as const).map((r) => (
            <div key={r} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Chip radius={r}>텍스트</Chip>
              <span style={s.label}>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
