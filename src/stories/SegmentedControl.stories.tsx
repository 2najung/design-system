import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { SegmentItem, SegmentedControl } from '../components/SegmentedControl';
import type { SegmentedControlProps } from '../components/SegmentedControl/types';

// 메타데이터 정의
const meta = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '세그먼트 컨트롤(Segmented Control)은 여러 개의 선택지를 수평으로 배열된 세그먼트(버튼 형태)로 제공하는 컴포넌트입니다. 사용자는 이 중 하나를 선택하여 현재 상태를 전환하거나, 화면 내 표시되는 콘텐츠를 빠르게 전환할 수 있습니다.',
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
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 SegmentedControl 스토리
export const Default: Story = {
  render: ({ defaultValue }) => (
    <SegmentedControl defaultValue={defaultValue}>
      <SegmentItem>텍스트</SegmentItem>
      <SegmentItem>텍스트</SegmentItem>
      <SegmentItem>텍스트</SegmentItem>
    </SegmentedControl>
  ),
  args: {
    defaultValue: 0,
  },
};

// 2개 항목
export const TwoItems: Story = {
  render: ({ defaultValue }) => (
    <SegmentedControl defaultValue={defaultValue}>
      <SegmentItem>옵션 1</SegmentItem>
      <SegmentItem>옵션 2</SegmentItem>
    </SegmentedControl>
  ),
  args: {
    defaultValue: 0,
  },
};

// 4개 항목
export const FourItems: Story = {
  render: ({ defaultValue }) => (
    <SegmentedControl defaultValue={defaultValue}>
      <SegmentItem>첫 번째</SegmentItem>
      <SegmentItem>두 번째</SegmentItem>
      <SegmentItem>세 번째</SegmentItem>
      <SegmentItem>네 번째</SegmentItem>
    </SegmentedControl>
  ),
  args: {
    defaultValue: 0,
  },
};

// 6개 항목 (최대 권장)
export const SixItems: Story = {
  render: ({ defaultValue }) => (
    <SegmentedControl defaultValue={defaultValue}>
      <SegmentItem>1월</SegmentItem>
      <SegmentItem>2월</SegmentItem>
      <SegmentItem>3월</SegmentItem>
      <SegmentItem>4월</SegmentItem>
      <SegmentItem>5월</SegmentItem>
      <SegmentItem>6월</SegmentItem>
    </SegmentedControl>
  ),
  args: {
    defaultValue: 0,
  },
};

// 비활성화된 항목이 있는 경우
export const WithDisabledItem: Story = {
  render: ({ defaultValue }) => (
    <SegmentedControl defaultValue={defaultValue}>
      <SegmentItem>활성</SegmentItem>
      <SegmentItem disabled>비활성</SegmentItem>
      <SegmentItem>활성</SegmentItem>
    </SegmentedControl>
  ),
  args: {
    defaultValue: 0,
  },
};

// 컨트롤된 컴포넌트 (외부에서 값 관리)
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState(1);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <SegmentedControl value={value} onChange={setValue}>
          <SegmentItem>선택 1</SegmentItem>
          <SegmentItem>선택 2</SegmentItem>
          <SegmentItem>선택 3</SegmentItem>
        </SegmentedControl>
        <p>현재 선택된 인덱스: {value}</p>
      </div>
    );
  },
};
