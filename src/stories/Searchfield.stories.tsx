import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Searchfield } from '../components';

const SearchfieldWithState = (props: any) => {
  const [value, setValue] = useState(props.value || '');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ width: 360 }}>
      <Searchfield
        {...props}
        value={value}
        focused={isFocused}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
          props.onChange?.(e);
        }}
        onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
      />
    </div>
  );
};

const meta: Meta<typeof Searchfield> = {
  title: 'Components/Inputs/Searchfield',
  component: Searchfield,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: { type: 'boolean' } },
    focused: { control: { type: 'boolean' } },
    value: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    lang: { control: { type: 'select' }, options: ['ko', 'en'] },
  },
  args: {
    size: 'medium',
    disabled: false,
    focused: false,
    placeholder: '값',
    lang: 'ko',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SearchfieldWithState {...args} />,
};

export const Small: Story = {
  args: { size: 'small' },
  render: (args) => <SearchfieldWithState {...args} />,
};

export const Medium: Story = {
  args: { size: 'medium' },
  render: (args) => <SearchfieldWithState {...args} />,
};

export const Large: Story = {
  args: { size: 'large' },
  render: (args) => <SearchfieldWithState {...args} />,
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => <SearchfieldWithState {...args} />,
};
