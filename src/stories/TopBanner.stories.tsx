import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import BannerImage from '../assets/images/banner_sample.svg';
import { TopBanner } from '../components/TopBanner';

const meta = {
  title: 'Components/Data Display/TopBanner',
  component: TopBanner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '페이지 상단에 표시되는 띠배너 컴포넌트입니다. 날짜 범위에 따라 자동 노출/숨김 처리됩니다.',
      },
    },
  },
} satisfies Meta<typeof TopBanner>;

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
  args: {
    src: BannerImage,
    link: 'https://example.com',
  },
  argTypes: {
    src: { control: 'text' },
    link: { control: 'text' },
    startDate: { control: 'text' },
    endDate: { control: 'text' },
  },
};

export const Overview: Story = {
  args: { src: BannerImage },
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Top Banner</h1>
        <p style={s.desc}>
          페이지 상단에 표시되는 띠배너 컴포넌트입니다.
          <br />
          날짜 범위 설정으로 자동 노출/숨김 처리됩니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Default</p>
      <div style={s.card}>
        <TopBanner src={BannerImage} link='https://example.com' />
      </div>

      <p style={s.sectionTitle}>With Date Range (active)</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={s.label}>startDate: 2025-01-01 / endDate: 2030-12-31</span>
          <TopBanner src={BannerImage} link='https://example.com' startDate='2025-01-01' endDate='2030-12-31' />
        </div>
      </div>

      <p style={s.sectionTitle}>Expired (not visible)</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={s.label}>endDate: 2024-01-01 (expired - nothing renders below)</span>
          <TopBanner src={BannerImage} link='https://example.com' startDate='2023-01-01' endDate='2024-01-01' />
        </div>
      </div>
    </div>
  ),
};
