import type { Meta, StoryObj } from '@storybook/react';

import { StepIndicator } from '../components/StepIndicator';
import type { StepIndicatorProps } from '../components/StepIndicator/types';

const meta = {
  title: 'Components/Navigation/StepIndicator',
  component: StepIndicator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Step Indicator (스텝 인디케이터)는 사용자가 전체 중인 프로세스나 플로우의 단계를 시각적으로 보여주는 컴포넌트입니다. 여러 단계가 순서대로 배열되어 있으며, 현재 위치한 단계의 이후에 진행할 단계 한눈에 파악할 수 있습니다.',
      },
    },
  },
  argTypes: {
    count: {
      control: { type: 'select' },
      options: [3, 4, 5],
      description: '전체 스텝 개수',
    },
    currentStep: {
      control: { type: 'number', min: 1, max: 5 },
      description: '현재 스텝 (1부터 시작)',
    },
    showLabel: {
      control: { type: 'boolean' },
      description: '라벨 표시 여부',
    },
    orientation: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
      description: '라벨 위치 (vertical: 아래, horizontal: 옆)',
    },
  },
} satisfies Meta<typeof StepIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '600px', padding: '40px' }}>
      <StepIndicator {...args} />
    </div>
  ),
  args: {
    count: 4,
    currentStep: 2,
    showLabel: false,
  },
};

export const WithLabels: Story = {
  render: (args) => (
    <div style={{ width: '600px', padding: '40px' }}>
      <StepIndicator {...args} />
    </div>
  ),
  args: {
    count: 4,
    currentStep: 2,
    showLabel: true,
    steps: [{ label: '완료' }, { label: '단계' }, { label: '단계' }, { label: '단계' }],
  },
};

export const ThreeSteps: Story = {
  render: (args) => (
    <div style={{ width: '500px', padding: '40px' }}>
      <StepIndicator {...args} />
    </div>
  ),
  args: {
    count: 3,
    currentStep: 1,
    showLabel: true,
    steps: [{ label: '단계 1' }, { label: '단계 2' }, { label: '단계 3' }],
  },
};

export const FourSteps: Story = {
  render: (args) => (
    <div style={{ width: '600px', padding: '40px' }}>
      <StepIndicator {...args} />
    </div>
  ),
  args: {
    count: 4,
    currentStep: 2,
    showLabel: true,
    steps: [{ label: '단계 1' }, { label: '단계 2' }, { label: '단계 3' }, { label: '단계 4' }],
  },
};

export const FiveSteps: Story = {
  render: (args) => (
    <div style={{ width: '700px', padding: '40px' }}>
      <StepIndicator {...args} />
    </div>
  ),
  args: {
    count: 5,
    currentStep: 3,
    showLabel: true,
    steps: [
      { label: '단계 1' },
      { label: '단계 2' },
      { label: '단계 3' },
      { label: '단계 4' },
      { label: '단계 5' },
    ],
  },
};

export const AllStates: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        padding: '40px',
      }}
    >
      <div style={{ width: '600px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>
          Step 1 (Active)
        </h3>
        <StepIndicator
          count={4}
          currentStep={1}
          showLabel={true}
          steps={[
            { label: '단계 1' },
            { label: '단계 2' },
            { label: '단계 3' },
            { label: '단계 4' },
          ]}
        />
      </div>

      <div style={{ width: '600px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>
          Step 2 (Active)
        </h3>
        <StepIndicator
          count={4}
          currentStep={2}
          showLabel={true}
          steps={[{ label: '완료' }, { label: '단계 2' }, { label: '단계 3' }, { label: '단계 4' }]}
        />
      </div>

      <div style={{ width: '600px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>
          Step 3 (Active)
        </h3>
        <StepIndicator
          count={4}
          currentStep={3}
          showLabel={true}
          steps={[{ label: '완료' }, { label: '완료' }, { label: '단계 3' }, { label: '단계 4' }]}
        />
      </div>

      <div style={{ width: '600px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>
          Step 4 (Complete)
        </h3>
        <StepIndicator
          count={4}
          currentStep={4}
          showLabel={true}
          steps={[{ label: '완료' }, { label: '완료' }, { label: '완료' }, { label: '완료' }]}
        />
      </div>
    </div>
  ),
};

export const WithoutLabels: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        padding: '40px',
      }}
    >
      <div style={{ width: '600px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>
          3 Steps - Current: 2
        </h3>
        <StepIndicator count={3} currentStep={2} showLabel={false} />
      </div>

      <div style={{ width: '600px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>
          4 Steps - Current: 2
        </h3>
        <StepIndicator count={4} currentStep={2} showLabel={false} />
      </div>

      <div style={{ width: '700px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>
          5 Steps - Current: 3
        </h3>
        <StepIndicator count={5} currentStep={3} showLabel={false} />
      </div>
    </div>
  ),
};

export const Horizontal: Story = {
  render: (args) => (
    <div style={{ width: '600px', padding: '40px' }}>
      <StepIndicator {...args} />
    </div>
  ),
  args: {
    count: 4,
    currentStep: 2,
    showLabel: true,
    orientation: 'horizontal',
    steps: [{ label: '완료' }, { label: '단계 2' }, { label: '단계 3' }, { label: '단계 4' }],
  },
};
