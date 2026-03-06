import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { LNBItem, LNBItemGroup } from '../components';
import {
  IconMoneyOutline20,
  IconPersonOutline20,
  IconWalletOutline20,
} from '../components/icons/generated';

const meta: Meta<typeof LNBItemGroup> = {
  title: 'Components/Navigation/LNB/ItemGroup',
  component: LNBItemGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' } },
    lang: { control: { type: 'select' }, options: ['ko', 'en'] },
  },
  args: { title: '설정', lang: 'ko' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 280 }}>
      <LNBItemGroup {...args}>
        <LNBItem value='내 정보' leadingIcon={IconPersonOutline20} />
        <LNBItem value='플랜 관리' leadingIcon={IconWalletOutline20} />
        <LNBItem value='요금 계산기' leadingIcon={IconMoneyOutline20} />
      </LNBItemGroup>
    </div>
  ),
};
