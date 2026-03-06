import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import color from '../tokens/color';
import textColor from '../tokens/textColor';
import brandColor from '../tokens/brandColor';

const meta = {
  title: 'Foundation/Colors',
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
  section: {
    marginBottom: 40,
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: 13,
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
    color: '#8f9298',
    margin: '0 0 16px',
  } as React.CSSProperties,
  paletteRow: {
    display: 'flex',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
  } as React.CSSProperties,
  paletteName: {
    fontSize: 14,
    fontWeight: 600,
    color: '#171719',
    marginBottom: 8,
    textTransform: 'capitalize' as const,
  } as React.CSSProperties,
};

const ColorStrip = ({
  name,
  colors,
  showAll,
}: {
  name: string;
  colors: Record<string, string>;
  showAll: boolean;
}) => {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const entries = Object.entries(colors);

  return (
    <div style={s.section}>
      <div style={s.paletteName}>{name}</div>
      <div style={s.paletteRow}>
        {entries.map(([key, value]) => {
          const isLight = ['25', '50', '100', '200'].includes(key);
          const isHovered = hoveredKey === key;
          const isVisible = showAll || isHovered;
          return (
            <div
              key={key}
              onMouseEnter={() => setHoveredKey(key)}
              onMouseLeave={() => setHoveredKey(null)}
              style={{
                flex: 1,
                height: isVisible ? 72 : 56,
                backgroundColor: value,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                transition: 'height 0.15s ease',
                cursor: 'default',
                position: 'relative',
              }}
            >
              {isVisible && (
                <>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: isLight ? '#171719' : '#ffffff',
                    }}
                  >
                    {key}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      color: isLight ? '#525459' : 'rgba(255,255,255,0.75)',
                      fontFamily: "'SF Mono', 'Fira Code', monospace",
                    }}
                  >
                    {value}
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SemanticColorCard = ({
  label,
  tokenName,
  value,
}: {
  label: string;
  tokenName: string;
  value: string;
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 0',
      borderBottom: '1px solid #f0f0f2',
    }}
  >
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 8,
        backgroundColor: value,
        border: '1px solid rgba(0,0,0,0.06)',
        flexShrink: 0,
      }}
    />
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 13, fontWeight: 500, color: '#171719' }}>{label}</div>
      <div
        style={{
          fontSize: 12,
          color: '#8f9298',
          fontFamily: "'SF Mono', 'Fira Code', monospace",
        }}
      >
        {tokenName}
      </div>
    </div>
    <div
      style={{
        fontSize: 12,
        color: '#8f9298',
        fontFamily: "'SF Mono', 'Fira Code', monospace",
      }}
    >
      {value}
    </div>
  </div>
);

export const Palette: Story = {
  render: () => {
    const [showAll, setShowAll] = useState(false);

    return (
      <div style={s.page}>
        <div style={s.header}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h1 style={s.title}>Color Palette</h1>
              <p style={s.desc}>
                14개의 컬러 팔레트와 시맨틱 컬러로 구성된 색상 시스템입니다.
                <br />
                각 팔레트는 50~950 단계로 세분화되어 있으며, hover로 상세 값을 확인할 수 있습니다.
              </p>
            </div>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                cursor: 'pointer',
                fontSize: 13,
                color: '#525459',
                userSelect: 'none',
                flexShrink: 0,
              }}
            >
              <input
                type='checkbox'
                checked={showAll}
                onChange={(e) => setShowAll(e.target.checked)}
                style={{ width: 16, height: 16, cursor: 'pointer', accentColor: '#3182f6' }}
              />
              값 모두 보기
            </label>
          </div>
        </div>

        <p style={s.sectionTitle}>Neutral</p>
        <ColorStrip name="Gray" colors={color.gray} showAll={showAll} />
        <ColorStrip name="Neutral" colors={color.neutral} showAll={showAll} />

        <div style={{ height: 24 }} />
        <p style={s.sectionTitle}>Primary Colors</p>
        <ColorStrip name="Blue" colors={color.blue} showAll={showAll} />
        <ColorStrip name="Purple" colors={color.purple} showAll={showAll} />
        <ColorStrip name="Deep Purple" colors={color.deeppurple} showAll={showAll} />

        <div style={{ height: 24 }} />
        <p style={s.sectionTitle}>Status Colors</p>
        <ColorStrip name="Red" colors={color.red} showAll={showAll} />
        <ColorStrip name="Orange" colors={color.orange} showAll={showAll} />
        <ColorStrip name="Yellow" colors={color.yellow} showAll={showAll} />
        <ColorStrip name="Green" colors={color.green} showAll={showAll} />

        <div style={{ height: 24 }} />
        <p style={s.sectionTitle}>Extended</p>
        <ColorStrip name="Lime" colors={color.lime} showAll={showAll} />
        <ColorStrip name="Emerald" colors={color.emerald} showAll={showAll} />
        <ColorStrip name="Teal" colors={color.teal} showAll={showAll} />
        <ColorStrip name="Cyan" colors={color.cyan} showAll={showAll} />
        <ColorStrip name="Pink" colors={color.pink} showAll={showAll} />
      </div>
    );
  },
};

