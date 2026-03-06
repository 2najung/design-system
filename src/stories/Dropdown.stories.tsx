import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, Dropdown } from '../components';
import type { DropdownOption, DropdownProps } from '../components/Dropdown/types';
import {
  IconDocumentOutline16,
  IconHomeOutline16,
  IconSearchOutline16,
} from '../components/icons/generated';

const DropdownWithState = (props: DropdownProps) => {
  const [value, setValue] = useState<string | string[]>(
    props.type === 'multiselect'
      ? Array.isArray(props.value)
        ? props.value
        : []
      : props.value || ''
  );
  return (
    <div style={{ width: '300px' }}>
      <Dropdown {...props} value={value} onChange={(newValue) => setValue(newValue)} />
    </div>
  );
};

const sampleOptions: DropdownOption[] = [
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
  { value: 'option11', label: '옵션 11' },
  { value: 'option12', label: '옵션 12' },
  { value: 'option13', label: '옵션 13' },
  { value: 'option14', label: '옵션 14' },
  { value: 'option15', label: '옵션 15' },
  { value: 'option16', label: '옵션 16' },
  { value: 'option17', label: '옵션 17' },
  { value: 'option18', label: '옵션 18' },
  { value: 'option19', label: '옵션 19' },
  { value: 'option20', label: '옵션 20' },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['selector', 'combobox', 'multiselect'],
    },
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
    label: {
      control: { type: 'text' },
    },
    labelType: {
      control: { type: 'select' },
      options: ['default', 'required', 'optional'],
    },
    description: {
      control: { type: 'text' },
    },
    descriptionLeadingIcon: {
      control: { type: 'boolean' },
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'negative', 'positive'],
    },
    lang: {
      control: { type: 'select' },
      options: ['ko', 'en'],
    },
  },
  args: {
    type: 'selector',
    size: 'medium',
    disabled: false,
    active: false,
    focused: false,
    placeholder: '선택해주세요.',
    options: sampleOptions,
    label: '라벨',
    labelType: 'default',
    description: '설명 텍스트입니다.',
    descriptionLeadingIcon: false,
    status: 'default',
    lang: 'ko',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <DropdownWithState {...args} />,
};

// 타입별 스토리
export const SelectorType: Story = {
  args: {
    type: 'selector',
    placeholder: '선택해주세요.',
    label: '선택 전용 드롭다운',
    description: '옵션을 선택할 수 있습니다.',
  },
  render: (args) => <DropdownWithState {...args} />,
};

export const ComboBoxType: Story = {
  args: {
    type: 'combobox',
    placeholder: '입력하거나 선택해주세요.',
    label: '검색 가능한 드롭다운',
    description: '텍스트를 입력하거나 옵션을 선택할 수 있습니다.',
  },
  render: (args) => <DropdownWithState {...args} />,
};

export const MultiSelectType: Story = {
  args: {
    type: 'multiselect',
    placeholder: '여러 항목을 선택해주세요.',
    label: '다중 선택 드롭다운',
    description: '여러 옵션을 선택할 수 있습니다.',
    value: [],
  },
  render: (args) => <DropdownWithState {...args} />,
};

// 크기별 스토리
export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => <DropdownWithState {...args} />,
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => <DropdownWithState {...args} />,
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args) => <DropdownWithState {...args} />,
};

// 상태별 스토리
export const Disabled: Story = {
  args: {
    disabled: true,
    description: '비활성화된 상태입니다.',
  },
  render: (args) => <DropdownWithState {...args} />,
};

export const Required: Story = {
  args: {
    labelType: 'required',
    label: '필수 선택 항목',
  },
  render: (args) => <DropdownWithState {...args} />,
};

export const WithError: Story = {
  args: {
    status: 'negative',
    description: '선택이 필요합니다.',
    descriptionLeadingIcon: true,
  },
  render: (args) => <DropdownWithState {...args} />,
};

export const WithSuccess: Story = {
  args: {
    status: 'positive',
    value: 'option2',
    description: '선택이 완료되었습니다.',
    descriptionLeadingIcon: true,
  },
  render: (args) => <DropdownWithState {...args} />,
};

// 타입 비교 스토리
export const TypeComparison: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        width: '400px',
      }}
    >
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          Selector Type (선택만 가능)
        </h4>
        <DropdownWithState
          type='selector'
          label='과일 선택'
          placeholder='과일을 선택하세요'
          options={sampleOptions}
          description='드롭다운에서 옵션을 선택합니다.'
        />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          ComboBox Type (입력 + 선택 가능)
        </h4>
        <DropdownWithState
          type='combobox'
          label='과일 검색'
          placeholder='과일을 검색하거나 선택하세요'
          options={sampleOptions}
          description='직접 입력하거나 옵션을 선택할 수 있습니다.'
        />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          MultiSelect Type (다중 선택 가능)
        </h4>
        <DropdownWithState
          type='multiselect'
          label='과일 다중 선택'
          placeholder='여러 과일을 선택하세요'
          options={sampleOptions}
          description='여러 옵션을 선택할 수 있습니다.'
          value={[]}
        />
      </div>
    </div>
  ),
};

