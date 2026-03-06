import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { LNBItemProfile } from '../components';
import { IconChevronRightOutline20 } from '../components/icons/generated';

const meta: Meta<typeof LNBItemProfile> = {
  title: 'Components/Navigation/LNB/ItemProfile',
  component: LNBItemProfile,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    name: { control: { type: 'text' } },
    avatarType: {
      control: { type: 'select' },
      options: ['default', 'custom', 'initial'],
    },
    avatarSrc: { control: { type: 'text' } },
    lang: { control: { type: 'select' }, options: ['ko', 'en'] },
  },
  args: { name: '김규빅', avatarType: 'initial', lang: 'ko' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 280 }}>
      <LNBItemProfile {...args} />
    </div>
  ),
};

export const WithTrailingIcon: Story = {
  render: (args) => (
    <div style={{ width: 280 }}>
      <LNBItemProfile {...args} trailingIcon={IconChevronRightOutline20} />
    </div>
  ),
};

export const WithCustomAvatar: Story = {
  args: {
    avatarType: 'custom',
    avatarSrc: 'https://via.placeholder.com/24',
  },
  render: (args) => (
    <div style={{ width: 280 }}>
      <LNBItemProfile {...args} trailingIcon={IconChevronRightOutline20} />
    </div>
  ),
};

export const InitialAvatar: Story = {
  args: {
    avatarType: 'initial',
    name: '김규빅',
  },
  render: (args) => (
    <div style={{ width: 280 }}>
      <LNBItemProfile {...args} trailingIcon={IconChevronRightOutline20} />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: 280 }}>
      <LNBItemProfile name='김규빅' avatarType='initial' trailingIcon={IconChevronRightOutline20} />
      <LNBItemProfile
        name='John Doe'
        avatarType='custom'
        avatarSrc='https://via.placeholder.com/24'
        trailingIcon={IconChevronRightOutline20}
      />
      <LNBItemProfile name='이지은' avatarType='initial' />
    </div>
  ),
};
