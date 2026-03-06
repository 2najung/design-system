import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from '../components';

const meta: Meta<typeof Divider> = {
  title: 'Components/Data Display/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '콘텐츠를 구분하는 구분선 컴포넌트입니다. 수평/수직 방향과 다양한 두께를 지원합니다.',
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

export const Playground: Story = {
  parameters: { layout: 'centered' },
  render: (args) => {
    const isVertical = args.orientation === 'vertical';
    return (
      <div style={isVertical ? { height: 120, display: 'flex', alignItems: 'stretch' } : { width: 360 }}>
        {isVertical ? (
          <>
            <div style={{ flex: 1, paddingRight: 12 }}>왼쪽</div>
            <Divider {...args} />
            <div style={{ flex: 1, paddingLeft: 12 }}>오른쪽</div>
          </>
        ) : (
          <>
            <div style={{ marginBottom: 12 }}>상단 콘텐츠</div>
            <Divider {...args} />
            <div style={{ marginTop: 12 }}>하단 콘텐츠</div>
          </>
        )}
      </div>
    );
  },
  args: { orientation: 'horizontal', thickness: 2 },
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    thickness: { control: 'select', options: [1, 2, 4, 6, 8, 12] },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Divider</h1>
        <p style={s.desc}>
          콘텐츠를 구분하는 구분선 컴포넌트입니다.
          <br />
          수평/수직 방향과 6가지 두께를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Thickness</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {([1, 2, 4, 6, 8, 12] as const).map((t) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ ...s.label, width: 40 }}>{t}px</span>
              <div style={{ flex: 1 }}>
                <Divider thickness={t} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Vertical</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 24, height: 100, alignItems: 'stretch' }}>
          {([1, 2, 4, 8] as const).map((t) => (
            <React.Fragment key={t}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <span style={s.label}>{t}px</span>
              </div>
              <Divider orientation='vertical' thickness={t} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  ),
};
