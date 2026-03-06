import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import opacity from '../tokens/opacity';

const meta = {
  title: 'Foundation/Opacity',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

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
};

export const AllOpacities: Story = {
  name: 'Overview',
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Opacity</h1>
        <p style={s.desc}>
          요소의 투명도를 조정하여 정보의 중요도와 상태 변화를 전달합니다.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: 20,
        }}
      >
        {Object.entries(opacity).map(([key, value]) => {
          const percent = Math.round(parseFloat(value) * 100);
          return (
            <div key={key} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: 12,
                  border: '1px solid #e6e7e9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 10,
                  position: 'relative',
                  overflow: 'hidden',
                  background: `repeating-conic-gradient(#e6e7e9 0% 25%, transparent 0% 50%) 50% / 12px 12px`,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, #2b7fff 0%, #ad46ff 100%)',
                    opacity: parseFloat(value),
                  }}
                />
                <span
                  style={{
                    position: 'relative',
                    fontSize: 18,
                    fontWeight: 700,
                    color: percent > 40 ? '#ffffff' : '#171719',
                  }}
                >
                  {percent}%
                </span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#171719' }}>{key}</div>
              <div
                style={{
                  fontSize: 12,
                  color: '#8f9298',
                  fontFamily: "'SF Mono', monospace",
                }}
              >
                {value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ),
};
