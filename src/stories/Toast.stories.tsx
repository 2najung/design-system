import type { Meta, StoryObj } from '@storybook/react';

import { Toast, ToastSystem, toast } from '../components';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Toast 컴포넌트는 사용자에게 알림을 표시하는 데 사용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'positive', 'negative', 'cautionary'],
    },
    placement: {
      control: { type: 'select' },
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
    },
    offset: {
      control: { type: 'number' },
    },
    showLeadingIcon: {
      control: { type: 'boolean' },
    },
    showTrailingIcon: {
      control: { type: 'boolean' },
    },
    showDivider: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Toast {...args} />,
  args: {
    children: '기본 토스트 메시지입니다.',
    variant: 'default',
    placement: 'bottom-right',
  },
};

export const Positive: Story = {
  render: (args) => <Toast {...args} />,
  args: {
    children: '저장이 완료되었습니다.\n변경한 내용이 정상적으로 반영되었어요.',
    description: '1 저장 완료, 0 실패',
    variant: 'positive',
    placement: 'bottom-right',
    showDivider: true,
  },
};

export const Negative: Story = {
  render: (args) => <Toast {...args} />,
  args: {
    children: '저장에 실패했습니다.\n네트워크 연결을 확인해주세요.',
    description: '오류 코드: NET_001',
    variant: 'negative',
    placement: 'bottom-right',
    showDivider: true,
  },
};

export const Cautionary: Story = {
  render: (args) => <Toast {...args} />,
  args: {
    children: '주의가 필요합니다.\n이 작업은 되돌릴 수 없습니다.',
    description: '계속하시겠습니까?',
    variant: 'cautionary',
    placement: 'bottom-right',
    showDivider: true,
  },
};

export const WithoutIcons: Story = {
  render: (args) => <Toast {...args} />,
  args: {
    children: '아이콘 없는 토스트 메시지입니다.',
    variant: 'default',
    placement: 'bottom-right',
    showLeadingIcon: false,
    showTrailingIcon: false,
  },
};

export const WithDivider: Story = {
  render: (args) => <Toast {...args} />,
  args: {
    children: '정보가 업데이트되었습니다.\n새로운 기능을 확인해보세요.',
    description: '더 자세한 내용은 설정에서 확인하세요.',
    variant: 'default',
    placement: 'bottom-right',
    showDivider: true,
  },
};

export const TopLeft: Story = {
  render: (args) => <Toast {...args} />,
  args: {
    children: '왼쪽 상단에 위치한 토스트입니다.',
    variant: 'default',
    placement: 'top-left',
  },
};

export const BottomCenter: Story = {
  render: (args) => <Toast {...args} />,
  args: {
    children: '하단 중앙에 위치한 토스트입니다.',
    variant: 'positive',
    placement: 'bottom-center',
  },
};

// ToastSystem Stories
export const ToastSystemBottomRight: Story = {
  render: () => (
    <ToastSystem placement='bottom-right' maxToasts={3}>
      <div style={{ padding: '40px' }}>
        <h2>ToastSystem - Bottom Right</h2>
        <p>아래 버튼을 클릭하여 우측 하단에 토스트를 띄워보세요.</p>
        <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
          <button
            onClick={() => toast.success('저장 완료!', '변경사항이 저장되었습니다.')}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Success Toast
          </button>
          <button
            onClick={() => toast.error('오류 발생', '다시 시도해주세요.')}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Error Toast
          </button>
          <button
            onClick={() => toast.warning('경고', '주의가 필요합니다.')}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Warning Toast
          </button>
          <button
            onClick={() => toast.info('알림', '새로운 업데이트가 있습니다.')}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Info Toast
          </button>
        </div>
      </div>
    </ToastSystem>
  ),
};

export const ToastSystemTopCenter: Story = {
  render: () => (
    <ToastSystem placement='top-center' maxToasts={3}>
      <div style={{ padding: '40px' }}>
        <h2>ToastSystem - Top Center</h2>
        <p>아래 버튼을 클릭하여 상단 중앙에 토스트를 띄워보세요.</p>
        <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
          <button
            onClick={() => toast.success('저장 완료!', '변경사항이 저장되었습니다.')}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Success Toast
          </button>
          <button
            onClick={() => toast.error('오류 발생', '다시 시도해주세요.')}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Error Toast
          </button>
          <button
            onClick={() => toast.warning('경고', '주의가 필요합니다.')}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Warning Toast
          </button>
          <button
            onClick={() => toast.info('알림', '새로운 업데이트가 있습니다.')}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Info Toast
          </button>
        </div>
      </div>
    </ToastSystem>
  ),
};

export const ToastSystemTopLeft: Story = {
  render: () => (
    <ToastSystem placement='top-left' maxToasts={3}>
      <div style={{ padding: '40px' }}>
        <h2>ToastSystem - Top Left</h2>
        <p>아래 버튼을 클릭하여 좌측 상단에 토스트를 띄워보세요.</p>
        <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
          <button
            onClick={() => toast.success('저장 완료!', '변경사항이 저장되었습니다.')}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Success Toast
          </button>
          <button
            onClick={() => toast.error('오류 발생', '다시 시도해주세요.')}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Error Toast
          </button>
        </div>
      </div>
    </ToastSystem>
  ),
};

export const ToastSystemBottomCenter: Story = {
  render: () => (
    <ToastSystem placement='bottom-center' maxToasts={3}>
      <div style={{ padding: '40px' }}>
        <h2>ToastSystem - Bottom Center</h2>
        <p>아래 버튼을 클릭하여 하단 중앙에 토스트를 띄워보세요.</p>
        <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
          <button
            onClick={() => toast.success('저장 완료!', '변경사항이 저장되었습니다.')}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Success Toast
          </button>
          <button
            onClick={() => toast.error('오류 발생', '다시 시도해주세요.')}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Error Toast
          </button>
        </div>
      </div>
    </ToastSystem>
  ),
};

export const ToastSystemMultipleToasts: Story = {
  render: () => (
    <ToastSystem placement='bottom-right' maxToasts={5}>
      <div style={{ padding: '40px' }}>
        <h2>ToastSystem - Multiple Toasts</h2>
        <p>여러 개의 토스트를 연속으로 띄워 스택킹 동작을 확인하세요.</p>
        <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
          <button
            onClick={() => {
              toast.success('첫 번째', '토스트 1');
              setTimeout(() => toast.info('두 번째', '토스트 2'), 300);
              setTimeout(() => toast.warning('세 번째', '토스트 3'), 600);
              setTimeout(() => toast.error('네 번째', '토스트 4'), 900);
            }}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            4개 연속 띄우기
          </button>
        </div>
      </div>
    </ToastSystem>
  ),
};
