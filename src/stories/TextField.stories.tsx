import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '../components';
import type { TextFieldProps } from '../components/TextField/types';

// 상태를 관리하는 래퍼 컴포넌트
const TextFieldWithState = (props: TextFieldProps) => {
  const [value, setValue] = useState(props.value || '');

  return <TextField {...props} value={value} onChange={(e) => setValue(e.target.value)} />;
};

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'negative', 'positive'],
    },
    labelType: {
      control: { type: 'select' },
      options: ['default', 'required', 'optional'],
    },

    disabled: {
      control: { type: 'boolean' },
    },
    descriptionLeadingIcon: {
      control: { type: 'boolean' },
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'password'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    placeholder: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해주세요.',
  },
};

export const Required: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    labelType: 'required',
    placeholder: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해주세요.',
  },
};

export const Optional: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    labelType: 'optional',
    placeholder: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해주세요.',
  },
};

export const WithError: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    labelType: 'required',
    placeholder: '텍스트를 입력해 주세요.',
    description: '올바르지 않은 입력입니다.',
    descriptionLeadingIcon: true,
    status: 'negative',
  },
};

export const WithSuccess: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    labelType: 'required',
    placeholder: '텍스트를 입력해 주세요.',
    description: '입력이 완료되었습니다.',
    descriptionLeadingIcon: true,
    status: 'positive',
  },
};

export const Small: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    size: 'small',
    placeholder: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해주세요.',
  },
};

export const Large: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    size: 'large',
    placeholder: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해주세요.',
  },
};

export const Disabled: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    placeholder: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해주세요.',
    disabled: true,
  },
};

export const WithoutLabel: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    placeholder: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해주세요.',
  },
};

export const WithoutDescription: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    placeholder: '텍스트를 입력해 주세요.',
  },
};

export const NegativeWithError: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    value: 'Negative 상태에서 !Active',
    description: 'Negative 상태에서 !Active일 때 Error 아이콘이 표시됩니다.',
    status: 'negative',
    active: false,
    focused: false,
  },
};

export const PositiveWithCheck: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    value: 'Positive 상태에서 Active + Focus',
    description: 'Positive 상태에서 Active + Focus일 때 Check 아이콘이 표시됩니다.',
    status: 'positive',
    active: true,
    focused: true,
  },
};

export const PositiveDisabled: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    value: 'Positive 상태에서 Disabled',
    description: 'Positive 상태에서 Disabled일 때도 Check 아이콘이 표시됩니다.',
    status: 'positive',
    disabled: true,
  },
};

export const Password: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력해 주세요.',
    description: '비밀번호를 입력하면 visibility 아이콘이 나타납니다.',
  },
};

export const PasswordWithValue: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: '비밀번호',
    type: 'password',
    value: 'mypassword123',
    placeholder: '비밀번호를 입력해 주세요.',
    description: '값이 있을 때 visibility 아이콘이 표시됩니다.',
  },
};

export const PasswordEmpty: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력해 주세요.',
    description: '값이 없을 때는 아이콘이 표시되지 않습니다.',
  },
};
