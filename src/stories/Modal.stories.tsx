import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { OutlineButton, SolidButton, TextButton } from '../components/Button';
import { Dropdown } from '../components/Dropdown';
import { Modal, ModalProps } from '../components/Modal';
import { TextField } from '../components';
import { ToastSystem, toast } from '../components/Toast';

const ModalWithTrigger = ({
  triggerLabel = '모달 열기',
  triggerVariant = 'primary' as const,
  children,
  actions,
  ...props
}: ModalProps & { triggerLabel?: string; triggerVariant?: 'primary' | 'secondary' | 'brand' | 'negative' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SolidButton variant={triggerVariant} onClick={() => setIsOpen(true)}>
        {triggerLabel}
      </SolidButton>
      <Modal {...props} open={isOpen} onClose={() => { setIsOpen(false); props.onClose?.(); }}>
        {children}
      </Modal>
    </>
  );
};

const meta: Meta<typeof Modal> = {
  title: 'Components/Feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '사용자의 작업 흐름을 잠시 중단하고, 중요한 정보 전달이나 추가 행동을 요구할 때 사용하는 레이어형 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

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
  contentBox: {
    padding: '20px',
    backgroundColor: '#f7f7f8',
    borderRadius: 8,
    textAlign: 'center' as const,
    color: '#525459',
    fontSize: 14,
    lineHeight: 1.6,
  } as React.CSSProperties,
  actions: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'flex-end',
    width: '100%',
  } as React.CSSProperties,
};

// ─── Playground ──────────────────────────────────────────────
export const Playground: Story = {
  render: (args) => <ModalWithTrigger {...args} />,
  args: {
    size: 'medium',
    position: 'center',
    title: '제목',
    showCloseButton: true,
    actions: (
      <div style={s.actions}>
        <OutlineButton variant='secondary'>취소</OutlineButton>
        <SolidButton variant='primary'>확인</SolidButton>
      </div>
    ),
    children: <div style={s.contentBox}>모달 콘텐츠 영역입니다.</div>,
  },
  argTypes: {
    size: { control: 'select', options: ['x-small', 'small', 'medium', 'large', 'x-large'] },
    position: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'center-left', 'center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-right'],
    },
    title: { control: 'text' },
    showCloseButton: { control: 'boolean' },
    open: { control: false },
  },
};

