import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Selector } from '../components';
import type { SelectorOption, SelectorProps } from '../components/Selector/types';

const SelectorWithState = (props: SelectorProps) => {
  const [value, setValue] = useState(props.value || '');
  return (
    <div style={{ width: '200px' }}>
      <Selector {...props} value={value} onChange={(newValue) => setValue(newValue)} />
    </div>
  );
};

const sampleOptions: SelectorOption[] = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
  { value: 'option4', label: '옵션 4' },
  { value: 'option5', label: '옵션 5' },
  { value: 'option6', label: '옵션 6' },
  { value: 'option7', label: '옵션 7' },
  { value: 'option8', label: '옵션 8' },
  { value: 'option9', label: '옵션 9' },
  { value: 'option10', label: '옵션 10' },
];

const meta: Meta<typeof Selector> = {
  title: 'Components/Selector',
  component: Selector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    active: {
      control: { type: 'boolean' },
    },
    focused: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    lang: {
      control: { type: 'select' },
      options: ['ko', 'en'],
    },
  },
  args: {
    size: 'medium',
    disabled: false,
    active: false,
    focused: false,
    placeholder: '선택해주세요.',
    options: sampleOptions,
    lang: 'ko',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  render: (args) => <SelectorWithState {...args} />,
};

// Size 변형들
export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => <SelectorWithState {...args} />,
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => <SelectorWithState {...args} />,
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args) => <SelectorWithState {...args} />,
};

// 상태별 스토리
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <SelectorWithState {...args} />,
};

export const Active: Story = {
  args: {
    active: true,
  },
  render: (args) => <SelectorWithState {...args} />,
};

export const Focused: Story = {
  args: {
    focused: true,
  },
  render: (args) => <SelectorWithState {...args} />,
};

export const WithSelectedValue: Story = {
  args: {
    value: 'option2',
  },
  render: (args) => <SelectorWithState {...args} />,
};

// 언어별 스토리
export const Korean: Story = {
  args: {
    lang: 'ko',
    placeholder: '옵션을 선택해주세요.',
  },
  render: (args) => <SelectorWithState {...args} />,
};

export const English: Story = {
  args: {
    lang: 'en',
    placeholder: 'Please select an option.',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
      { value: 'option5', label: 'Option 5' },
    ],
  },
  render: (args) => <SelectorWithState {...args} />,
};

// 다양한 크기를 한번에 보는 스토리
export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '300px',
      }}
    >
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Small</h4>
        <SelectorWithState size='small' options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Medium</h4>
        <SelectorWithState size='medium' options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <SelectorWithState size='large' options={sampleOptions} />
      </div>
    </div>
  ),
};

// 다양한 상태를 한번에 보는 스토리
export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '300px',
      }}
    >
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Default</h4>
        <SelectorWithState options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Active</h4>
        <Selector active options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Focused</h4>
        <Selector focused options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Disabled</h4>
        <Selector disabled options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          With Selected Value
        </h4>
        <Selector value='option3' options={sampleOptions} />
      </div>
    </div>
  ),
};

// Width 커스터마이징 예제 스토리
export const CustomWidth: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          style prop으로 width 설정
        </h4>
        <SelectorWithState style={{ width: '150px' }} options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          style prop으로 width 설정 (넓게)
        </h4>
        <SelectorWithState style={{ width: '400px' }} options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          부모 컨테이너로 감싸기
        </h4>
        <div style={{ width: '250px' }}>
          <SelectorWithState options={sampleOptions} />
        </div>
      </div>
    </div>
  ),
};
