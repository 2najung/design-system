import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { ComboBox } from '../components';
import type { ComboBoxOption, ComboBoxProps } from '../components/ComboBox/types';

const ComboBoxWithState = (props: ComboBoxProps) => {
  const [value, setValue] = useState(props.value || '');
  return (
    <div style={{ width: '300px' }}>
      <ComboBox {...props} value={value} onChange={(newValue) => setValue(newValue)} />
    </div>
  );
};

const sampleOptions: ComboBoxOption[] = [
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

const meta: Meta<typeof ComboBox> = {
  title: 'Components/Inputs/ComboBox',
  component: ComboBox,
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
    placeholder: '입력하거나 선택해주세요.',
    options: sampleOptions,
    lang: 'ko',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  render: (args) => <ComboBoxWithState {...args} />,
};

// Size 변형들
export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => <ComboBoxWithState {...args} />,
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => <ComboBoxWithState {...args} />,
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args) => <ComboBoxWithState {...args} />,
};

// 상태별 스토리
export const Disabled: Story = {
  args: {
    disabled: true,
    value: '비활성화된 상태',
  },
  render: (args) => <ComboBoxWithState {...args} />,
};

export const Active: Story = {
  args: {
    active: true,
  },
  render: (args) => <ComboBoxWithState {...args} />,
};

export const Focused: Story = {
  args: {
    focused: true,
  },
  render: (args) => <ComboBoxWithState {...args} />,
};

export const WithInitialValue: Story = {
  args: {
    value: '초기값이 있는 상태',
  },
  render: (args) => <ComboBoxWithState {...args} />,
};

// 언어별 스토리
export const Korean: Story = {
  args: {
    lang: 'ko',
    placeholder: '입력하거나 옵션을 선택해주세요.',
  },
  render: (args) => <ComboBoxWithState {...args} />,
};

export const English: Story = {
  args: {
    lang: 'en',
    placeholder: 'Type or select an option.',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
      { value: 'option5', label: 'Option 5' },
    ],
  },
  render: (args) => <ComboBoxWithState {...args} />,
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
        <ComboBoxWithState size='small' options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Medium</h4>
        <ComboBoxWithState size='medium' options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <ComboBoxWithState size='large' options={sampleOptions} />
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
        <ComboBoxWithState options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Active</h4>
        <ComboBox active options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Focused</h4>
        <ComboBox focused options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Disabled</h4>
        <ComboBox disabled value='비활성화 상태' options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          With Initial Value
        </h4>
        <ComboBox value='초기값' options={sampleOptions} />
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
        <ComboBoxWithState style={{ width: '150px' }} options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          style prop으로 width 설정 (넓게)
        </h4>
        <ComboBoxWithState style={{ width: '400px' }} options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          부모 컨테이너로 감싸기
        </h4>
        <div style={{ width: '250px' }}>
          <ComboBoxWithState options={sampleOptions} />
        </div>
      </div>
    </div>
  ),
};

// 사용법 데모 스토리
export const UsageDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>검색 기능</h4>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          입력하면 일치하는 옵션들만 필터링됩니다. "옵션 2"를 입력해보세요.
        </p>
        <ComboBoxWithState
          placeholder='검색어를 입력해보세요'
          options={sampleOptions}
          style={{ width: '300px' }}
        />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>직접 입력하기</h4>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          옵션에 없는 새로운 값도 입력할 수 있습니다.
        </p>
        <ComboBoxWithState
          placeholder='새로운 값을 입력해보세요'
          options={sampleOptions}
          style={{ width: '300px' }}
        />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          드롭다운에서 선택하기
        </h4>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          화살표 아이콘을 클릭하면 옵션을 선택할 수 있습니다.
        </p>
        <ComboBoxWithState
          placeholder='아이콘을 클릭해보세요'
          options={sampleOptions}
          style={{ width: '300px' }}
        />
      </div>
    </div>
  ),
};

// 검색 기능 데모 스토리
export const SearchDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          과일 검색해보기
        </h4>
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          "사과", "바나나", "딸기" 등을 입력해보세요.
        </p>
        <ComboBoxWithState
          placeholder='과일 이름을 검색해보세요'
          options={[
            { value: 'apple', label: '사과' },
            { value: 'banana', label: '바나나' },
            { value: 'grape', label: '포도' },
            { value: 'strawberry', label: '딸기' },
            { value: 'orange', label: '오렌지' },
            { value: 'peach', label: '복숭아' },
            { value: 'watermelon', label: '수박' },
            { value: 'melon', label: '멜론' },
          ]}
          style={{ width: '300px' }}
        />
      </div>
    </div>
  ),
};
