import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import * as Icons from '../components/icons/generated';
import { ICON_METADATA } from '../components/icons/types';

const meta = {
  title: 'Foundation/Icons',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '디자인 시스템의 모든 아이콘을 확인하고 사용할 수 있습니다. 각 아이콘은 개별 컴포넌트로 export되어 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const IconGallery = () => {
  const [search, setSearch] = useState('');
  const [selectedVariant, setSelectedVariant] = useState<'all' | 'fill' | 'outline'>('all');
  const [selectedSize, setSelectedSize] = useState<'all' | 16 | 20 | 24>('all');

  const filteredIcons = ICON_METADATA.filter((icon) => {
    const matchesSearch = icon.name.toLowerCase().includes(search.toLowerCase());
    const matchesVariant = selectedVariant === 'all' || icon.variant === selectedVariant;
    const matchesSize = selectedSize === 'all' || icon.size === selectedSize;
    return matchesSearch && matchesVariant && matchesSize;
  });

  return (
    <div style={{ padding: '32px', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px' }}>Icons</h1>
        <p style={{ fontSize: '16px', color: '#6b7280' }}>
          {filteredIcons.length}개의 아이콘 · {ICON_METADATA.length}개 중
        </p>
      </div>

      {/* Filters */}
      <div
        style={{
          display: 'flex',
          gap: '16px',
          marginBottom: '32px',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <input
          type='text'
          placeholder='아이콘 검색...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            width: '300px',
            outline: 'none',
          }}
        />

        <select
          value={selectedVariant}
          onChange={(e) => setSelectedVariant(e.target.value as any)}
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            outline: 'none',
          }}
        >
          <option value='all'>모든 스타일</option>
          <option value='fill'>Fill</option>
          <option value='outline'>Outline</option>
        </select>

        <select
          value={selectedSize}
          onChange={(e) =>
            setSelectedSize(e.target.value === 'all' ? 'all' : (Number(e.target.value) as any))
          }
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            outline: 'none',
          }}
        >
          <option value='all'>모든 크기</option>
          <option value='16'>16px</option>
          <option value='20'>20px</option>
          <option value='24'>24px</option>
        </select>
      </div>

      {/* Icon Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '16px',
        }}
      >
        {filteredIcons.map((icon) => {
          const IconComponent = Icons[icon.componentName as keyof typeof Icons] as React.FC<
            React.SVGProps<SVGSVGElement>
          >;

          return (
            <div
              key={icon.componentName}
              style={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
            >
              {/* Icon Preview */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IconComponent width={icon.size} height={icon.size} />
              </div>

              {/* Icon Info */}
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '4px',
                    wordBreak: 'break-word',
                  }}
                >
                  {icon.componentName}
                </div>
                <div
                  style={{
                    fontSize: '10px',
                    color: '#9ca3af',
                    marginBottom: '2px',
                  }}
                >
                  {icon.name}
                </div>
                <div
                  style={{
                    fontSize: '10px',
                    color: '#6b7280',
                  }}
                >
                  {icon.variant} · {icon.size}px
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredIcons.length === 0 && (
        <div
          style={{
            textAlign: 'center',
            padding: '64px 16px',
            color: '#9ca3af',
          }}
        >
          <p style={{ fontSize: '16px' }}>검색 결과가 없습니다</p>
        </div>
      )}
    </div>
  );
};

export const AllIcons: Story = {
  render: () => <IconGallery />,
  parameters: {
    docs: {
      description: {
        story:
          '모든 아이콘을 검색하고 필터링할 수 있습니다. 아이콘을 클릭하여 import 구문을 복사할 수 있습니다.',
      },
    },
  },
};

// 개별 사이즈별 예시
export const Sizes: Story = {
  render: () => {
    const AccountFill16 = Icons.IconAccountFill16;
    const AccountFill20 = Icons.IconAccountFill20;
    const AccountFill24 = Icons.IconAccountFill24;

    return (
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center', padding: '32px' }}>
        <div style={{ textAlign: 'center' }}>
          <AccountFill16 />
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#6b7280' }}>16px</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <AccountFill20 />
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#6b7280' }}>20px</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <AccountFill24 />
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#6b7280' }}>24px</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: '각 사이즈별로 최적화된 SVG가 제공됩니다.',
      },
    },
  },
};

// Variants 예시
export const Variants: Story = {
  render: () => {
    const AccountFill24 = Icons.IconAccountFill24;
    const AccountOutline24 = Icons.IconAccountOutline24;

    return (
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center', padding: '32px' }}>
        <div style={{ textAlign: 'center' }}>
          <AccountFill24 />
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#6b7280' }}>Fill</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <AccountOutline24 />
          <p style={{ marginTop: '8px', fontSize: '12px', color: '#6b7280' }}>Outline</p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Fill과 Outline 두 가지 스타일이 제공됩니다.',
      },
    },
  },
};

// 색상 커스터마이징
export const CustomColors: Story = {
  render: () => {
    const AccountFill24 = Icons.IconAccountFill24;

    return (
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center', padding: '32px' }}>
        <AccountFill24 style={{ color: '#3b82f6' }} />
        <AccountFill24 style={{ color: '#ef4444' }} />
        <AccountFill24 style={{ color: '#10b981' }} />
        <AccountFill24 style={{ color: '#f59e0b' }} />
        <AccountFill24 style={{ color: '#8b5cf6' }} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'CSS color 속성으로 아이콘 색상을 자유롭게 변경할 수 있습니다. 모든 아이콘은 currentColor를 사용합니다.',
      },
    },
  },
};
