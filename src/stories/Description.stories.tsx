import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Description } from '../components';

const meta: Meta<typeof Description> = {
  title: 'Components/Data Display/Description',
  component: Description,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '폼 필드의 설명/안내 텍스트 컴포넌트입니다. default, negative, positive 3가지 상태를 지원합니다.',
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
    children: '안내 텍스트를 입력해주세요.',
    status: 'default',
    leadingIcon: false,
  },
  argTypes: {
    status: { control: 'select', options: ['default', 'negative', 'positive'] },
    leadingIcon: { control: 'boolean' },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Description</h1>
        <p style={s.desc}>
          폼 필드의 설명/안내 텍스트 컴포넌트입니다. default, negative, positive 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Status</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {([
            { status: 'default' as const, text: '안내 텍스트를 입력해주세요.' },
            { status: 'negative' as const, text: '올바르지 않은 입력입니다.' },
            { status: 'positive' as const, text: '입력이 완료되었습니다.' },
          ]).map(({ status, text }) => (
            <div key={status} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ ...s.label, width: 60 }}>{status}</span>
              <Description status={status} leadingIcon>{text}</Description>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Without Icon</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {([
            { status: 'default' as const, text: '안내 텍스트를 입력해주세요.' },
            { status: 'negative' as const, text: '올바르지 않은 입력입니다.' },
            { status: 'positive' as const, text: '입력이 완료되었습니다.' },
          ]).map(({ status, text }) => (
            <div key={status} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ ...s.label, width: 60 }}>{status}</span>
              <Description status={status}>{text}</Description>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
