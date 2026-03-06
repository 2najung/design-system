import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../components';

const meta: Meta<typeof Label> = {
  title: 'Components/Data Display/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '폼 필드의 라벨 컴포넌트입니다. default, required, optional 3가지 타입을 지원합니다.',
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
  args: {
    children: '라벨',
    type: 'default',
  },
  argTypes: {
    type: { control: 'select', options: ['default', 'required', 'optional'] },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Label</h1>
        <p style={s.desc}>
          폼 필드의 라벨 컴포넌트입니다. default, required, optional 타입을 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Types</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {(['default', 'required', 'optional'] as const).map((type) => (
            <div key={type} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ ...s.label, width: 60 }}>{type}</span>
              <Label type={type}>라벨 텍스트</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
