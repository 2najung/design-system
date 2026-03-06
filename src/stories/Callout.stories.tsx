import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Callout } from '../components/Callout';

const meta: Meta<typeof Callout> = {
  title: 'Components/Data Display/Callout',
  component: Callout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '사용자에게 보조 메시지를 시각적으로 강조하여 제공하는 콜아웃 컴포넌트입니다. 6가지 variant를 지원합니다.',
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

const variants = ['primary', 'secondary', 'positive', 'negative', 'cautionary', 'info'] as const;

export const Playground: Story = {
  parameters: { layout: 'centered' },
  args: {
    variant: 'primary',
    title: '안내 제목',
    description: '안내 텍스트를 입력해 주세요.',
    leadingIcon: true,
    trailingIcon: false,
  },
  argTypes: {
    variant: { control: 'select', options: [...variants] },
    title: { control: 'text' },
    description: { control: 'text' },
    leadingIcon: { control: 'boolean' },
    trailingIcon: { control: 'boolean' },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Callout</h1>
        <p style={s.desc}>
          사용자에게 보조 메시지를 시각적으로 강조하여 제공합니다.
          <br />
          6가지 variant와 아이콘 옵션을 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Variants</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {variants.map((variant) => (
            <Callout
              key={variant}
              variant={variant}
              title={variant.charAt(0).toUpperCase() + variant.slice(1)}
              description='안내 텍스트를 입력해 주세요.'
              leadingIcon
            />
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Content Options</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>title + description + icon</span>
            <Callout variant='primary' title='안내 제목' description='안내 텍스트를 입력해 주세요.' leadingIcon />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>title only</span>
            <Callout variant='primary' title='안내 제목만 표시합니다.' leadingIcon />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>without icon</span>
            <Callout variant='primary' title='안내 제목' description='아이콘 없이 텍스트만 표시합니다.' leadingIcon={false} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>with trailing icon</span>
            <Callout variant='primary' title='안내 제목' description='닫기 아이콘을 포함합니다.' leadingIcon trailingIcon />
          </div>
        </div>
      </div>
    </div>
  ),
};
