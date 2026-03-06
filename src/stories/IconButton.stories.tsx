import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '../components/Button/IconButton';
import type { IconButtonProps } from '../components/Button/IconButton';

// 테스트용 SVG 아이콘 컴포넌트들
const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='20,6 9,17 4,12' />
  </svg>
);

const TrashIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='3,6 5,6 21,6' />
    <path d='m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2' />
    <line x1='10' y1='11' x2='10' y2='17' />
    <line x1='14' y1='11' x2='14' y2='17' />
  </svg>
);

const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
  </svg>
);

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='12' y1='5' x2='12' y2='19' />
    <line x1='5' y1='12' x2='19' y2='12' />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='18' y1='6' x2='6' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </svg>
);

// 메타데이터 정의
const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '아이콘 전용 버튼 컴포넌트입니다. Solid와 Outline 두 가지 타입으로 제공되며, 다양한 variant와 크기를 지원합니다.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['solid', 'outline'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'brand', 'positive', 'negative'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    state: {
      control: { type: 'radio' },
      options: ['default', 'hovered', 'pressed', 'focused'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Solid Type Stories
export const SolidPrimary: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    type: 'solid',
    variant: 'primary',
    size: 'medium',
    state: 'default',
    icon: CheckIcon,
  },
};

export const SolidSecondary: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    type: 'solid',
    variant: 'secondary',
    size: 'medium',
    state: 'default',
    icon: PlusIcon,
  },
};

export const SolidBrand: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    type: 'solid',
    variant: 'brand',
    size: 'medium',
    state: 'default',
    icon: HeartIcon,
  },
};

export const SolidPositive: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    type: 'solid',
    variant: 'positive',
    size: 'medium',
    state: 'default',
    icon: CheckIcon,
  },
};

export const SolidNegative: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    type: 'solid',
    variant: 'negative',
    size: 'medium',
    state: 'default',
    icon: TrashIcon,
  },
};

// Outline Type Stories
export const OutlineSecondary: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    type: 'outline',
    variant: 'secondary',
    size: 'medium',
    state: 'default',
    icon: PlusIcon,
  },
};

export const OutlineBrand: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    type: 'outline',
    variant: 'brand',
    size: 'medium',
    state: 'default',
    icon: HeartIcon,
  },
};

export const OutlinePositive: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    type: 'outline',
    variant: 'positive',
    size: 'medium',
    state: 'default',
    icon: CheckIcon,
  },
};

export const OutlineNegative: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    type: 'outline',
    variant: 'negative',
    size: 'medium',
    state: 'default',
    icon: XIcon,
  },
};

// Size Variations
export const SizeSmall: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    type: 'solid',
    variant: 'primary',
    size: 'small',
    state: 'default',
    icon: CheckIcon,
  },
};

export const SizeMedium: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    type: 'solid',
    variant: 'primary',
    size: 'medium',
    state: 'default',
    icon: CheckIcon,
  },
};

export const SizeLarge: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    type: 'solid',
    variant: 'primary',
    size: 'large',
    state: 'default',
    icon: CheckIcon,
  },
};

// State Variations
export const StateDisabled: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    type: 'solid',
    variant: 'primary',
    size: 'medium',
    disabled: true,
    icon: CheckIcon,
  },
};

export const StateLoading: Story = {
  render: (args) => <IconButton {...args} />,
  args: {
    type: 'solid',
    variant: 'primary',
    size: 'medium',
    loading: true,
    icon: CheckIcon,
  },
};

// All Sizes Comparison
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton type='solid' variant='primary' size='small' icon={CheckIcon} />
      <IconButton type='solid' variant='primary' size='medium' icon={CheckIcon} />
      <IconButton type='solid' variant='primary' size='large' icon={CheckIcon} />
    </div>
  ),
};

// All Variants Comparison (Solid)
export const AllSolidVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton type='solid' variant='primary' size='medium' icon={CheckIcon} />
      <IconButton type='solid' variant='secondary' size='medium' icon={PlusIcon} />
      <IconButton type='solid' variant='brand' size='medium' icon={HeartIcon} />
      <IconButton type='solid' variant='positive' size='medium' icon={CheckIcon} />
      <IconButton type='solid' variant='negative' size='medium' icon={TrashIcon} />
    </div>
  ),
};

// All Variants Comparison (Outline)
export const AllOutlineVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <IconButton type='outline' variant='secondary' size='medium' icon={PlusIcon} />
      <IconButton type='outline' variant='brand' size='medium' icon={HeartIcon} />
      <IconButton type='outline' variant='positive' size='medium' icon={CheckIcon} />
      <IconButton type='outline' variant='negative' size='medium' icon={XIcon} />
    </div>
  ),
};
