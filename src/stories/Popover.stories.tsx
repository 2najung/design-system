import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from '../components/Popover';
import type { PopoverProps } from '../components/Popover/types';

const meta = {
  title: 'Components/Feedback/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '팝오버(Popover)는 버튼, 아이콘, 텍스트 등 특정 인터페이스 요소와 관련된 추가 정보나 액션을 보조적으로 제공하는 컴포넌트입니다. direction은 화살표가 Popover의 어느 위치에 있는지를 나타냅니다.',
      },
    },
  },
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: [
        'TopCenter',
        'TopRight',
        'TopLeft',
        'BottomCenter',
        'BottomRight',
        'BottomLeft',
        'Right',
        'Left',
      ],
      description: '화살표의 위치 (Popover 자체의 위치가 아님)',
    },
    text: {
      control: { type: 'text' },
    },
    hotkey: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: '100px' }}>
      <Popover {...args} />
    </div>
  ),
  args: {
    direction: 'BottomCenter',
    text: 'Guide text',
  },
};

export const WithHotkey: Story = {
  render: (args) => (
    <div style={{ padding: '100px' }}>
      <Popover {...args} />
    </div>
  ),
  args: {
    direction: 'BottomCenter',
    text: '선택 항목 A',
    hotkey: '⌘A',
  },
};

export const TopCenter: Story = {
  render: (args) => (
    <div style={{ padding: '100px' }}>
      <Popover {...args} />
    </div>
  ),
  args: {
    direction: 'TopCenter',
    text: 'Guide text',
  },
};

export const TopRight: Story = {
  render: (args) => (
    <div style={{ padding: '100px' }}>
      <Popover {...args} />
    </div>
  ),
  args: {
    direction: 'TopRight',
    text: 'Guide text',
  },
};

export const TopLeft: Story = {
  render: (args) => (
    <div style={{ padding: '100px' }}>
      <Popover {...args} />
    </div>
  ),
  args: {
    direction: 'TopLeft',
    text: 'Guide text',
  },
};

export const BottomRight: Story = {
  render: (args) => (
    <div style={{ padding: '100px' }}>
      <Popover {...args} />
    </div>
  ),
  args: {
    direction: 'BottomRight',
    text: 'Guide text',
  },
};

export const BottomLeft: Story = {
  render: (args) => (
    <div style={{ padding: '100px' }}>
      <Popover {...args} />
    </div>
  ),
  args: {
    direction: 'BottomLeft',
    text: 'Guide text',
  },
};

export const Right: Story = {
  render: (args) => (
    <div style={{ padding: '100px' }}>
      <Popover {...args} />
    </div>
  ),
  args: {
    direction: 'Right',
    text: 'Guide text',
  },
};

export const Left: Story = {
  render: (args) => (
    <div style={{ padding: '100px' }}>
      <Popover {...args} />
    </div>
  ),
  args: {
    direction: 'Left',
    text: 'Guide text',
  },
};

export const AllDirections: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '60px',
        padding: '40px',
      }}
    >
      {[
        'TopCenter',
        'TopRight',
        'TopLeft',
        'BottomCenter',
        'BottomRight',
        'BottomLeft',
        'Right',
        'Left',
      ].map((direction) => (
        <div
          key={direction}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <h3 style={{ fontSize: '14px', fontWeight: '600' }}>{direction}</h3>
          <Popover direction={direction as PopoverProps['direction']} text='Guide text' />
        </div>
      ))}
    </div>
  ),
};
