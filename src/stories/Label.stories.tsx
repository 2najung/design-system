import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../components';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['default', 'required', 'optional'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '주제',
    type: 'default',
  },
};

export const Required: Story = {
  args: {
    children: '주제',
    type: 'required',
  },
};

export const Optional: Story = {
  args: {
    children: '주제',
    type: 'optional',
  },
};
