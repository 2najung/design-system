import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '../components/Pagination/Pagination';

const PaginationWithState = (args: any) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={(page) => {
        setCurrentPage(page);
        args.onPageChange?.(page);
      }}
    />
  );
};

const meta: Meta<typeof Pagination> = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '콘텐츠를 여러 페이지로 분할하여 이동할 수 있는 네비게이션 컴포넌트입니다. compact와 minimize 2가지 variant를 지원합니다.',
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
  render: (args) => <PaginationWithState {...args} />,
  args: { currentPage: 1, totalPages: 7, variant: 'compact' },
  argTypes: {
    variant: { control: 'select', options: ['compact', 'minimize'] },
    totalPages: { control: { type: 'number', min: 1 } },
    maxVisiblePages: { control: { type: 'number', min: 3 } },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Pagination</h1>
        <p style={s.desc}>
          Compact (페이지 번호 표시)와 Minimize (현재/전체만 표시) 2가지 variant를 지원합니다.
          <br />
          페이지를 클릭하여 인터랙션을 확인하세요.
        </p>
      </div>

      <p style={s.sectionTitle}>Variants</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>compact</span>
            <PaginationWithState currentPage={1} totalPages={7} variant='compact' />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>minimize</span>
            <PaginationWithState currentPage={1} totalPages={10} variant='minimize' />
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Many Pages (with maxVisiblePages)</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>start (page 1 / 100)</span>
            <PaginationWithState currentPage={1} totalPages={100} variant='compact' maxVisiblePages={5} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>middle (page 50 / 100)</span>
            <PaginationWithState currentPage={50} totalPages={100} variant='compact' maxVisiblePages={5} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>end (page 98 / 100)</span>
            <PaginationWithState currentPage={98} totalPages={100} variant='compact' maxVisiblePages={5} />
          </div>
        </div>
      </div>
    </div>
  ),
};
