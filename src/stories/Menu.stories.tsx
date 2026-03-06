import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Menu, Cell } from '../components';
import {
  IconDocumentOutline16,
  IconHomeOutline16,
  IconSearchOutline16,
} from '../components/icons/generated';

const meta: Meta<typeof Menu> = {
  title: 'Components/Navigation/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Cell 컴포넌트로 구성된 메뉴 리스트입니다. active, disabled 상태와 아이콘, 설명을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
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
  render: (args) => (
    <Menu {...args}>
      <Cell text='선택 항목 A' />
      <Cell text='선택 항목 B' active />
      <Cell text='선택 항목 C' disable />
    </Menu>
  ),
  argTypes: {
    width: { control: 'text' },
    showCheckIcon: { control: 'boolean' },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Menu</h1>
        <p style={s.desc}>
          Cell 컴포넌트로 구성된 메뉴 리스트입니다.
          <br />
          아이콘, 설명, active/disabled 상태, 체크 아이콘 표시를 지원합니다.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        <div>
          <p style={s.sectionTitle}>Basic</p>
          <div style={s.card}>
            <Menu>
              <Cell text='선택 항목 A' />
              <Cell text='선택 항목 B' active />
              <Cell text='선택 항목 C' disable />
            </Menu>
          </div>
        </div>

        <div>
          <p style={s.sectionTitle}>With Icons</p>
          <div style={s.card}>
            <Menu>
              <Cell text='홈' leadingContent={() => <IconHomeOutline16 />} />
              <Cell text='검색' leadingContent={() => <IconSearchOutline16 />} active />
              <Cell text='문서' leadingContent={() => <IconDocumentOutline16 />} />
            </Menu>
          </div>
        </div>

        <div>
          <p style={s.sectionTitle}>With Descriptions</p>
          <div style={s.card}>
            <Menu>
              <Cell text='기본 설정' description='일반적인 설정을 관리합니다' />
              <Cell text='고급 설정' description='고급 옵션을 관리합니다' active />
              <Cell text='시스템 설정' description='시스템 레벨 설정입니다' disable />
            </Menu>
          </div>
        </div>

        <div>
          <p style={s.sectionTitle}>Without Check Icon</p>
          <div style={s.card}>
            <Menu showCheckIcon={false}>
              <Cell text='선택 항목 A' />
              <Cell text='선택 항목 B' active />
              <Cell text='선택 항목 C' />
            </Menu>
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Scrollable (max-height: 200px)</p>
      <div style={{ ...s.card, maxWidth: 360 }}>
        <Menu style={{ maxHeight: 200, overflowY: 'auto' }}>
          {Array.from({ length: 15 }, (_, i) => (
            <Cell key={i} text={`항목 ${i + 1}`} active={i === 2} />
          ))}
        </Menu>
      </div>
    </div>
  ),
};
