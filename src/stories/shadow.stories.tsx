import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { shadow } from '../tokens/shadow';

const meta = {
  title: 'Foundation/Shadow',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const s = {
  page: { padding: '40px', maxWidth: 960, margin: '0 auto', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" } as React.CSSProperties,
  header: { marginBottom: 48 } as React.CSSProperties,
  title: { fontSize: 28, fontWeight: 700, color: '#171719', margin: '0 0 8px', letterSpacing: -0.5 } as React.CSSProperties,
  desc: { fontSize: 15, color: '#7b7e85', margin: 0, lineHeight: 1.5 } as React.CSSProperties,
  sectionTitle: { fontSize: 13, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#8f9298', margin: '0 0 16px' } as React.CSSProperties,
  label: { fontSize: 11, color: '#8f9298', fontFamily: "'SF Mono', 'Fira Code', monospace" } as React.CSSProperties,
};

export const Overview: Story = {
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Shadow</h1>
        <p style={s.desc}>
          4단계의 쉐도우 토큰입니다.
          <br />
          Light/Dark 테마별 쉐도우를 제공합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Light</p>
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 12,
          padding: 32,
          marginBottom: 32,
          border: '1px solid #e6e7e9',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {Object.entries(shadow.light).map(([key, value]) => (
            <div
              key={key}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: 80,
                  borderRadius: 12,
                  backgroundColor: '#ffffff',
                  boxShadow: value,
                }}
              />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: '#171719', marginBottom: 4 }}>{key}</div>
                <div style={s.label}>{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Dark</p>
      <div
        style={{
          backgroundColor: '#171719',
          borderRadius: 12,
          padding: 32,
          marginBottom: 32,
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {Object.entries(shadow.dark).map(([key, value]) => (
            <div
              key={key}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: 80,
                  borderRadius: 12,
                  backgroundColor: '#2c2c2e',
                  boxShadow: value,
                }}
              />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: '#e6e7e9', marginBottom: 4 }}>{key}</div>
                <div style={{ ...s.label, color: '#7b7e85' }}>{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
