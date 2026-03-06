import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { SegmentItem, SegmentedControl } from '../components/SegmentedControl';

const meta = {
  title: 'Components/Navigation/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '여러 선택지를 수평으로 배열하여 하나를 선택하는 세그먼트 컨트롤 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof SegmentedControl>;

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
    <SegmentedControl defaultValue={defaultValue}>
      <SegmentItem>옵션 1</SegmentItem>
      <SegmentItem>옵션 2</SegmentItem>
      <SegmentItem>옵션 3</SegmentItem>
    </SegmentedControl>
  ),
  args: { defaultValue: 0, children: null },
};

export const Overview: Story = {
  args: { children: null },
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Segmented Control</h1>
        <p style={s.desc}>
          2~6개의 선택지를 수평으로 배열하여 하나를 선택하는 컴포넌트입니다.
          <br />
          disabled 항목과 controlled 모드를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Item Count</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {([
            { count: 2, items: ['옵션 1', '옵션 2'] },
            { count: 3, items: ['옵션 1', '옵션 2', '옵션 3'] },
            { count: 4, items: ['1월', '2월', '3월', '4월'] },
            { count: 6, items: ['1월', '2월', '3월', '4월', '5월', '6월'] },
          ]).map(({ count, items }) => (
            <div key={count} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={s.label}>{count} items</span>
              <SegmentedControl defaultValue={0}>
                {items.map((item) => <SegmentItem key={item}>{item}</SegmentItem>)}
              </SegmentedControl>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>With Disabled</p>
      <div style={s.card}>
        <SegmentedControl defaultValue={0}>
          <SegmentItem>활성</SegmentItem>
          <SegmentItem disabled>비활성</SegmentItem>
          <SegmentItem>활성</SegmentItem>
        </SegmentedControl>
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
      <SegmentedControl value={value} onChange={setValue}>
        <SegmentItem>선택 1</SegmentItem>
        <SegmentItem>선택 2</SegmentItem>
        <SegmentItem>선택 3</SegmentItem>
      </SegmentedControl>
      <div style={{ padding: 16, background: '#f7f7f8', borderRadius: 8, fontSize: 14, color: '#525459' }}>
        현재 선택: {value + 1}
      </div>
    </div>
  );
};
