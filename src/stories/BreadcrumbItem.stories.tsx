import type { Meta, StoryObj } from '@storybook/react';

import { BreadcrumbItem } from '../components/Breadcrumbs/BreadcrumbItem';
import { Icons } from '../components/icons';

const meta: Meta<typeof BreadcrumbItem> = {
  title: 'Components/Navigation/Breadcrumbs/BreadcrumbItem',
  component: BreadcrumbItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '브레드크럼 아이템(Breadcrumb Item)은 브레드크럼을 구성하는 개별 항목입니다. 텍스트와 아이콘을 포함할 수 있으며, 다양한 상태(default, hovered, pressed, focused, disabled)를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: '브레드크럼 아이템의 텍스트',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    active: {
      control: { type: 'boolean' },
      description: '활성화 상태 (현재 페이지)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    leadingIcon: {
      control: { type: 'boolean' },
      description: '앞쪽 아이콘 표시 여부',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    trailingIcon: {
      control: { type: 'boolean' },
      description: '뒤쪽 아이콘 표시 여부',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    onClick: {
      action: 'clicked',
      description: '클릭 시 실행될 함수',
      table: {
        type: { summary: '() => void' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'CSS 클래스명을 적용합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <BreadcrumbItem
      {...args}
      leadingIcon={args.leadingIcon ? <Icons.IconHomeOutline16 /> : undefined}
      trailingIcon={args.trailingIcon ? <Icons.IconChevronRightOutline16 /> : undefined}
    >
      {args.children}
    </BreadcrumbItem>
  ),
  args: {
    children: '홈',
    active: false,
    disabled: false,
    leadingIcon: true,
    trailingIcon: false,
  },
};

export const WithLeadingIcon: Story = {
  render: (args) => (
    <BreadcrumbItem {...args} leadingIcon={<Icons.IconHomeOutline16 />}>
      홈
    </BreadcrumbItem>
  ),
  args: {
    active: false,
    disabled: false,
  },
};

export const WithTrailingIcon: Story = {
  render: (args) => (
    <BreadcrumbItem {...args} trailingIcon={<Icons.IconChevronRightOutline16 />}>
      설정
    </BreadcrumbItem>
  ),
  args: {
    active: false,
    disabled: false,
  },
};

export const WithBothIcons: Story = {
  render: (args) => (
    <BreadcrumbItem
      {...args}
      leadingIcon={<Icons.IconSettingOutline16 />}
      trailingIcon={<Icons.IconChevronRightOutline16 />}
    >
      설정
    </BreadcrumbItem>
  ),
  args: {
    active: false,
    disabled: false,
  },
};

export const Active: Story = {
  render: (args) => (
    <BreadcrumbItem {...args} leadingIcon={<Icons.IconLockOutline16 />}>
      개인정보 변경
    </BreadcrumbItem>
  ),
  args: {
    active: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  render: (args) => (
    <BreadcrumbItem {...args} leadingIcon={<Icons.IconHomeOutline16 />}>
      홈
    </BreadcrumbItem>
  ),
  args: {
    active: false,
    disabled: true,
  },
};

export const TextOnly: Story = {
  render: (args) => <BreadcrumbItem {...args}>설정</BreadcrumbItem>,
  args: {
    active: false,
    disabled: false,
  },
};

export const LongText: Story = {
  render: (args) => (
    <BreadcrumbItem {...args} leadingIcon={<Icons.IconSettingOutline16 />}>
      개인정보 및 보안 설정
    </BreadcrumbItem>
  ),
  args: {
    active: false,
    disabled: false,
  },
};
