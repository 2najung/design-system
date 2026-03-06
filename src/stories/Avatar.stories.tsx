import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '../components/Avatar';

const meta = {
  title: 'Components/Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '사용자 프로필을 표시하는 아바타 컴포넌트입니다. default(아이콘), initial(텍스트), custom(이미지) 3가지 타입과 4가지 크기를 지원합니다.',
      },
    },
  },
} satisfies Meta<typeof Avatar>;

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
  render: (args) => <Avatar {...args} />,
  args: {
    type: 'initial',
    size: 'medium',
    value: 'A',
  },
  argTypes: {
    type: { control: 'select', options: ['default', 'initial', 'custom'] },
    size: { control: 'select', options: ['x-small', 'small', 'medium', 'large'] },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Avatar</h1>
        <p style={s.desc}>
          사용자 프로필을 표시하는 아바타 컴포넌트입니다.
          <br />
          default(아이콘), initial(텍스트), custom(이미지) 3가지 타입과 4가지 크기를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Types</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {([
            { type: 'default' as const, label: 'default' },
            { type: 'initial' as const, label: 'initial', value: 'J' },
            { type: 'custom' as const, label: 'custom' },
          ]).map(({ type, label, value }) => (
            <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Avatar type={type} size='medium' value={value} />
              <span style={s.label}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-end' }}>
          {(['x-small', 'small', 'medium', 'large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Avatar type='initial' size={size} value='A' />
              <span style={s.label}>{size}</span>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Sizes by Type</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {(['default', 'initial', 'custom'] as const).map((type) => (
            <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={s.label}>{type}</span>
              <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                {(['x-small', 'small', 'medium', 'large'] as const).map((size) => (
                  <Avatar key={size} type={type} size={size} value={type === 'initial' ? 'A' : undefined} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
