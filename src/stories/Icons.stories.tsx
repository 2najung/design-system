import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import * as Icons from '../components/icons/generated';
import { ICON_METADATA } from '../components/icons/types';

const meta = {
  title: 'Foundation/Icons',
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
    marginBottom: 32,
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
};

const filterStyle: React.CSSProperties = {
  padding: '8px 14px',
  fontSize: 13,
  border: '1px solid #e6e7e9',
  borderRadius: 8,
  outline: 'none',
  background: '#ffffff',
  color: '#171719',
};

const IconGallery = () => {
  const [search, setSearch] = useState('');
  const [selectedVariant, setSelectedVariant] = useState<'all' | 'fill' | 'outline'>('all');
  const [selectedSize, setSelectedSize] = useState<'all' | 16 | 20 | 24>('all');
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const handleCopy = (componentName: string) => {
    const importStr = `import { ${componentName} } from 'design-system';`;
    navigator.clipboard.writeText(importStr);
    setCopiedName(componentName);
    setTimeout(() => setCopiedName(null), 1500);
  };

  const filteredIcons = ICON_METADATA.filter((icon) => {
    const matchesSearch = icon.name.toLowerCase().includes(search.toLowerCase());
    const matchesVariant = selectedVariant === 'all' || icon.variant === selectedVariant;
    const matchesSize = selectedSize === 'all' || icon.size === selectedSize;
    return matchesSearch && matchesVariant && matchesSize;
  });

  return (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Icons</h1>
        <p style={s.desc}>
          {ICON_METADATA.length}개의 아이콘 · Fill / Outline · 16px / 20px / 24px
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 10,
          marginBottom: 28,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          placeholder="아이콘 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ ...filterStyle, width: 240 }}
        />
        <select
          value={selectedVariant}
          onChange={(e) => setSelectedVariant(e.target.value as any)}
          style={filterStyle}
        >
          <option value="all">모든 스타일</option>
          <option value="fill">Fill</option>
          <option value="outline">Outline</option>
        </select>
        <select
          value={selectedSize}
          onChange={(e) =>
            setSelectedSize(e.target.value === 'all' ? 'all' : (Number(e.target.value) as any))
          }
          style={filterStyle}
        >
          <option value="all">모든 크기</option>
          <option value="16">16px</option>
          <option value="20">20px</option>
          <option value="24">24px</option>
        </select>
        <span style={{ fontSize: 13, color: '#8f9298', marginLeft: 4 }}>
          {filteredIcons.length}개 표시
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
          gap: 12,
        }}
      >
        {filteredIcons.map((icon) => {
          const IconComponent = Icons[icon.componentName as keyof typeof Icons] as React.FC<
            React.SVGProps<SVGSVGElement>
          >;

          return (
            <div
              key={icon.componentName}
              onClick={() => handleCopy(icon.componentName)}
              style={{
                backgroundColor: copiedName === icon.componentName ? '#f0fdf4' : '#ffffff',
                border: `1px solid ${copiedName === icon.componentName ? '#00c950' : '#e6e7e9'}`,
                borderRadius: 12,
                padding: '20px 12px 14px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                if (copiedName !== icon.componentName) {
                  e.currentTarget.style.borderColor = '#cacccf';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                }
              }}
              onMouseLeave={(e) => {
                if (copiedName !== icon.componentName) {
                  e.currentTarget.style.borderColor = '#e6e7e9';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {copiedName === icon.componentName && (
                <div
                  style={{
                    position: 'absolute',
                    top: 6,
                    right: 8,
                    fontSize: 10,
                    color: '#00c950',
                    fontWeight: 600,
                  }}
                >
                  Copied!
                </div>
              )}
              <div
                style={{
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#171719',
                }}
              >
                <IconComponent width={icon.size} height={icon.size} />
              </div>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: '#171719',
                    marginBottom: 2,
                    wordBreak: 'break-word',
                    fontFamily: "'SF Mono', monospace",
                  }}
                >
                  {icon.name}
                </div>
                <div style={{ fontSize: 10, color: '#8f9298' }}>
                  {icon.variant} · {icon.size}px
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredIcons.length === 0 && (
        <div style={{ textAlign: 'center', padding: '64px 16px', color: '#8f9298' }}>
          검색 결과가 없습니다
        </div>
      )}
    </div>
  );
};

export const Gallery: Story = {
  render: () => <IconGallery />,
};

export const Sizes: Story = {
  render: () => {
    const AccountFill16 = Icons.IconAccountFill16;
    const AccountFill20 = Icons.IconAccountFill20;
    const AccountFill24 = Icons.IconAccountFill24;

    return (
      <div style={s.page}>
        <p style={s.sectionTitle}>Sizes</p>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {[
            { Icon: AccountFill16, size: 16 },
            { Icon: AccountFill20, size: 20 },
            { Icon: AccountFill24, size: 24 },
          ].map(({ Icon, size }) => (
            <div key={size} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: '#f7f7f8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 8,
                }}
              >
                <Icon />
              </div>
              <span style={{ fontSize: 13, color: '#525459', fontWeight: 500 }}>{size}px</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const AccountFill24 = Icons.IconAccountFill24;
    const AccountOutline24 = Icons.IconAccountOutline24;

    return (
      <div style={s.page}>
        <p style={s.sectionTitle}>Variants</p>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {[
            { Icon: AccountFill24, label: 'Fill' },
            { Icon: AccountOutline24, label: 'Outline' },
          ].map(({ Icon, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: '#f7f7f8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 8,
                }}
              >
                <Icon />
              </div>
              <span style={{ fontSize: 13, color: '#525459', fontWeight: 500 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const CustomColors: Story = {
  render: () => {
    const AccountFill24 = Icons.IconAccountFill24;
    const colors = ['#2b7fff', '#fb2c36', '#00c950', '#ff6900', '#ad46ff'];

    return (
      <div style={s.page}>
        <p style={s.sectionTitle}>Color Customization</p>
        <p style={{ fontSize: 14, color: '#7b7e85', marginBottom: 20 }}>
          currentColor를 사용하므로 CSS color 속성으로 색상을 변경할 수 있습니다.
        </p>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          {colors.map((c) => (
            <div key={c} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: '#f7f7f8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 8,
                  color: c,
                }}
              >
                <AccountFill24 />
              </div>
              <span
                style={{
                  fontSize: 11,
                  color: '#8f9298',
                  fontFamily: "'SF Mono', monospace",
                }}
              >
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
