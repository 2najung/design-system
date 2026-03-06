import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { OutlineButton } from '../components/Button/OutlineButton';
import { SolidButton } from '../components/Button/SolidButton';
import { TextButton } from '../components/Button/TextButton';
import type { ButtonProps } from '../components/Button/types';

// 테스트용 SVG 아이콘 컴포넌트
const RocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M4.5 16.5c-1.5 1.5-2 4.5-2 4.5s3-0.5 4.5-2c0.08-0.08 0.96-0.92 1.5-1.5' />
    <path d='M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z' />
    <path d='M9 12H4s0.55-3.03 2-4.5C6.62 6.96 9 7 9 7' />
    <path d='M12 15v5s3.03-0.55 4.5-2c0.54-0.54 0.5-2.5 0.5-2.5' />
  </svg>
);

// 메타데이터 정의
const meta = {
  title: 'Components/Inputs/Button',
  component: SolidButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          "state가 'default'일 때 마우스를 올리면(hover) 'hovered', 클릭하면(press) 'pressed', 포커스하면(focus) 'focused' 상태로 변경됩니다. state prop으로 특정 상태를 직접 지정할 수도 있습니다.",
      },
    },
  },
} satisfies Meta<typeof SolidButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Solid Button Stories
export const Solid: Story = {
  render: (args) => <SolidButton {...args}>Button</SolidButton>,
  args: {
    variant: 'primary',
    size: 'medium',
    state: 'default',
  },
};

export const SolidWithIcon: Story = {
  render: (args) => <SolidButton {...args}>Button</SolidButton>,
  args: {
    ...Solid.args,
    leadingIcon: RocketIcon,
  },
};

export const SolidDisabled: Story = {
  render: (args) => <SolidButton {...args}>Button</SolidButton>,
  args: {
    ...Solid.args,
    disabled: true,
  },
};

export const SolidLoading: Story = {
  render: (args) => <SolidButton {...args}>Button</SolidButton>,
  args: {
    ...Solid.args,
    loading: true,
  },
};

// Solid Secondary Button Stories
export const SolidSecondary: Story = {
  render: (args) => <SolidButton {...args}>Button</SolidButton>,
  args: {
    variant: 'secondary',
    size: 'medium',
    state: 'default',
  },
};

// Solid Tertiary Button Stories
export const SolidTertiary: Story = {
  render: (args) => <SolidButton {...args}>Button</SolidButton>,
  args: {
    variant: 'tertiary',
    size: 'medium',
    state: 'default',
  },
};

export const SolidTertiaryWithIcon: Story = {
  render: (args) => <SolidButton {...args}>Button</SolidButton>,
  args: {
    ...SolidTertiary.args,
    leadingIcon: RocketIcon,
  },
};

export const SolidTertiaryDisabled: Story = {
  render: (args) => <SolidButton {...args}>Button</SolidButton>,
  args: {
    ...SolidTertiary.args,
    disabled: true,
  },
};

export const SolidTertiaryLoading: Story = {
  render: (args) => <SolidButton {...args}>Button</SolidButton>,
  args: {
    ...SolidTertiary.args,
    loading: true,
  },
};

// Outline Button Stories
export const Outline: Story = {
  render: (args) => <OutlineButton {...args}>Button</OutlineButton>,
  args: {
    variant: 'secondary',
    size: 'medium',
    state: 'default',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['secondary', 'brand', 'positive', 'negative'],
    },
  },
};

export const OutlineWithIcon: Story = {
  render: (args) => <OutlineButton {...args}>Button</OutlineButton>,
  args: {
    ...Outline.args,
    leadingIcon: RocketIcon,
  },
  argTypes: {
    ...Outline.argTypes,
  },
};

export const OutlineDisabled: Story = {
  render: (args) => <OutlineButton {...args}>Button</OutlineButton>,
  args: {
    ...Outline.args,
    disabled: true,
  },
  argTypes: {
    ...Outline.argTypes,
  },
};

export const OutlineLoading: Story = {
  render: (args) => <OutlineButton {...args}>Button</OutlineButton>,
  args: {
    ...Outline.args,
    loading: true,
  },
  argTypes: {
    ...Outline.argTypes,
  },
};

// Text Button Stories
export const Text: Story = {
  render: (args) => <TextButton {...args}>Button</TextButton>,
  args: {
    variant: 'secondary',
    size: 'medium',
    state: 'default',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['secondary', 'brand', 'positive', 'negative'],
    },
  },
};

export const TextWithIcon: Story = {
  render: (args) => <TextButton {...args}>Button</TextButton>,
  args: {
    ...Text.args,
    leadingIcon: RocketIcon,
  },
  argTypes: {
    ...Text.argTypes,
  },
};

export const TextDisabled: Story = {
  render: (args) => <TextButton {...args}>Button</TextButton>,
  args: {
    ...Text.args,
    disabled: true,
  },
  argTypes: {
    ...Text.argTypes,
  },
};

export const TextLoading: Story = {
  render: (args) => <TextButton {...args}>Button</TextButton>,
  args: {
    ...Text.args,
    loading: true,
  },
  argTypes: {
    ...Text.argTypes,
  },
};
