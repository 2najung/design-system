import type { Meta, StoryObj } from '@storybook/react';

import color from '../tokens/color';

// Color Swatch 컴포넌트
const ColorSwatch = ({
  name,
  value,
  textColor = '#ffffff',
}: {
  name: string;
  value: string;
  textColor?: string;
}) => {
  return (
    <div
      style={{
        backgroundColor: value,
        color: textColor,
        padding: '16px',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        minHeight: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ fontWeight: 600, fontSize: '14px' }}>{name}</div>
      <div style={{ fontSize: '12px', opacity: 0.9 }}>{value}</div>
    </div>
  );
};

// Color Scale 렌더러
const ColorScale = ({
  colorName,
  colors,
}: {
  colorName: string;
  colors: Record<string, string>;
}) => {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>{colorName}</h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '12px',
        }}
      >
        {Object.entries(colors).map(([key, value]) => {
          // 밝은 색상인지 판단 (50-400은 검은 텍스트, 나머지는 흰 텍스트)
          const isDark = !['50', '100', '200', '25'].includes(key);
          return (
            <ColorSwatch
              key={key}
              name={`${colorName}-${key}`}
              value={value}
              textColor={isDark ? '#ffffff' : '#000000'}
            />
          );
        })}
      </div>
    </div>
  );
};

const meta = {
  title: 'Foundation/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '디자인 시스템의 컬러 팔레트입니다. 모든 컬러는 color 토큰에서 관리됩니다.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// 전체 컬러 팔레트
export const AllColors: Story = {
  render: () => (
    <div style={{ padding: '24px', backgroundColor: '#f9fafb' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Color Palette</h2>

      {/* Common */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Common</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '12px',
          }}
        >
          <ColorSwatch name='common-0' value={color.common['0']} textColor='#ffffff' />
          <ColorSwatch name='common-100' value={color.common['100']} textColor='#000000' />
          <ColorSwatch name='common-dimmer' value={color.common.dimmer} textColor='#000000' />
        </div>
      </div>

      {/* Gray */}
      <ColorScale colorName='gray' colors={color.gray} />

      {/* Neutral */}
      <ColorScale colorName='neutral' colors={color.neutral} />

      {/* Red */}
      <ColorScale colorName='red' colors={color.red} />

      {/* Orange */}
      <ColorScale colorName='orange' colors={color.orange} />

      {/* Yellow */}
      <ColorScale colorName='yellow' colors={color.yellow} />

      {/* Lime */}
      <ColorScale colorName='lime' colors={color.lime} />

      {/* Green */}
      <ColorScale colorName='green' colors={color.green} />

      {/* Emerald */}
      <ColorScale colorName='emerald' colors={color.emerald} />

      {/* Teal */}
      <ColorScale colorName='teal' colors={color.teal} />

      {/* Cyan */}
      <ColorScale colorName='cyan' colors={color.cyan} />

      {/* Blue */}
      <ColorScale colorName='blue' colors={color.blue} />

      {/* Purple */}
      <ColorScale colorName='purple' colors={color.purple} />

      {/* Deep Purple */}
      <ColorScale colorName='deeppurple' colors={color.deeppurple} />

      {/* Pink */}
      <ColorScale colorName='pink' colors={color.pink} />
    </div>
  ),
};

// Gray Scale만
export const GrayScale: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <ColorScale colorName='gray' colors={color.gray} />
    </div>
  ),
};

// 브랜드 컬러
export const BrandColors: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <ColorScale colorName='deeppurple' colors={color.deeppurple} />
    </div>
  ),
};