export const SemanticColors: Story = {
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Semantic Colors</h1>
        <p style={s.desc}>
          용도에 따라 의미가 부여된 시맨틱 컬러입니다.
          <br />
          컴포넌트에서 직접 팔레트 값 대신 시맨틱 컬러를 사용하는 것을 권장합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Text Colors (Light)</p>
      <div style={{ marginBottom: 32 }}>
        {Object.entries(textColor.light).map(([key, value]) => (
          <SemanticColorCard
            key={key}
            label={key.replace('fg-neutral-', '')}
            tokenName={`textColor.light['${key}']`}
            value={value}
          />
        ))}
      </div>

      <p style={s.sectionTitle}>Text Colors (Dark)</p>
      <div
        style={{
          backgroundColor: '#171719',
          borderRadius: 12,
          padding: '4px 20px',
          marginBottom: 32,
        }}
      >
        {Object.entries(textColor.dark).map(([key, value]) => (
          <div
            key={key}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 0',
              borderBottom: '1px solid #303135',
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                backgroundColor: value,
                border: '1px solid rgba(255,255,255,0.1)',
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#e6e7e9' }}>
                {key.replace('fg-neutral-', '')}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: '#7b7e85',
                  fontFamily: "'SF Mono', 'Fira Code', monospace",
                }}
              >
                textColor.dark['{key}']
              </div>
            </div>
            <div
              style={{
                fontSize: 12,
                color: '#7b7e85',
                fontFamily: "'SF Mono', 'Fira Code', monospace",
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>

      <p style={s.sectionTitle}>Brand Color (Light)</p>
      <div style={{ marginBottom: 32 }}>
        {Object.entries(brandColor.light).map(([key, value]) => (
          <SemanticColorCard
            key={key}
            label={key}
            tokenName={`brandColor.light['${key}']`}
            value={value}
          />
        ))}
      </div>

      <p style={s.sectionTitle}>Brand Color (Dark)</p>
      <div
        style={{
          backgroundColor: '#171719',
          borderRadius: 12,
          padding: '4px 20px',
          marginBottom: 32,
        }}
      >
        {Object.entries(brandColor.dark).map(([key, value]) => (
          <div
            key={key}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '10px 0',
              borderBottom: '1px solid #303135',
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                backgroundColor: value,
                border: '1px solid rgba(255,255,255,0.1)',
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#e6e7e9' }}>{key}</div>
              <div
                style={{
                  fontSize: 12,
                  color: '#7b7e85',
                  fontFamily: "'SF Mono', 'Fira Code', monospace",
                }}
              >
                brandColor.dark['{key}']
              </div>
            </div>
            <div
              style={{
                fontSize: 12,
                color: '#7b7e85',
                fontFamily: "'SF Mono', 'Fira Code', monospace",
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
