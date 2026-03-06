import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { LNBItem } from '../components';
import { IconPersonOutline20 } from '../components/icons/generated';

const meta: Meta<typeof LNBItem> = {
  title: 'Components/Navigation/LNB/Item',
  component: LNBItem,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 280 }}>
      <LNBItem {...args} leadingIcon={IconPersonOutline20} />
    </div>
  ),
  args: {
    value: '내 정보',
    selected: false,
    disabled: false,
  },
  argTypes: {
    value: { control: 'text' },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
  },
};
