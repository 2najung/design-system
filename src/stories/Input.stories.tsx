import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../components';
import type { InputProps } from '../components/Input/types';

// 상태를 관리하는 래퍼 컴포넌트 (복잡한 테스트용)
const InputWithState = (props: InputProps) => {
  const [value, setValue] = useState(props.value || '');
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    setIsActive(true);
    props.onFocus?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setIsActive(false);
    props.onBlur?.(event);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <Input
      {...props}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      active={isActive}
      focused={isFocused}
    />
  );
};

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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
    disabled: {
      control: { type: 'boolean' },
    },
    active: {
      control: { type: 'boolean' },
    },
    focused: {
      control: { type: 'boolean' },
    },
    value: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리들 - 상태 관리로 완벽한 테스트
export const Default: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    placeholder: '텍스트를 입력해 주세요.',
    size: 'medium',
    status: 'default',
  },
};

export const Small: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    placeholder: '텍스트를 입력해 주세요.',
    size: 'small',
  },
};

export const Large: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    placeholder: '텍스트를 입력해 주세요.',
    size: 'large',
  },
};

export const WithValue: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: '값',
    size: 'medium',
  },
};

export const Disabled: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    placeholder: '텍스트를 입력해 주세요.',
    disabled: true,
  },
};

export const Active: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: '값',
    active: true,
  },
};

export const Focused: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: '값',
    focused: true,
  },
};

export const Negative: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: '값',
    status: 'negative',
  },
};

export const Positive: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: '값',
    status: 'positive',
  },
};

// Color 스펙 테스트용 스토리들 - 상태 관리 필요
export const DefaultDefault: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Default: !Active, !Focus',
    status: 'default',
    active: false,
    focused: false,
  },
};

export const DefaultActive: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Default: Active, !Focus',
    status: 'default',
    active: true,
    focused: false,
  },
};

export const DefaultFocused: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Default: !Active, Focus',
    status: 'default',
    active: false,
    focused: true,
  },
};

export const DefaultActiveFocused: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Default: Active, Focus',
    status: 'default',
    active: true,
    focused: true,
  },
};

export const DefaultDisabled: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Default: Disabled',
    status: 'default',
    disabled: true,
  },
};

export const NegativeDefault: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Negative: !Active, !Focus',
    status: 'negative',
    active: false,
    focused: false,
  },
};

export const NegativeFocused: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Negative: !Active, Focus',
    status: 'negative',
    active: false,
    focused: true,
  },
};

export const NegativeActiveFocused: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Negative: Active, Focus',
    status: 'negative',
    active: true,
    focused: true,
  },
};

export const PositiveActive: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Positive: Active, !Focus',
    status: 'positive',
    active: true,
    focused: false,
  },
};

export const PositiveActiveFocused: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Positive: Active, Focus',
    status: 'positive',
    active: true,
    focused: true,
  },
};

export const PositiveDisabled: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Positive: Disabled',
    status: 'positive',
    disabled: true,
  },
};

// Cancel 아이콘 테스트용 스토리 - 상태 관리 필요
export const DefaultWithCancel: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Default 상태에서 Active + Focus',
    active: true,
    focused: true,
    status: 'default',
  },
};

export const DefaultWithoutCancel: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Default 상태에서 Active + !Focus',
    active: true,
    focused: false,
    status: 'default',
  },
};

export const NegativeWithCancel: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Negative 상태에서 Active + Focus',
    status: 'negative',
    active: true,
    focused: true,
  },
};

export const NegativeWithError: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Negative 상태에서 !Active',
    status: 'negative',
    active: false,
    focused: false,
  },
};

export const PositiveWithCheck: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Positive 상태에서 Active + Focus',
    status: 'positive',
    active: true,
    focused: true,
  },
};

export const PositiveWithCheckNoFocus: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Positive 상태에서 !Active',
    status: 'positive',
    active: false,
    focused: false,
  },
};

export const PositiveWithCancel: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    value: 'Positive 상태에서 Active + Focus (Cancel)',
    status: 'positive',
    active: true,
    focused: true,
  },
};
