import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '../components/Chip';
import { ChipTabs } from '../components/ChipTabs';

const meta = {
  title: 'Components/Navigation/ChipTabs',
  component: ChipTabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Chip 컴포넌트를 조합한 탭 네비게이션입니다. 최대 8개의 칩을 지원하며, disabled와 controlled 모드를 제공합니다.',
      },
    },
  },
} satisfies Meta<typeof ChipTabs>;

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
  render: ({ defaultValue }) => (
    <ChipTabs defaultValue={defaultValue}>
      <Chip>전체</Chip>
      <Chip>진행중</Chip>
      <Chip>완료</Chip>
    </ChipTabs>
  ),
  args: { defaultValue: 0 },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>ChipTabs</h1>
        <p style={s.desc}>
          Chip 컴포넌트를 조합한 탭 네비게이션입니다.
          <br />
          최대 8개까지 지원하며, disabled와 controlled 모드를 제공합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Item Count</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {([
            { count: 2, items: ['홈', '설정'] },
            { count: 3, items: ['전체', '진행중', '완료'] },
            { count: 5, items: ['전체', '진행중', '완료', '보류', '취소'] },
            { count: 8, items: ['전체', '진행중', '완료', '보류', '취소', '대기', '검토', '승인'] },
          ]).map(({ count, items }) => (
            <div key={count} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={s.label}>{count} items</span>
              <ChipTabs defaultValue={0}>
                {items.map((item) => <Chip key={item}>{item}</Chip>)}
              </ChipTabs>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>With Disabled</p>
      <div style={s.card}>
        <ChipTabs defaultValue={0}>
          <Chip>활성</Chip>
          <Chip disabled>비활성</Chip>
          <Chip>활성</Chip>
        </ChipTabs>
      </div>

      <p style={s.sectionTitle}>Narrow Container (auto wrap)</p>
      <div style={s.card}>
        <div style={{ width: 320, border: '1px dashed #e6e7e9', borderRadius: 8, padding: 16 }}>
          <ChipTabs defaultValue={0}>
            <Chip>전체</Chip>
            <Chip>진행중</Chip>
            <Chip>완료</Chip>
            <Chip>보류</Chip>
            <Chip>취소</Chip>
            <Chip>대기</Chip>
          </ChipTabs>
        </div>
      </div>

      <p style={s.sectionTitle}>Controlled</p>
      <div style={s.card}>
        <ControlledDemo />
      </div>
    </div>
  ),
};

const ControlledDemo = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <ChipTabs value={value} onChange={setValue}>
        <Chip>첫 번째</Chip>
        <Chip>두 번째</Chip>
        <Chip>세 번째</Chip>
      </ChipTabs>
      <div style={{ padding: 16, background: '#f7f7f8', borderRadius: 8, fontSize: 14, color: '#525459' }}>
        현재 선택: {value + 1}
      </div>
    </div>
  );
};
