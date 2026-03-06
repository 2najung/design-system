import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from '../components/Popover';
import type { PopoverProps } from '../components/Popover/types';

const meta = {
  title: 'Components/Feedback/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '특정 인터페이스 요소와 관련된 추가 정보나 액션을 보조적으로 제공하는 컴포넌트입니다. direction은 화살표가 Popover의 어느 위치에 있는지를 나타냅니다.',
      },
    },
  },
} satisfies Meta<typeof Popover>;

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
  card: {
    border: '1px solid #e6e7e9',
    borderRadius: 12,
    padding: '24px',
    marginBottom: 16,
  } as React.CSSProperties,
  label: {
    fontSize: 11,
    color: '#8f9298',
    fontFamily: "'SF Mono', monospace",
  } as React.CSSProperties,
};

// ─── Playground ──────────────────────────────────────────────
export const Playground: Story = {
  parameters: { layout: 'centered' },
  render: (args) => (
    <div style={{ padding: 100 }}>
      <Popover {...args} />
    </div>
  ),
  args: {
    direction: 'BottomCenter',
    text: 'Guide text',
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['TopCenter', 'TopRight', 'TopLeft', 'BottomCenter', 'BottomRight', 'BottomLeft', 'Right', 'Left'],
    },
    text: { control: 'text' },
    hotkey: { control: 'text' },
  },
};

// ─── Overview ────────────────────────────────────────────────
export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Popover</h1>
        <p style={s.desc}>
          8가지 direction으로 화살표 위치를 지정할 수 있으며, hotkey 텍스트도 함께 표시할 수 있습니다.
          <br />
          direction은 화살표가 Popover의 어느 위치에 있는지를 나타냅니다.
        </p>
      </div>

      <p style={s.sectionTitle}>All Directions</p>
      <div style={s.card}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '48px 24px',
          padding: '40px 0',
        }}>
          {([
            'TopLeft', 'TopCenter', 'TopRight', 'Left',
            'BottomLeft', 'BottomCenter', 'BottomRight', 'Right',
          ] as const).map((direction) => (
            <div key={direction} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <span style={s.label}>{direction}</span>
              <Popover direction={direction as PopoverProps['direction']} text='Guide text' />
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>With Hotkey</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {([
            { text: '복사', hotkey: '⌘C' },
            { text: '붙여넣기', hotkey: '⌘V' },
            { text: '실행 취소', hotkey: '⌘Z' },
            { text: '저장', hotkey: '⌘S' },
          ]).map(({ text, hotkey }) => (
            <div key={text} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Popover direction='BottomCenter' text={text} hotkey={hotkey} />
              <span style={s.label}>{hotkey}</span>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Long Text</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 24 }}>
          <Popover direction='BottomCenter' text='짧은 텍스트' />
          <Popover direction='BottomCenter' text='여러 줄로 이루어진 긴 안내 텍스트가 들어가는 경우의 팝오버입니다' />
        </div>
      </div>
    </div>
  ),
};
