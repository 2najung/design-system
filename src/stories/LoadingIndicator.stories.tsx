import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { LoadingIndicator } from '../components/LoadingIndicator';

const meta: Meta<typeof LoadingIndicator> = {
  title: 'Components/Feedback/LoadingIndicator',
  component: LoadingIndicator,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '로딩 상태를 시각적으로 표시하는 컴포넌트입니다. Spinner와 Dots 2가지 타입, 4가지 사이즈를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadingIndicator>;

const s = {
  page: {
    padding: '40px',
    maxWidth: 960,
    margin: '0 auto',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  } as React.CSSProperties,
  header: {
    marginBottom: 48,
  } as React.CSSProperties,
  title: {
    fontSize: 28,
    fontWeight: 700,
    color: '#171719',
    margin: '0 0 8px',
    letterSpacing: -0.5,
  } as React.CSSProperties,
  desc: {
    fontSize: 15,
    color: '#7b7e85',
    margin: 0,
    lineHeight: 1.5,
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: 13,
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
    color: '#8f9298',
    margin: '0 0 16px',
  } as React.CSSProperties,
  card: {
    border: '1px solid #e6e7e9',
    borderRadius: 12,
    padding: '24px',
    marginBottom: 16,
  } as React.CSSProperties,
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: 32,
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,
  label: {
    fontSize: 11,
    color: '#8f9298',
    fontFamily: "'SF Mono', monospace",
  } as React.CSSProperties,
};

// ─── Playground ──────────────────────────────────────────────
export const Playground: Story = {
  parameters: { layout: 'centered' },
  args: {
    type: 'spinner',
    size: 'medium',
  },
  argTypes: {
    type: { control: 'select', options: ['spinner', 'dots'] },
    size: { control: 'select', options: ['small', 'medium', 'large', 'x-large'] },
    color: { control: 'color' },
  },
};

// ─── Overview ────────────────────────────────────────────────
export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Loading Indicator</h1>
        <p style={s.desc}>
          Spinner와 Dots 2가지 타입을 지원하며, 4가지 사이즈로 사용할 수 있습니다.
          <br />
          color prop으로 커스텀 색상을 지정할 수 있습니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Types</p>
      <div style={s.card}>
        <div style={s.row}>
          {(['spinner', 'dots'] as const).map((type) => (
            <div key={type} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{ height: 40, display: 'flex', alignItems: 'center' }}>
                <LoadingIndicator type={type} size='medium' />
              </div>
              <span style={s.label}>{type}</span>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Sizes — Spinner</p>
      <div style={s.card}>
        <div style={s.row}>
          {([
            { size: 'small' as const, px: '16px' },
            { size: 'medium' as const, px: '20px' },
            { size: 'large' as const, px: '24px' },
            { size: 'x-large' as const, px: '32px' },
          ]).map(({ size, px }) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{ height: 40, display: 'flex', alignItems: 'center' }}>
                <LoadingIndicator type='spinner' size={size} />
              </div>
              <span style={s.label}>{size} ({px})</span>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Sizes — Dots</p>
      <div style={s.card}>
        <div style={s.row}>
          {(['small', 'medium', 'large', 'x-large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{ height: 40, display: 'flex', alignItems: 'center' }}>
                <LoadingIndicator type='dots' size={size} />
              </div>
              <span style={s.label}>{size}</span>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Custom Colors</p>
      <div style={s.card}>
        <div style={s.row}>
          {([
            { color: '#6366F1', label: 'Indigo' },
            { color: '#10B981', label: 'Emerald' },
            { color: '#F43F5E', label: 'Rose' },
            { color: '#F59E0B', label: 'Amber' },
          ]).map(({ color, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{ display: 'flex', gap: 16, height: 40, alignItems: 'center' }}>
                <LoadingIndicator type='spinner' color={color} />
                <LoadingIndicator type='dots' color={color} />
              </div>
              <span style={s.label}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>On Dark Background</p>
      <div style={{ ...s.card, backgroundColor: '#171719', borderColor: '#303135' }}>
        <div style={s.row}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <div style={{ height: 40, display: 'flex', alignItems: 'center' }}>
              <LoadingIndicator type='spinner' color='#ffffff' />
            </div>
            <span style={{ ...s.label, color: '#7b7e85' }}>spinner</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <div style={{ height: 40, display: 'flex', alignItems: 'center' }}>
              <LoadingIndicator type='dots' color='#ffffff' />
            </div>
            <span style={{ ...s.label, color: '#7b7e85' }}>dots</span>
          </div>
        </div>
      </div>
    </div>
  ),
};
