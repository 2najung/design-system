import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { LNBItem } from '../components';
import { IconPersonOutline20 } from '../components/icons/generated';

const meta: Meta<typeof LNBItem> = {
  title: 'Components/LNB/Item',
  component: LNBItem,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'text' } },
    selected: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    iconOnly: { control: { type: 'boolean' } },
    lang: { control: { type: 'select' }, options: ['ko', 'en'] },
  },
  args: { value: '내 정보', selected: false, disabled: false, lang: 'ko' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 280 }}>
      <LNBItem {...args} leadingIcon={IconPersonOutline20} />
    </div>
  ),
};

export const Selected: Story = {
  args: { selected: true },
  render: (args) => (
    <div style={{ width: 280 }}>
      <LNBItem {...args} leadingIcon={IconPersonOutline20} />
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <div style={{ width: 280 }}>
      <LNBItem {...args} leadingIcon={IconPersonOutline20} />
    </div>
  ),
};

export const WithoutIcon: Story = {
  render: (args) => (
    <div style={{ width: 280 }}>
      <LNBItem {...args} />
    </div>
  ),
};

export const IconOnly: Story = {
  args: { iconOnly: true },
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px', width: 'fit-content' }}>
      <div style={{ width: 60 }}>
        <LNBItem {...args} leadingIcon={IconPersonOutline20} />
      </div>
      <div style={{ width: 60 }}>
        <LNBItem {...args} leadingIcon={IconPersonOutline20} selected={true} />
      </div>
      <div style={{ width: 60 }}>
        <LNBItem {...args} leadingIcon={IconPersonOutline20} disabled={true} />
      </div>
    </div>
  ),
};
