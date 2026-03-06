import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Tab, TabItem } from '../components/Tab';

const meta = {
  title: 'Components/Navigation/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '여러 탭 아이템을 선택하여 콘텐츠를 전환할 수 있는 네비게이션 컴포넌트입니다. 최대 8개 탭을 지원합니다.',
      },
    },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

const s = {
  page: { padding: '40px', maxWidth: 960, margin: '0 auto', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" } as React.CSSProperties,
  header: { marginBottom: 48 } as React.CSSProperties,
  title: { fontSize: 28, fontWeight: 700, color: '#171719', margin: '0 0 8px', letterSpacing: -0.5 } as React.CSSProperties,
  desc: { fontSize: 15, color: '#7b7e85', margin: 0, lineHeight: 1.5 } as React.CSSProperties,
  sectionTitle: { fontSize: 13, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#8f9298', margin: '0 0 16px' } as React.CSSProperties,
  card: { border: '1px solid #e6e7e9', borderRadius: 12, padding: '24px', marginBottom: 16 } as React.CSSProperties,
  cardLabel: { fontSize: 13, fontWeight: 500, color: '#525459', marginBottom: 16 } as React.CSSProperties,
  label: { fontSize: 11, color: '#8f9298', fontFamily: "'SF Mono', monospace" } as React.CSSProperties,
};

export const Playground: Story = {
  parameters: { layout: 'centered' },
  render: ({ defaultValue }) => (
    <Tab defaultValue={defaultValue}>
      <TabItem>탭 1</TabItem>
      <TabItem>탭 2</TabItem>
      <TabItem>탭 3</TabItem>
    </Tab>
  ),
  args: { defaultValue: 0 },
  argTypes: {
    defaultValue: { control: { type: 'number', min: 0, max: 7 } },
    showDivider: { control: 'boolean' },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Tab</h1>
        <p style={s.desc}>
          탭 아이템을 선택하여 콘텐츠를 전환하는 네비게이션 컴포넌트입니다.
          <br />
          최대 8개 탭을 지원하며, disabled 상태와 divider 옵션을 제공합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Item Count</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {([
            { count: 2, items: ['홈', '설정'] },
            { count: 3, items: ['전체', '진행중', '완료'] },
            { count: 5, items: ['전체', '진행중', '완료', '보류', '취소'] },
            { count: 8, items: ['전체', '진행중', '완료', '보류', '취소', '대기', '검토', '승인'] },
          ]).map(({ count, items }) => (
            <div key={count} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={s.label}>{count} items</span>
              <Tab defaultValue={0}>
                {items.map((item) => <TabItem key={item}>{item}</TabItem>)}
              </Tab>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>With Disabled</p>
      <div style={s.card}>
        <Tab defaultValue={0}>
          <TabItem>활성</TabItem>
          <TabItem disabled>비활성</TabItem>
          <TabItem>활성</TabItem>
        </Tab>
      </div>

      <p style={s.sectionTitle}>Without Divider</p>
      <div style={s.card}>
        <Tab defaultValue={0} showDivider={false}>
          <TabItem>홈</TabItem>
          <TabItem>설정</TabItem>
          <TabItem>프로필</TabItem>
        </Tab>
      </div>

      <p style={s.sectionTitle}>Controlled</p>
      <div style={s.card}>
        <ControlledTabDemo />
      </div>
    </div>
  ),
};

const ControlledTabDemo = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Tab value={value} onChange={setValue}>
        <TabItem>첫 번째</TabItem>
        <TabItem>두 번째</TabItem>
        <TabItem>세 번째</TabItem>
      </Tab>
      <div style={{ padding: 16, background: '#f7f7f8', borderRadius: 8, fontSize: 14, color: '#525459' }}>
        현재 선택된 탭: {value + 1}
      </div>
    </div>
  );
};
