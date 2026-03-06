import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import color from '../tokens/color';
import { radius } from '../tokens/radius';
import { shadow } from '../tokens/shadow';
import { spacing } from '../tokens/spacing';

const meta = {
  title: 'Foundation/Layout',
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
  sectionTitle: {
    fontSize: 13,
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
    color: '#8f9298',
    margin: '0 0 16px',
  } as React.CSSProperties,
  tokenRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: '1px solid #f0f0f2',
    gap: 16,
  } as React.CSSProperties,
  tokenName: {
    fontSize: 13,
    fontWeight: 500,
    color: '#171719',
    width: 120,
    flexShrink: 0,
    fontFamily: "'SF Mono', 'Fira Code', monospace",
  } as React.CSSProperties,
  tokenValue: {
    fontSize: 12,
    color: '#8f9298',
    width: 60,
    flexShrink: 0,
    fontFamily: "'SF Mono', 'Fira Code', monospace",
  } as React.CSSProperties,
};

export const Spacing: Story = {
  render: () => {
    const highlights = [
      'gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-6', 'gap-8', 'gap-10', 'gap-12', 'gap-16',
    ];
    const filteredGaps = Object.entries(spacing.gap).filter(([key]) =>
      highlights.includes(key)
    );

    return (
      <div style={s.page}>
        <div style={s.header}>
          <h1 style={s.title}>Spacing</h1>
          <p style={s.desc}>
            일관된 간격 시스템으로 레이아웃의 리듬감을 유지합니다.
          </p>
        </div>

        <div>
          {filteredGaps.map(([key, value]) => (
            <div key={key} style={s.tokenRow}>
              <span style={s.tokenName}>{key}</span>
              <span style={s.tokenValue}>{value}</span>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    height: 24,
                    width: value,
                    backgroundColor: '#3182f6',
                    borderRadius: 4,
                    transition: 'width 0.2s ease',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, padding: 20, background: '#f7f7f8', borderRadius: 12 }}>
          <div style={{ fontSize: 12, color: '#8f9298', marginBottom: 8 }}>
            전체 {Object.keys(spacing.gap).length}개 토큰 중 주요 값만 표시
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {Object.entries(spacing.gap).map(([key, value]) => (
              <span
                key={key}
                style={{
                  fontSize: 11,
                  padding: '3px 8px',
                  borderRadius: 4,
                  background: highlights.includes(key) ? '#e8f3ff' : '#f2f3f5',
                  color: highlights.includes(key) ? '#3182f6' : '#7b7e85',
                  fontFamily: "'SF Mono', monospace",
                }}
              >
                {key}: {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

export const RadiusTokens: Story = {
  name: 'Radius',
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Radius</h1>
        <p style={s.desc}>모서리 둥글기로 컴포넌트의 성격을 구분합니다.</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: 16,
        }}
      >
        {Object.entries(radius).map(([key, value]) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '100%',
                aspectRatio: '1',
                backgroundColor: '#f2f3f5',
                border: '1px solid #e6e7e9',
                borderRadius: value,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#525459',
                }}
              >
                {value}
              </span>
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: '#171719' }}>{key}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const ShadowTokens: Story = {
  name: 'Shadow',
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Shadow</h1>
        <p style={s.desc}>그림자로 요소의 깊이감과 계층 구조를 표현합니다.</p>
      </div>

      <p style={s.sectionTitle}>Light Mode</p>
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 16,
          padding: 24,
          marginBottom: 48,
          border: '1px solid #e6e7e9',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 24,
          }}
        >
          {Object.entries(shadow.light).map(([key, value]) => (
            <div key={key}>
              <div
                style={{
                  height: 120,
                  borderRadius: 16,
                  backgroundColor: '#ffffff',
                  boxShadow: value,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 600, color: '#525459' }}>{key}</span>
              </div>
              <div
                style={{
                  marginTop: 10,
                  fontSize: 11,
                  color: '#8f9298',
                  fontFamily: "'SF Mono', monospace",
                  lineHeight: 1.4,
                  wordBreak: 'break-all',
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Dark Mode</p>
      <div
        style={{
          backgroundColor: '#171719',
          padding: 24,
          borderRadius: 16,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 24,
          }}
        >
          {Object.entries(shadow.dark).map(([key, value]) => (
            <div key={key}>
              <div
                style={{
                  height: 120,
                  borderRadius: 16,
                  backgroundColor: '#303135',
                  boxShadow: value,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 600, color: '#e6e7e9' }}>{key}</span>
              </div>
              <div
                style={{
                  marginTop: 10,
                  fontSize: 11,
                  color: '#7b7e85',
                  fontFamily: "'SF Mono', monospace",
                  lineHeight: 1.4,
                  wordBreak: 'break-all',
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
