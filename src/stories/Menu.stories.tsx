import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from '../components';
import { Cell } from '../components';
import {
  IconDocumentOutline16,
  IconHomeOutline16,
  IconSearchOutline16,
} from '../components/icons/generated';

const meta: Meta<typeof Menu> = {
  title: 'Components/Navigation/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'text' },
      description: 'Menu의 너비 (예: 300px, 100%, 20rem)',
    },
    showCheckIcon: {
      control: { type: 'boolean' },
      description: 'active 상태의 Cell에 체크 아이콘 표시 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Menu {...args}>
      <Cell text='선택 항목 A' />
      <Cell text='선택 항목 B' active />
      <Cell text='선택 항목 C' disable />
    </Menu>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <Menu {...args}>
      <Cell text='홈' leadingContent={() => <IconHomeOutline16 />} />
      <Cell text='검색' leadingContent={() => <IconSearchOutline16 />} active />
      <Cell text='문서' leadingContent={() => <IconDocumentOutline16 />} />
    </Menu>
  ),
};

export const WithDescriptions: Story = {
  render: (args) => (
    <Menu {...args}>
      <Cell text='기본 설정' description='일반적인 설정을 관리합니다' />
      <Cell text='고급 설정' description='고급 옵션을 관리합니다' active />
      <Cell text='시스템 설정' description='시스템 레벨 설정입니다' disable />
    </Menu>
  ),
};

export const WithScroll: Story = {
  render: (args) => (
    <Menu {...args} style={{ maxHeight: '200px', overflowY: 'auto' }}>
      <Cell text='항목 1' />
      <Cell text='항목 2' />
      <Cell text='항목 3' />
      <Cell text='항목 4' />
      <Cell text='항목 5' />
      <Cell text='항목 6' />
      <Cell text='항목 7' />
      <Cell text='항목 8' />
      <Cell text='항목 9' />
      <Cell text='항목 10' />
      <Cell text='항목 11' />
      <Cell text='항목 12' />
      <Cell text='항목 13' />
      <Cell text='항목 14' />
      <Cell text='항목 15' />
    </Menu>
  ),
};

export const CustomWidth: Story = {
  render: (args) => (
    <Menu {...args}>
      <Cell text='선택 항목 A' />
      <Cell text='선택 항목 B' active />
      <Cell text='선택 항목 C' />
    </Menu>
  ),
  args: {
    width: '400px',
  },
};

export const WithoutCheckIcon: Story = {
  render: (args) => (
    <Menu {...args}>
      <Cell text='선택 항목 A' />
      <Cell text='선택 항목 B' active />
      <Cell text='선택 항목 C' />
    </Menu>
  ),
  args: {
    showCheckIcon: false,
  },
};
