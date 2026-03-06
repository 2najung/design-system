import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AvatarGroup } from '../components/Avatar';

const meta = {
  title: 'Components/Data Display/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '그룹화된 다수의 아바타를 표시하는 컴포넌트입니다. 최대 표시 개수를 제한할 수 있습니다.',
      },
    },
  },
} satisfies Meta<typeof AvatarGroup>;

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

const defaultAvatars = [
  { type: 'default' as const },
  { type: 'default' as const },
  { type: 'default' as const },
  { type: 'default' as const },
];

const initialAvatars = [
  { type: 'initial' as const, value: 'A' },
  { type: 'initial' as const, value: 'B' },
  { type: 'initial' as const, value: 'C' },
  { type: 'initial' as const, value: 'D' },
  { type: 'initial' as const, value: 'E' },
  { type: 'initial' as const, value: 'F' },
];

export const Playground: Story = {
  parameters: { layout: 'centered' },
  render: (args) => <AvatarGroup {...args} />,
  args: {
    avatars: defaultAvatars,
    max: 4,
    state: 'default',
  },
  argTypes: {
    max: { control: { type: 'number', min: 1, max: 6 } },
    state: { control: 'select', options: ['default', 'hovered', 'pressed', 'selected'] },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Avatar Group</h1>
        <p style={s.desc}>
          그룹화된 다수의 아바타를 표시합니다.
          <br />
          max로 최대 표시 개수를 제한하고, 다양한 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Avatar Count</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {[1, 2, 3, 4].map((count) => (
            <div key={count} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ ...s.label, width: 60 }}>{count}개</span>
              <AvatarGroup avatars={defaultAvatars.slice(0, count)} max={4} />
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Max Limit</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {[2, 3, 4].map((max) => (
            <div key={max} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ ...s.label, width: 100 }}>max={max} (6개)</span>
              <AvatarGroup avatars={initialAvatars} max={max} />
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {(['default', 'hovered', 'pressed', 'selected'] as const).map((state) => (
            <div key={state} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ ...s.label, width: 60 }}>{state}</span>
              <AvatarGroup avatars={defaultAvatars} state={state} />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
