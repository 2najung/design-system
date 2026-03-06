import type { Meta, StoryObj } from '@storybook/react';

import { BreadcrumbItem } from '../components/Breadcrumbs/BreadcrumbItem';
import { Icons } from '../components/icons';

const meta: Meta<typeof BreadcrumbItem> = {
  title: 'Components/Navigation/Breadcrumbs/BreadcrumbItem',
  component: BreadcrumbItem,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <BreadcrumbItem {...args}>
      <Icons.IconHomeOutline20 />홈
    </BreadcrumbItem>
  ),
  args: {
    active: false,
    disabled: false,
  },
  argTypes: {
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
