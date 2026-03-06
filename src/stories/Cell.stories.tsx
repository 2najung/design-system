import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, Cell } from '../components';
import { IconHomeOutline16, IconSearchOutline16 } from '../components/icons/generated';

const meta: Meta<typeof Cell> = {
  title: 'Components/Data Display/Cell',
  component: Cell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disable: {
      control: { type: 'boolean' },
    },
    active: {
      control: { type: 'boolean' },
    },
    text: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '선택 항목',
  },
};

export const Active: Story = {
  args: {
    text: '선택된 항목',
    active: true,
  },
};

export const Disabled: Story = {
  args: {
    text: '비활성화된 항목',
    disable: true,
  },
};

export const WithDescription: Story = {
  args: {
    text: '설정 항목',
    description: '설정을 관리합니다',
  },
};

export const ActiveWithDescription: Story = {
  args: {
    text: '선택된 설정',
    description: '현재 선택된 설정입니다',
    active: true,
  },
};

export const WithLeadingContent: Story = {
  args: {
    text: '홈',
    leadingContent: () => <div>🏠</div>,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    text: '사용자 정의 아이콘',
    active: true,
    trailingIcon: () => <div>⭐</div>,
  },
};

export const WithAvatar: Story = {
  args: {
    text: 'John Doe',
    description: 'john.doe@example.com',
    leadingContent: () => <Avatar type='initial' size='small' value='JD' />,
  },
};

export const WithAvatarImage: Story = {
  args: {
    text: 'Jane Smith',
    description: 'Designer',
    leadingContent: () => (
      <Avatar type='default' size='small' src='https://i.pravatar.cc/150?img=1' alt='Jane Smith' />
    ),
  },
};

export const WithIcon16: Story = {
  args: {
    text: '홈',
    description: '메인 페이지로 이동',
    leadingContent: () => <IconHomeOutline16 />,
  },
};

export const WithIcon16Settings: Story = {
  args: {
    text: '설정',
    description: '앱 설정 관리',
    leadingContent: () => <IconSearchOutline16 />,
    active: true,
  },
};

export const LeadingContentComparison: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '300px',
      }}
    >
      <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Avatar (small)</h4>
      <Cell
        text='John Doe'
        description='john.doe@example.com'
        leadingContent={() => <Avatar type='initial' size='small' value='JD' />}
      />
      <Cell
        text='Jane Smith'
        description='Designer'
        leadingContent={() => (
          <Avatar
            type='default'
            size='small'
            src='https://i.pravatar.cc/150?img=1'
            alt='Jane Smith'
          />
        )}
      />

      <h4
        style={{
          fontSize: '14px',
          fontWeight: '600',
          marginTop: '16px',
          marginBottom: '8px',
        }}
      >
        Icon (16px)
      </h4>
      <Cell
        text='홈'
        description='메인 페이지로 이동'
        leadingContent={() => <IconHomeOutline16 />}
      />
      <Cell
        text='검색'
        description='앱 검색'
        leadingContent={() => <IconSearchOutline16 />}
        active={true}
      />
    </div>
  ),
};