// 모든 크기 비교
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
        <DropdownWithState size='small' label='작은 크기' options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Medium</h4>
        <DropdownWithState size='medium' label='보통 크기' options={sampleOptions} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <DropdownWithState size='large' label='큰 크기' options={sampleOptions} />
      </div>
    </div>
  ),
};

// MultiSelect 크기별 비교 (Chip 사이즈 확인용)
export const MultiSelectSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        width: '400px',
      }}
    >
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          Small (Chip: x-small)
        </h4>
        <DropdownWithState
          type='multiselect'
          size='small'
          label='작은 크기'
          placeholder='옵션 선택'
          options={sampleOptions}
          value={['option1', 'option2']}
          description='Small size에는 x-small Chip이 사용됩니다.'
        />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          Medium (Chip: x-small)
        </h4>
        <DropdownWithState
          type='multiselect'
          size='medium'
          label='보통 크기'
          placeholder='옵션 선택'
          options={sampleOptions}
          value={['option1', 'option2', 'option3']}
          description='Medium size에는 x-small Chip이 사용됩니다.'
        />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          Large (Chip: small)
        </h4>
        <DropdownWithState
          type='multiselect'
          size='large'
          label='큰 크기'
          placeholder='옵션 선택'
          options={sampleOptions}
          value={['option1', 'option2', 'option3', 'option4']}
          description='Large size에는 small Chip이 사용됩니다.'
        />
      </div>
    </div>
  ),
};

// MultiSelect lineMode 비교
export const MultiSelectLineMode: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        width: '400px',
      }}
    >
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          lineMode = "single" (한 줄 고정, 가로 스크롤)
        </h4>
        <DropdownWithState
          type='multiselect'
          size='medium'
          label='Single Line'
          placeholder='옵션 선택'
          options={sampleOptions}
          value={[
            'option1',
            'option2',
            'option3',
            'option4',
            'option5',
            'option6',
            'option7',
            'option8',
          ]}
          lineMode='single'
          description='한 줄로만 표시되고, 가로 스크롤이 생깁니다.'
        />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          lineMode = "multi" (최대 3줄, 이후 세로 스크롤)
        </h4>
        <DropdownWithState
          type='multiselect'
          size='medium'
          label='Multi Line'
          placeholder='옵션 선택'
          options={sampleOptions}
          value={[
            'option1',
            'option2',
            'option3',
            'option4',
            'option5',
            'option6',
            'option7',
            'option8',
            'option9',
            'option10',
            'option11',
            'option12',
            'option13',
            'option14',
            'option15',
          ]}
          lineMode='multi'
          description='최대 3줄까지 늘어나고, 이후 세로 스크롤이 생깁니다.'
        />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          Large size with lineMode = "single"
        </h4>
        <DropdownWithState
          type='multiselect'
          size='large'
          label='Large Single Line'
          placeholder='옵션 선택'
          options={sampleOptions}
          value={['option1', 'option2', 'option3', 'option4', 'option5', 'option6', 'option7']}
          lineMode='single'
          description='Large size에서도 한 줄로만 표시됩니다.'
        />
      </div>
    </div>
  ),
};

// Options with description and leadingContent
export const WithLeadingContent: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);

    const memberOptions: DropdownOption[] = [
      {
        value: '1',
        label: 'John Doe',
        description: 'john@example.com',
        leadingContent: () => <Avatar type='initial' size='small' value='JD' />,
      },
      {
        value: '2',
        label: 'Jane Smith',
        description: 'jane@example.com',
        leadingContent: () => <Avatar type='initial' size='small' value='JS' />,
      },
      {
        value: '3',
        label: 'Bob Johnson',
        description: 'bob@example.com',
        leadingContent: () => <Avatar type='initial' size='small' value='BJ' />,
      },
      {
        value: '4',
        label: '홈',
        description: '메인 페이지로 이동',
        leadingContent: () => <IconHomeOutline16 />,
      },
      {
        value: '5',
        label: '검색',
        description: '검색 기능',
        leadingContent: () => <IconSearchOutline16 />,
      },
      {
        value: '6',
        label: '문서',
        description: '문서 관리',
        leadingContent: () => <IconDocumentOutline16 />,
      },
    ];

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          width: '400px',
        }}
      >
        <div>
          <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
            Selector with Avatar & Description
          </h4>
          <Dropdown
            type='selector'
            label='멤버 선택'
            placeholder='멤버를 선택하세요'
            options={memberOptions}
            description='Avatar와 설명이 포함된 옵션입니다'
          />
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
            ComboBox with Icon & Description
          </h4>
          <Dropdown
            type='combobox'
            label='메뉴 검색'
            placeholder='검색하거나 선택하세요'
            options={memberOptions}
            description='아이콘과 설명이 포함된 옵션입니다'
          />
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
            MultiSelect with Avatar & Icon
          </h4>
          <Dropdown
            type='multiselect'
            label='다중 선택'
            placeholder='여러 항목을 선택하세요'
            options={memberOptions}
            value={selected}
            onChange={(value) => setSelected(value as string[])}
            lineMode='multi'
            description='Avatar, 아이콘, 설명이 모두 포함된 옵션입니다'
          />
        </div>
      </div>
    );
  },
};
