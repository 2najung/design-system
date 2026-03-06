import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '../components/Badge';

const meta = {
  title: 'Components/Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '상태, 카테고리, 라벨 등을 표시하는 뱃지 컴포넌트입니다. Outline, Solid, Strong 3가지 타입과 7가지 variant를 지원합니다.',
      },
    },
  },
} satisfies Meta<typeof Badge>;

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

const variants = ['primary', 'secondary', 'brand', 'positive', 'negative', 'info', 'cautionary'] as const;
const types = ['outline', 'solid', 'strong'] as const;

export const Playground: Story = {
  parameters: { layout: 'centered' },
  render: (args) => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: 'primary',
    type: 'outline',
    size: 'medium',
  },
  argTypes: {
    variant: { control: 'select', options: [...variants] },
    type: { control: 'select', options: [...types] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Badge</h1>
        <p style={s.desc}>
          상태, 카테고리, 라벨 등을 표시하는 뱃지 컴포넌트입니다.
          <br />
          Outline, Solid, Strong 3가지 타입과 7가지 variant, 3가지 크기를 지원합니다.
        </p>
      </div>

      {types.map((type) => (
        <React.Fragment key={type}>
          <p style={s.sectionTitle}>{type}</p>
          <div style={s.card}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {variants.map((variant) => (
                <Badge key={variant} variant={variant} type={type}>
                  {variant}
                </Badge>
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ ...s.label, width: 60 }}>{size}</span>
              <Badge variant='primary' type='outline' size={size}>텍스트</Badge>
              <Badge variant='primary' type='solid' size={size}>텍스트</Badge>
              <Badge variant='primary' type='strong' size={size}>텍스트</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
