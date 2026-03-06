import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '../components/Pagination/Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '페이지네이션(Pagination)은 콘텐츠를 여러 페이지로 분할하여 사용자가 페이지 간을 이동하거나 현재 위치를 인지할 수 있도록 돕는 내비게이션 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: '현재 페이지 (1부터 시작)',
      table: {
        type: { summary: 'number' },
      },
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: '전체 페이지 수',
      table: {
        type: { summary: 'number' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['compact', 'minimize'],
      description: 'Pagination 변형',
      table: {
        type: { summary: 'compact | minimize' },
        defaultValue: { summary: 'compact' },
      },
    },
    maxVisiblePages: {
      control: { type: 'number', min: 3 },
      description: '한 번에 표시할 최대 페이지 수 (compact variant에서만 사용)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined (모든 페이지 표시)' },
      },
    },
    onPageChange: {
      action: 'page-changed',
      description: '페이지 변경 시 호출되는 함수',
      table: {
        type: { summary: '(page: number) => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper component
const PaginationWithState = (args: any) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={(page) => {
        setCurrentPage(page);
        args.onPageChange?.(page);
      }}
    />
  );
};

export const CompactDefault: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 7,
    variant: 'compact',
  },
};

export const MinimizeDefault: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
    variant: 'minimize',
  },
};

export const CompactManyPages: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    currentPage: 5,
    totalPages: 20,
    variant: 'compact',
  },
};

export const CompactWithMaxVisible: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 100,
    variant: 'compact',
    maxVisiblePages: 5,
  },
};

export const CompactWithMaxVisibleMiddle: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    currentPage: 50,
    totalPages: 100,
    variant: 'compact',
    maxVisiblePages: 5,
  },
};

export const CompactWithMaxVisibleEnd: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    currentPage: 98,
    totalPages: 100,
    variant: 'compact',
    maxVisiblePages: 5,
  },
};

export const CompactMiddlePage: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    currentPage: 4,
    totalPages: 7,
    variant: 'compact',
  },
};

export const MinimizeMiddlePage: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
    variant: 'minimize',
  },
};
