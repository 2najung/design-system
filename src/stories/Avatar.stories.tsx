import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '../components/Avatar';
import type { AvatarProps } from '../components/Avatar/types';

// 고정된 SVG 아이콘 컴포넌트
const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M16 15.5897C14.7129 15.5897 13.6133 15.1337 12.7013 14.2217C11.7893 13.3099 11.3333 12.2103 11.3333 10.923C11.3333 9.6359 11.7893 8.53635 12.7013 7.62435C13.6133 6.71235 14.7129 6.25635 16 6.25635C17.2871 6.25635 18.3867 6.71235 19.2987 7.62435C20.2107 8.53635 20.6667 9.6359 20.6667 10.923C20.6667 12.2103 20.2107 13.3099 19.2987 14.2217C18.3867 15.1337 17.2871 15.5897 16 15.5897ZM6 23.718V22.7793C6 22.1265 6.17733 21.5218 6.532 20.9653C6.88667 20.4089 7.36067 19.9811 7.954 19.682C9.27178 19.036 10.6012 18.5515 11.9423 18.2283C13.2834 17.9052 14.636 17.7437 16 17.7437C17.364 17.7437 18.7166 17.9052 20.0577 18.2283C21.3988 18.5515 22.7282 19.036 24.046 19.682C24.6393 19.9811 25.1133 20.4089 25.468 20.9653C25.8227 21.5218 26 22.1265 26 22.7793V23.718C26 24.2802 25.803 24.7585 25.409 25.1527C25.015 25.5467 24.5368 25.7437 23.9743 25.7437H8.02567C7.46322 25.7437 6.985 25.5467 6.591 25.1527C6.197 24.7585 6 24.2802 6 23.718Z'
      fill='#CACCCF'
    />
  </svg>
);

// 메타데이터 정의
const meta = {
  title: 'Components/Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Avatar는 사람용 프로필로 사용합니다. default 타입은 아이콘을, initial 타입은 텍스트를, custom 타입은 이미지를 표시합니다.',
      },
      canvas: {
        sourceState: 'shown',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 Avatar 스토리
export const Default: Story = {
  render: (args) => <Avatar {...args} />,
  args: {
    type: 'default',
    size: 'medium',
    src: 'https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/product/big/20240412/ecbb950ad71a5628d66fceef9809d028.jpg',
  },
};

// Initial 타입 (텍스트)
export const Initial: Story = {
  render: (args) => <Avatar {...args} />,
  args: {
    type: 'initial',
    size: 'medium',
    value: 'A',
  },
};

// Custom 타입 (이미지)
export const Custom: Story = {
  render: (args) => <Avatar {...args} />,
  args: {
    type: 'custom',
    size: 'medium',
    src: 'https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/product/big/20240412/ecbb950ad71a5628d66fceef9809d028.jpg',
    alt: 'User avatar',
  },
};

// 크기별 예시
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar type='default' size='x-small' icon={UserIcon} />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>X-small</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar type='default' size='small' icon={UserIcon} />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Small</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar type='default' size='medium' icon={UserIcon} />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Medium</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar type='default' size='large' icon={UserIcon} />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Large</p>
      </div>
    </div>
  ),
};

// Initial 타입 크기별 예시
export const InitialSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar type='initial' size='x-small' value='A' />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>X-small</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar type='initial' size='small' value='B' />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Small</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar type='initial' size='medium' value='C' />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Medium</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar type='initial' size='large' value='D' />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Large</p>
      </div>
    </div>
  ),
};

// 타입별 예시
export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar type='default' size='medium' icon={UserIcon} />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Default</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar type='initial' size='medium' value='J' />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Initial</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar
          type='custom'
          size='medium'
          src='https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/product/big/20240412/ecbb950ad71a5628d66fceef9809d028.jpg'
          alt='User avatar'
        />
        <p style={{ fontSize: '12px', marginTop: '8px' }}>Custom</p>
      </div>
    </div>
  ),
};
