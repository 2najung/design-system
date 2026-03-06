import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { BreadcrumbItem } from '../components/Breadcrumbs/BreadcrumbItem';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';
import { Icons } from '../components/icons';

const meta = {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '현재 페이지의 경로를 계층적으로 표시하는 네비게이션 컴포넌트입니다. 아이콘과 텍스트를 조합하여 사용합니다.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

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
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem><Icons.IconHomeOutline20 />홈</BreadcrumbItem>
      <BreadcrumbItem><Icons.IconSettingOutline20 />설정</BreadcrumbItem>
      <BreadcrumbItem active><Icons.IconLockOutline20 />개인정보 변경</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Breadcrumbs</h1>
        <p style={s.desc}>
          현재 페이지의 경로를 계층적으로 표시합니다.
          <br />
          아이콘 포함/미포함, active, disabled 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>With Icons</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>2 items</span>
            <Breadcrumbs>
              <BreadcrumbItem><Icons.IconHomeOutline20 />홈</BreadcrumbItem>
              <BreadcrumbItem active><Icons.IconSettingOutline20 />설정</BreadcrumbItem>
            </Breadcrumbs>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>3 items</span>
            <Breadcrumbs>
              <BreadcrumbItem><Icons.IconHomeOutline20 />홈</BreadcrumbItem>
              <BreadcrumbItem><Icons.IconSettingOutline20 />설정</BreadcrumbItem>
              <BreadcrumbItem active><Icons.IconLockOutline20 />개인정보 변경</BreadcrumbItem>
            </Breadcrumbs>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>4 items</span>
            <Breadcrumbs>
              <BreadcrumbItem><Icons.IconHomeOutline20 />홈</BreadcrumbItem>
              <BreadcrumbItem><Icons.IconSettingOutline20 />설정</BreadcrumbItem>
              <BreadcrumbItem><Icons.IconPersonOutline20 />사용자</BreadcrumbItem>
              <BreadcrumbItem active><Icons.IconLockOutline20 />개인정보 변경</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Text Only</p>
      <div style={s.card}>
        <Breadcrumbs>
          <BreadcrumbItem>홈</BreadcrumbItem>
          <BreadcrumbItem>설정</BreadcrumbItem>
          <BreadcrumbItem active>개인정보 변경</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>with disabled item</span>
            <Breadcrumbs>
              <BreadcrumbItem disabled><Icons.IconHomeOutline20 />홈</BreadcrumbItem>
              <BreadcrumbItem><Icons.IconSettingOutline20 />설정</BreadcrumbItem>
              <BreadcrumbItem active><Icons.IconLockOutline20 />개인정보 변경</BreadcrumbItem>
            </Breadcrumbs>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>all disabled</span>
            <Breadcrumbs>
              <BreadcrumbItem disabled><Icons.IconHomeOutline20 />홈</BreadcrumbItem>
              <BreadcrumbItem disabled><Icons.IconSettingOutline20 />설정</BreadcrumbItem>
              <BreadcrumbItem disabled><Icons.IconLockOutline20 />개인정보 변경</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>
      </div>
    </div>
  ),
};
