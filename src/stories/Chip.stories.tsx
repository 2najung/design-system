import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '../components/Chip';
import type { ChipProps } from '../components/Chip/types';

const meta = {
  title: 'Components/Data Display/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Chip은 태그, 필터, 상태 표시 등에 사용되는 작은 UI 요소입니다. Outline, Solid 두 가지 타입을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['outline', 'solid'],
    },
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    active: {
      control: { type: 'boolean' },
    },
    radius: {
      control: { type: 'select' },
      options: [
        'rounded-1',
        'rounded-1.5',
        'rounded-2',
        'rounded-3',
        'rounded-4',
        'rounded-5',
        'rounded-full',
      ],
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Chip
export const Default: Story = {
  render: (args) => <Chip {...args}>기본 칩</Chip>,
  args: {},
};

// Outline 타입
export const Outline: Story = {
  render: (args) => <Chip {...args}>Outline Chip</Chip>,
  args: {
    type: 'outline',
  },
  parameters: {
    docs: {
      description: {
        story: '테두리만 있는 Outline 타입의 Chip입니다.',
      },
    },
  },
};

// Solid 타입
export const Solid: Story = {
  render: (args) => <Chip {...args}>Solid Chip</Chip>,
  args: {
    type: 'solid',
  },
  parameters: {
    docs: {
      description: {
        story: '배경이 채워진 Solid 타입의 Chip입니다.',
      },
    },
  },
};

// Outline with Icon
export const OutlineWithIcon: Story = {
  render: (args) => <Chip {...args}>Outline with Icon</Chip>,
  args: {
    type: 'outline',
    leadingIcon: '🏷️',
  },
  parameters: {
    docs: {
      description: {
        story: '아이콘이 포함된 Outline 타입의 Chip입니다.',
      },
    },
  },
};

// Solid with Icon
export const SolidWithIcon: Story = {
  render: (args) => <Chip {...args}>Solid with Icon</Chip>,
  args: {
    type: 'solid',
    leadingIcon: '🏷️',
  },
  parameters: {
    docs: {
      description: {
        story: '아이콘이 포함된 Solid 타입의 Chip입니다.',
      },
    },
  },
};

// With Trailing Icon
export const WithTrailingIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Chip type='outline' trailingIcon='✕'>
        Remove
      </Chip>
      <Chip type='solid' trailingIcon='✕'>
        Close
      </Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Trailing Icon이 포함된 Chip 예시입니다.',
      },
    },
  },
};

// 크기별 예시
export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>X-Small</span>
        <Chip size='x-small'>텍스트</Chip>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>Small</span>
        <Chip size='small'>텍스트</Chip>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>Medium</span>
        <Chip size='medium'>텍스트</Chip>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>Large</span>
        <Chip size='large'>텍스트</Chip>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chip의 네 가지 크기: X-Small (24px), Small (32px), Medium (36px), Large (40px)',
      },
    },
  },
};

// Active 상태 예시
export const ActiveState: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>Normal</span>
        <Chip>텍스트</Chip>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>Active</span>
        <Chip active>텍스트</Chip>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chip의 활성/비활성 상태 비교',
      },
    },
  },
};

// 모든 상태 예시
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px' }}>Outline Type</h3>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '12px', color: '#666' }}>Default</span>
            <Chip type='outline'>텍스트</Chip>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '12px', color: '#666' }}>Hovered</span>
            <Chip type='outline' state='hovered'>
              텍스트
            </Chip>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '12px', color: '#666' }}>Pressed</span>
            <Chip type='outline' state='pressed'>
              텍스트
            </Chip>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '12px', color: '#666' }}>Focused</span>
            <Chip type='outline' state='focused'>
              텍스트
            </Chip>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '12px', color: '#666' }}>Disabled</span>
            <Chip type='outline' disabled>
              텍스트
            </Chip>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '12px', color: '#666' }}>Active</span>
            <Chip type='outline' active>
              텍스트
            </Chip>
          </div>
        </div>
      </div>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '16px' }}>Solid Type</h3>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '12px', color: '#666' }}>Default</span>
            <Chip type='solid'>텍스트</Chip>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '12px', color: '#666' }}>Hovered</span>
            <Chip type='solid' state='hovered'>
              텍스트
            </Chip>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '12px', color: '#666' }}>Pressed</span>
            <Chip type='solid' state='pressed'>
              텍스트
            </Chip>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '12px', color: '#666' }}>Focused</span>
            <Chip type='solid' state='focused'>
              텍스트
            </Chip>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '12px', color: '#666' }}>Disabled</span>
            <Chip type='solid' disabled>
              텍스트
            </Chip>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '12px', color: '#666' }}>Active</span>
            <Chip type='solid' active>
              텍스트
            </Chip>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chip의 모든 상태를 보여주는 예시 (Default, Hovered, Pressed, Focused, Disabled)',
      },
    },
  },
};

export const RadiusVariations: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>rounded-1 (4px)</span>
        <Chip radius='rounded-1'>텍스트</Chip>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>rounded-1.5 (6px)</span>
        <Chip radius='rounded-1.5'>텍스트</Chip>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>rounded-2 (8px)</span>
        <Chip radius='rounded-2'>텍스트</Chip>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>rounded-3 (12px)</span>
        <Chip radius='rounded-3'>텍스트</Chip>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>rounded-4 (16px)</span>
        <Chip radius='rounded-4'>텍스트</Chip>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>rounded-5 (20px)</span>
        <Chip radius='rounded-5'>텍스트</Chip>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>rounded-full (9999px)</span>
        <Chip radius='rounded-full'>텍스트</Chip>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chip의 다양한 radius 값들을 보여주는 예시입니다. 기본값은 rounded-full입니다.',
      },
    },
  },
};
