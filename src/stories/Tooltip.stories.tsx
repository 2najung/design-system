import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { SolidButton } from '../components/Button/SolidButton';
import { OutlineButton } from '../components/Button/OutlineButton';
import { Tooltip } from '../components/Tooltip/Tooltip';

const meta = {
  title: 'Components/Feedback/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '인터페이스 요소에 마우스를 오버하거나 포커스했을 때 간결한 정보를 제공하는 컴포넌트입니다. Primary(어두운 배경)와 Secondary(밝은 배경) 2가지 variant를 지원합니다.',
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

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
      <Tooltip {...args}>
        <SolidButton>Hover me</SolidButton>
      </Tooltip>
    </div>
  ),
  args: {
    text: 'Tooltip text',
    variant: 'primary',
    placement: 'top-center',
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    placement: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right', 'left', 'right'],
    },
    text: { control: 'text' },
    hotkey: { control: 'text' },
    offset: { control: 'number' },
  },
};

// ─── Overview ────────────────────────────────────────────────
export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Tooltip</h1>
        <p style={s.desc}>
          Primary(어두운 배경)와 Secondary(밝은 배경) 2가지 variant, 8가지 placement를 지원합니다.
          <br />
          버튼에 마우스를 올려 각 방향의 Tooltip을 확인하세요.
        </p>
      </div>

      <p style={s.sectionTitle}>Variants</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 24, padding: '40px 0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Tooltip text='Primary tooltip' hotkey='⌘V' variant='primary' placement='top-center'>
              <SolidButton>Primary</SolidButton>
            </Tooltip>
            <span style={s.label}>primary (dark bg)</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <Tooltip text='Secondary tooltip' hotkey='⌘V' variant='secondary' placement='top-center'>
              <OutlineButton variant='secondary'>Secondary</OutlineButton>
            </Tooltip>
            <span style={s.label}>secondary (light bg)</span>
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Placements</p>
      <div style={s.card}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 60,
          padding: '60px 0',
        }}>
          <div style={{ display: 'flex', gap: 24 }}>
            {(['top-left', 'top-center', 'top-right'] as const).map((placement) => (
              <Tooltip key={placement} text={placement} placement={placement}>
                <SolidButton variant='secondary' size='small'>{placement}</SolidButton>
              </Tooltip>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 160 }}>
            <Tooltip text='left' placement='left'>
              <SolidButton variant='secondary' size='small'>left</SolidButton>
            </Tooltip>
            <Tooltip text='right' placement='right'>
              <SolidButton variant='secondary' size='small'>right</SolidButton>
            </Tooltip>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {(['bottom-left', 'bottom-center', 'bottom-right'] as const).map((placement) => (
              <Tooltip key={placement} text={placement} placement={placement}>
                <SolidButton variant='secondary' size='small'>{placement}</SolidButton>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>With Hotkey</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 16, padding: '40px 0' }}>
          {([
            { text: '복사', hotkey: '⌘C' },
            { text: '붙여넣기', hotkey: '⌘V' },
            { text: '실행 취소', hotkey: '⌘Z' },
            { text: '저장', hotkey: '⌘S' },
          ]).map(({ text, hotkey }) => (
            <Tooltip key={text} text={text} hotkey={hotkey} placement='top-center'>
              <OutlineButton variant='secondary' size='small'>{text}</OutlineButton>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  ),
};
