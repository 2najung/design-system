import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AvatarGroup } from '../components/Avatar';
import type { AvatarGroupProps } from '../components/Avatar/AvatarGroup';

const meta = {
  title: 'Components/Data Display/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'AvatarGroup은 그룹화된 다수의 아바타를 표시할 때 사용합니다. 최대 4개까지 표시하며, 드롭다운 아이콘이 함께 표시됩니다.',
      },
    },
  },
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleAvatars = [
  { type: 'default' as const },
  { type: 'default' as const },
  { type: 'default' as const },
  { type: 'default' as const },
];

const customAvatars = [
  {
    type: 'custom' as const,
    src: 'https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/product/big/20240412/ecbb950ad71a5628d66fceef9809d028.jpg',
  },
  {
    type: 'custom' as const,
    src: 'https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/product/big/20240412/ecbb950ad71a5628d66fceef9809d028.jpg',
  },
  {
    type: 'custom' as const,
    src: 'https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/product/big/20240412/ecbb950ad71a5628d66fceef9809d028.jpg',
  },
  {
    type: 'custom' as const,
    src: 'https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/product/big/20240412/ecbb950ad71a5628d66fceef9809d028.jpg',
  },
];

const initialAvatars = [
  { type: 'initial' as const, value: 'A' },
  { type: 'initial' as const, value: 'B' },
  { type: 'initial' as const, value: 'C' },
  { type: 'initial' as const, value: 'D' },
];

export const Default: Story = {
  render: (args) => <AvatarGroup {...args} />,
  args: {
    avatars: sampleAvatars,
    max: 4,
    state: 'default',
  },
};

export const WithCustomAvatars: Story = {
  render: (args) => <AvatarGroup {...args} />,
  args: {
    avatars: customAvatars,
    max: 4,
    state: 'default',
  },
};

export const WithInitialAvatars: Story = {
  render: (args) => <AvatarGroup {...args} />,
  args: {
    avatars: initialAvatars,
    max: 4,
    state: 'default',
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ width: '80px', fontSize: '14px' }}>Default</span>
        <AvatarGroup avatars={sampleAvatars} state='default' />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ width: '80px', fontSize: '14px' }}>Hovered</span>
        <AvatarGroup avatars={sampleAvatars} state='hovered' />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ width: '80px', fontSize: '14px' }}>Pressed</span>
        <AvatarGroup avatars={sampleAvatars} state='pressed' />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ width: '80px', fontSize: '14px' }}>Selected</span>
        <AvatarGroup avatars={sampleAvatars} state='selected' />
      </div>
    </div>
  ),
};

export const DifferentCounts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ width: '80px', fontSize: '14px' }}>1개</span>
        <AvatarGroup avatars={sampleAvatars.slice(0, 1)} max={4} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ width: '80px', fontSize: '14px' }}>2개</span>
        <AvatarGroup avatars={sampleAvatars.slice(0, 2)} max={4} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ width: '80px', fontSize: '14px' }}>3개</span>
        <AvatarGroup avatars={sampleAvatars.slice(0, 3)} max={4} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ width: '80px', fontSize: '14px' }}>4개</span>
        <AvatarGroup avatars={sampleAvatars} max={4} />
      </div>
    </div>
  ),
};

export const MaxLimit: Story = {
  render: () => {
    const manyAvatars = [
      { type: 'initial' as const, value: 'A' },
      { type: 'initial' as const, value: 'B' },
      { type: 'initial' as const, value: 'C' },
      { type: 'initial' as const, value: 'D' },
      { type: 'initial' as const, value: 'E' },
      { type: 'initial' as const, value: 'F' },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ width: '120px', fontSize: '14px' }}>max=2</span>
          <AvatarGroup avatars={manyAvatars} max={2} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ width: '120px', fontSize: '14px' }}>max=3</span>
          <AvatarGroup avatars={manyAvatars} max={3} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ width: '120px', fontSize: '14px' }}>max=4 (기본)</span>
          <AvatarGroup avatars={manyAvatars} max={4} />
        </div>
      </div>
    );
  },
};
