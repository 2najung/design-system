import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { LNBItemProfile } from '../components';
import { IconChevronRightOutline20 } from '../components/icons/generated';

const meta: Meta<typeof LNBItemProfile> = {
  title: 'Components/Navigation/LNB/ItemProfile',
  component: LNBItemProfile,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 280 }}>
      <LNBItemProfile {...args} trailingIcon={IconChevronRightOutline20} />
    </div>
  ),
  args: {
    name: '사용자',
    avatarType: 'initial',
  },
  argTypes: {
    name: { control: 'text' },
    avatarType: { control: 'select', options: ['default', 'custom', 'initial'] },
  },
};
