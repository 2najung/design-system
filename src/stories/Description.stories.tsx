import type { Meta, StoryObj } from '@storybook/react';

import { Description } from '../components';

const meta: Meta<typeof Description> = {
  title: 'Components/Data Display/Description',
  component: Description,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['default', 'negative', 'positive'],
    },
    leadingIcon: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '안내 텍스트를 입력해주세요.',
    status: 'default',
    leadingIcon: false,
  },
};

export const Error: Story = {
  args: {
    children: '올바르지 않은 입력입니다.',
    status: 'negative',
    leadingIcon: true,
  },
};

export const Success: Story = {
  args: {
    children: '입력이 완료되었습니다.',
    status: 'positive',
    leadingIcon: true,
  },
};
