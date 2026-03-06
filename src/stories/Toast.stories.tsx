import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { SolidButton, OutlineButton } from '../components/Button';
import { Toast, ToastSystem, toast } from '../components';

const meta: Meta<typeof Toast> = {
  title: 'Components/Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '사용자에게 알림을 표시하는 Toast 컴포넌트입니다. 4가지 variant와 6가지 placement를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

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
  cardLabel: {
    fontSize: 13,
    fontWeight: 500,
    color: '#525459',
    marginBottom: 16,
  } as React.CSSProperties,
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,
  label: {
    fontSize: 11,
    color: '#8f9298',
    fontFamily: "'SF Mono', monospace",
  } as React.CSSProperties,
};

// ─── Playground ──────────────────────────────────────────────
export const Playground: Story = {
  render: (args) => <Toast {...args} />,
  args: {
    children: '기본 토스트 메시지입니다.',
    variant: 'default',
    placement: 'bottom-right',
  },
  argTypes: {
    variant: { control: 'select', options: ['default', 'positive', 'negative', 'cautionary'] },
    placement: { control: 'select', options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'] },
    showLeadingIcon: { control: 'boolean' },
    showTrailingIcon: { control: 'boolean' },
    showDivider: { control: 'boolean' },
    offset: { control: 'number' },
  },
};

// ─── Overview ────────────────────────────────────────────────
export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Toast</h1>
        <p style={s.desc}>
          4가지 variant (default, positive, negative, cautionary)와 6가지 placement를 지원합니다.
          <br />
          Description, Divider, Leading/Trailing Icon 옵션을 조합하여 사용합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Variants</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {([
            { variant: 'default' as const, msg: '알림 메시지입니다.', desc: '추가 정보를 확인하세요.' },
            { variant: 'positive' as const, msg: '저장이 완료되었습니다.', desc: '변경사항이 정상 반영되었습니다.' },
            { variant: 'negative' as const, msg: '저장에 실패했습니다.', desc: '네트워크 연결을 확인해주세요.' },
            { variant: 'cautionary' as const, msg: '주의가 필요합니다.', desc: '이 작업은 되돌릴 수 없습니다.' },
          ]).map(({ variant, msg, desc }) => (
            <div key={variant} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <span style={{ ...s.label, width: 80, paddingTop: 12, flexShrink: 0 }}>{variant}</span>
              <Toast
                variant={variant}
                description={desc}
                showDivider
                disablePositioning
              >
                {msg}
              </Toast>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Without Icons</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Toast variant='default' showLeadingIcon={false} showTrailingIcon={false} disablePositioning>
            아이콘 없는 토스트 메시지입니다.
          </Toast>
          <Toast variant='positive' showLeadingIcon={false} disablePositioning>
            Leading 아이콘 없는 토스트입니다.
          </Toast>
        </div>
      </div>

      <p style={s.sectionTitle}>Simple (no description)</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {(['default', 'positive', 'negative', 'cautionary'] as const).map((variant) => (
            <Toast key={variant} variant={variant} disablePositioning>
              {variant} 토스트 메시지
            </Toast>
          ))}
        </div>
      </div>
    </div>
  ),
};

// ─── Toast System ────────────────────────────────────────────
export const Interactive: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <ToastSystem placement='bottom-right' maxToasts={5}>
      <div style={s.page}>
        <div style={s.header}>
          <h1 style={s.title}>Toast System</h1>
          <p style={s.desc}>
            toast.success(), toast.error(), toast.warning(), toast.info() 함수로 토스트를 호출합니다.
            <br />
            버튼을 클릭하여 각 타입의 토스트를 확인하세요.
          </p>
        </div>

        <p style={s.sectionTitle}>Trigger Buttons</p>
        <div style={s.card}>
          <div style={s.cardLabel}>버튼을 클릭하면 우측 하단에 Toast가 표시됩니다.</div>
          <div style={s.row}>
            <SolidButton
              variant='primary'
              onClick={() => toast.info('알림', '새로운 업데이트가 있습니다.')}
            >
              Info
            </SolidButton>
            <SolidButton
              variant='positive'
              onClick={() => toast.success('저장 완료', '변경사항이 저장되었습니다.')}
            >
              Success
            </SolidButton>
            <SolidButton
              variant='negative'
              onClick={() => toast.error('오류 발생', '다시 시도해주세요.')}
            >
              Error
            </SolidButton>
            <SolidButton
              variant='brand'
              onClick={() => toast.warning('경고', '이 작업은 되돌릴 수 없습니다.')}
            >
              Warning
            </SolidButton>
          </div>
        </div>

        <p style={s.sectionTitle}>Multiple Toasts</p>
        <div style={s.card}>
          <div style={s.cardLabel}>4개의 토스트가 연속으로 표시됩니다. 스택킹 동작을 확인하세요.</div>
          <OutlineButton
            variant='secondary'
            onClick={() => {
              toast.success('첫 번째', '토스트 1');
              setTimeout(() => toast.info('두 번째', '토스트 2'), 300);
              setTimeout(() => toast.warning('세 번째', '토스트 3'), 600);
              setTimeout(() => toast.error('네 번째', '토스트 4'), 900);
            }}
          >
            4개 연속 띄우기
          </OutlineButton>
        </div>
      </div>
    </ToastSystem>
  ),
};

// ─── Placements ──────────────────────────────────────────────
export const Placements: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Placements</h1>
        <p style={s.desc}>6가지 위치에 Toast를 배치할 수 있습니다. 각 버튼을 클릭하여 확인하세요.</p>
      </div>

      <div style={s.card}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, maxWidth: 480 }}>
          {([
            'top-left', 'top-center', 'top-right',
            'bottom-left', 'bottom-center', 'bottom-right',
          ] as const).map((placement) => (
            <ToastSystem key={placement} placement={placement} maxToasts={2}>
              <SolidButton
                variant='secondary'
                onClick={() => toast.info(placement, `${placement} 위치의 토스트입니다.`)}
              >
                {placement}
              </SolidButton>
            </ToastSystem>
          ))}
        </div>
      </div>
    </div>
  ),
};
