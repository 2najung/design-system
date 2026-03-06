import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { SolidButton } from '../components/Button/SolidButton';
import { Tooltip } from '../components/Tooltip/Tooltip';
import type { TooltipProps } from '../components/Tooltip/types';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Tooltip은 아이콘, 버튼, 텍스트 등 인터페이스 요소에 마우스를 오버하거나 포커스했을 때 간결한 정보를 보조적으로 제공하는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: '툴팁의 스타일 변형을 설정합니다.',
    },
    placement: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'left',
        'right',
      ],
      description: '툴팁이 표시되는 위치를 설정합니다.',
    },
    text: {
      control: 'text',
      description: '툴팁에 표시될 텍스트입니다.',
    },
    hotkey: {
      control: 'text',
      description: '단축키 텍스트입니다.',
    },
    offset: {
      control: 'number',
      description: '트리거 요소와 툴팁 사이의 간격(px)입니다.',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <SolidButton>Hover me</SolidButton>
    </Tooltip>
  ),
  args: {
    text: 'Tooltip text',
    variant: 'primary',
    placement: 'top-center',
  },
};

export const Secondary: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <SolidButton>Hover me</SolidButton>
    </Tooltip>
  ),
  args: {
    text: 'Tooltip text',
    variant: 'secondary',
    placement: 'top-center',
  },
};

export const WithHotkey: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <SolidButton>Hover me</SolidButton>
    </Tooltip>
  ),
  args: {
    text: 'Tooltip text',
    hotkey: '⌘V',
    variant: 'primary',
    placement: 'top-center',
  },
};

export const Placements: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '80px',
        padding: '100px',
      }}
    >
      <div style={{ display: 'flex', gap: '40px' }}>
        <Tooltip text='Top Left' placement='top-left'>
          <SolidButton>Top Left</SolidButton>
        </Tooltip>
        <Tooltip text='Top Center' placement='top-center'>
          <SolidButton>Top Center</SolidButton>
        </Tooltip>
        <Tooltip text='Top Right' placement='top-right'>
          <SolidButton>Top Right</SolidButton>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', gap: '200px' }}>
        <Tooltip text='Left' placement='left'>
          <SolidButton>Left</SolidButton>
        </Tooltip>
        <Tooltip text='Right' placement='right'>
          <SolidButton>Right</SolidButton>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', gap: '40px' }}>
        <Tooltip text='Bottom Left' placement='bottom-left'>
          <SolidButton>Bottom Left</SolidButton>
        </Tooltip>
        <Tooltip text='Bottom Center' placement='bottom-center'>
          <SolidButton>Bottom Center</SolidButton>
        </Tooltip>
        <Tooltip text='Bottom Right' placement='bottom-right'>
          <SolidButton>Bottom Right</SolidButton>
        </Tooltip>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '툴팁의 위치를 top-left, top-center, top-right, bottom-left, bottom-center, bottom-right, left, right로 설정할 수 있습니다.',
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '40px', padding: '40px' }}>
      <Tooltip text='Primary tooltip' hotkey='⌘V' variant='primary'>
        <SolidButton>Primary</SolidButton>
      </Tooltip>
      <Tooltip text='Secondary tooltip' hotkey='⌘V' variant='secondary'>
        <SolidButton variant='secondary'>Secondary</SolidButton>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Primary는 어두운 배경, Secondary는 밝은 배경과 테두리를 가집니다.',
      },
    },
  },
};