// ─── Overview ────────────────────────────────────────────────
export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Modal</h1>
        <p style={s.desc}>
          5가지 사이즈와 9가지 포지션을 지원하는 모달 컴포넌트입니다.
          <br />
          Title, Content, Actions 3개 영역으로 구성되며, 배경 클릭 또는 닫기 버튼으로 닫을 수 있습니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={s.cardLabel}>각 버튼을 클릭하여 사이즈별 모달을 확인하세요.</div>
        <div style={s.row}>
          {(['x-small', 'small', 'medium', 'large', 'x-large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <ModalWithTrigger
                size={size}
                title={`${size} Modal`}
                triggerLabel={size}
                triggerVariant='secondary'
                actions={
                  <div style={s.actions}>
                    <SolidButton variant='primary'>확인</SolidButton>
                  </div>
                }
              >
                <div style={s.contentBox}>
                  {size} 사이즈 모달입니다.
                  <br />
                  width: {size === 'x-small' ? '320px' : size === 'small' ? '480px' : size === 'medium' ? '640px' : size === 'large' ? '960px' : '1200px'}
                </div>
              </ModalWithTrigger>
              <span style={s.label}>
                {size === 'x-small' ? '320px' : size === 'small' ? '480px' : size === 'medium' ? '640px' : size === 'large' ? '960px' : '1200px'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Positions</p>
      <div style={s.card}>
        <div style={s.cardLabel}>9가지 위치에 모달을 배치할 수 있습니다.</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, maxWidth: 360 }}>
          {([
            'top-left', 'top-center', 'top-right',
            'center-left', 'center', 'center-right',
            'bottom-left', 'bottom-center', 'bottom-right',
          ] as const).map((position) => (
            <ModalWithTrigger
              key={position}
              size='small'
              position={position}
              title={position}
              triggerLabel={position.replace('-', '\n')}
              triggerVariant='secondary'
            >
              <div style={s.contentBox}>{position} 위치의 모달입니다.</div>
            </ModalWithTrigger>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Variations</p>
      <div style={s.card}>
        <div style={s.row}>
          <ModalWithTrigger
            title='닫기 버튼 없음'
            showCloseButton={false}
            triggerLabel='No Close Button'
            triggerVariant='secondary'
            actions={
              <div style={s.actions}>
                <SolidButton variant='primary'>확인</SolidButton>
              </div>
            }
          >
            <div style={s.contentBox}>닫기 버튼이 없는 모달입니다. 배경 클릭으로 닫을 수 있습니다.</div>
          </ModalWithTrigger>

          <ModalWithTrigger
            title='액션 없음'
            triggerLabel='No Actions'
            triggerVariant='secondary'
          >
            <div style={s.contentBox}>액션 영역이 없는 모달입니다.</div>
          </ModalWithTrigger>

          <ModalWithTrigger
            title='설명 포함'
            description='모달에 대한 부가 설명을 추가할 수 있습니다.'
            triggerLabel='With Description'
            triggerVariant='secondary'
            actions={
              <div style={s.actions}>
                <OutlineButton variant='secondary'>취소</OutlineButton>
                <SolidButton variant='primary'>확인</SolidButton>
              </div>
            }
          >
            <div style={s.contentBox}>description prop으로 제목 아래 설명을 추가할 수 있습니다.</div>
          </ModalWithTrigger>
        </div>
      </div>
    </div>
  ),
};

// ─── Action Patterns ─────────────────────────────────────────
export const ActionPatterns: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Action Patterns</h1>
        <p style={s.desc}>다양한 액션 버튼 조합 패턴입니다.</p>
      </div>

      <div style={s.card}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {([
            {
              label: 'Confirm / Cancel',
              title: '변경사항 저장',
              actions: (
                <div style={s.actions}>
                  <OutlineButton variant='secondary'>취소</OutlineButton>
                  <SolidButton variant='primary'>저장</SolidButton>
                </div>
              ),
              content: '변경사항을 저장하시겠습니까?',
            },
            {
              label: 'Destructive',
              title: '항목 삭제',
              triggerVariant: 'negative' as const,
              actions: (
                <div style={s.actions}>
                  <OutlineButton variant='secondary'>취소</OutlineButton>
                  <SolidButton variant='negative'>삭제</SolidButton>
                </div>
              ),
              content: '이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
            },
            {
              label: 'Single Action',
              title: '알림',
              actions: (
                <div style={s.actions}>
                  <SolidButton variant='primary'>확인</SolidButton>
                </div>
              ),
              content: '작업이 완료되었습니다.',
            },
            {
              label: 'Multiple Actions',
              title: '문서 편집',
              actions: (
                <div style={{ ...s.actions, justifyContent: 'space-between' }}>
                  <SolidButton variant='negative'>삭제</SolidButton>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <OutlineButton variant='secondary'>취소</OutlineButton>
                    <OutlineButton variant='brand'>임시저장</OutlineButton>
                    <SolidButton variant='primary'>저장</SolidButton>
                  </div>
                </div>
              ),
              content: '여러 액션 버튼을 조합할 수 있습니다.',
            },
          ]).map(({ label, title, actions, content, triggerVariant }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={s.label}>{label}</span>
              <ModalWithTrigger
                size='small'
                title={title}
                triggerLabel={label}
                triggerVariant={triggerVariant || 'secondary'}
                actions={actions}
              >
                <div style={s.contentBox}>{content}</div>
              </ModalWithTrigger>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// ─── Nested & Composition ────────────────────────────────────
export const NestedModals: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    const [firstOpen, setFirstOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);

    return (
      <div style={s.page}>
        <div style={s.header}>
          <h1 style={s.title}>Nested Modals</h1>
          <p style={s.desc}>모달 위에 또 다른 모달을 띄울 수 있습니다. Toast도 함께 사용 가능합니다.</p>
        </div>

        <ToastSystem />

        <div style={s.card}>
          <SolidButton variant='primary' onClick={() => setFirstOpen(true)}>
            첫 번째 모달 열기
          </SolidButton>
        </div>

        <Modal
          size='large'
          open={firstOpen}
          onClose={() => setFirstOpen(false)}
          title='첫 번째 모달'
          description='이 모달 위에 두 번째 모달을 띄울 수 있습니다.'
          actions={
            <div style={s.actions}>
              <OutlineButton variant='secondary' onClick={() => setFirstOpen(false)}>닫기</OutlineButton>
            </div>
          }
        >
          <div style={{ padding: '8px 0' }}>
            <SolidButton variant='brand' onClick={() => setSecondOpen(true)}>
              두 번째 모달 열기
            </SolidButton>
          </div>
        </Modal>

        <Modal
          size='small'
          open={secondOpen}
          onClose={() => setSecondOpen(false)}
          title='두 번째 모달'
          actions={
            <div style={s.actions}>
              <OutlineButton variant='secondary' onClick={() => setSecondOpen(false)}>취소</OutlineButton>
              <SolidButton
                variant='primary'
                onClick={() => {
                  toast.success('저장 완료', 'Toast는 모든 Modal 위에 표시됩니다.');
                  setSecondOpen(false);
                }}
              >
                확인
              </SolidButton>
            </div>
          }
        >
          <div style={s.contentBox}>
            두 번째 모달입니다.
            <br />
            확인 버튼을 누르면 Toast가 표시됩니다.
          </div>
        </Modal>
      </div>
    );
  },
};

// ─── With Form ───────────────────────────────────────────────
export const WithForm: Story = {
  parameters: { controls: { disable: true } },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div style={s.page}>
        <div style={s.header}>
          <h1 style={s.title}>Form Modal</h1>
          <p style={s.desc}>모달 내부에 폼 요소를 배치한 예시입니다.</p>
        </div>

        <div style={s.card}>
          <SolidButton variant='primary' onClick={() => setOpen(true)}>
            새 프로젝트 생성
          </SolidButton>
        </div>

        <Modal
          size='medium'
          open={open}
          onClose={() => setOpen(false)}
          title='새 프로젝트 생성'
          description='프로젝트 정보를 입력해 주세요.'
          actions={
            <div style={s.actions}>
              <TextButton variant='secondary' onClick={() => setOpen(false)}>취소</TextButton>
              <SolidButton variant='primary' onClick={() => setOpen(false)}>생성</SolidButton>
            </div>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <TextField
              label='프로젝트 이름'
              labelType='required'
              placeholder='프로젝트 이름을 입력해 주세요.'
            />
            <Dropdown
              type='selector'
              label='카테고리'
              placeholder='카테고리를 선택하세요'
              options={[
                { label: '디자인', value: 'design' },
                { label: '개발', value: 'dev' },
                { label: '마케팅', value: 'marketing' },
              ]}
            />
            <TextField
              label='설명'
              labelType='optional'
              placeholder='프로젝트에 대한 설명을 입력해 주세요.'
            />
          </div>
        </Modal>
      </div>
    );
  },
};
