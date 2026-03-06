import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, Cell } from '../components';
import { IconHomeOutline16, IconSearchOutline16 } from '../components/icons/generated';

const meta: Meta<typeof Cell> = {
  title: 'Components/Data Display/Cell',
  component: Cell,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '리스트 항목을 구성하는 셀 컴포넌트입니다. 아이콘, 아바타, 설명 텍스트와 active/disabled 상태를 지원합니다.',
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
  render: (args) => (
    <div style={{ width: 300 }}>
      <Cell {...args} />
    </div>
  ),
  args: {
    text: '선택 항목',
    description: '',
    active: false,
    disable: false,
  },
  argTypes: {
    text: { control: 'text' },
    description: { control: 'text' },
    active: { control: 'boolean' },
    disable: { control: 'boolean' },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Cell</h1>
        <p style={s.desc}>
          리스트 항목을 구성하는 셀 컴포넌트입니다.
          <br />
          아이콘, 아바타, 설명 텍스트와 active/disabled 상태를 지원합니다.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        <div>
          <p style={s.sectionTitle}>States</p>
          <div style={s.card}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Cell text='Default' />
              <Cell text='Active' active />
              <Cell text='Disabled' disable />
            </div>
          </div>
        </div>

        <div>
          <p style={s.sectionTitle}>With Description</p>
          <div style={s.card}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Cell text='기본 설정' description='일반적인 설정을 관리합니다' />
              <Cell text='고급 설정' description='고급 옵션을 관리합니다' active />
              <Cell text='시스템 설정' description='시스템 레벨 설정입니다' disable />
            </div>
          </div>
        </div>

        <div>
          <p style={s.sectionTitle}>With Icons</p>
          <div style={s.card}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Cell text='홈' leadingContent={() => <IconHomeOutline16 />} />
              <Cell text='검색' leadingContent={() => <IconSearchOutline16 />} active />
            </div>
          </div>
        </div>

        <div>
          <p style={s.sectionTitle}>With Avatar</p>
          <div style={s.card}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Cell text='John Doe' description='john@example.com' leadingContent={() => <Avatar type='initial' size='small' value='JD' />} />
              <Cell text='Jane Smith' description='Designer' leadingContent={() => <Avatar type='initial' size='small' value='JS' />} active />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
