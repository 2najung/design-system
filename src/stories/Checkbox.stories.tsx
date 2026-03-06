import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxProps } from '../components/Checkbox';

const CheckboxWithState = ({
  variant = 'secondary',
  state = 'unchecked',
  disabled = false,
  onChange,
  ...props
}: CheckboxProps) => {
  const [currentState, setCurrentState] = useState(state);

  const handleChange = (checked: boolean) => {
    setCurrentState(checked ? 'checked' : 'unchecked');
    onChange?.(checked);
  };

  return (
    <Checkbox
      variant={variant}
      state={currentState}
      disabled={disabled}
      onChange={handleChange}
      {...props}
    />
  );
};

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Checkbox는 사용자의 선택을 나타내는 컴포넌트입니다. Primary와 Secondary 변형을 지원하며, checked와 unchecked 상태를 가집니다.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: '체크박스의 변형을 선택합니다.',
    },
    state: {
      control: 'select',
      options: ['checked', 'unchecked'],
      description: '체크박스의 상태를 선택합니다.',
    },
    disabled: {
      control: 'boolean',
      description: '체크박스의 비활성화 여부를 설정합니다.',
    },
    onChange: {
      action: 'changed',
      description: '체크박스 상태가 변경될 때 호출되는 콜백 함수입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'secondary',
    state: 'unchecked',
    disabled: false,
  },
};

export const AllStates: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>Checked</span>
        <Checkbox variant='secondary' state='checked' />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>Unchecked</span>
        <Checkbox variant='secondary' state='unchecked' />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>Primary</span>
        <Checkbox variant='primary' state='checked' />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '12px', color: '#666' }}>Secondary</span>
        <Checkbox variant='secondary' state='checked' />
      </div>
    </div>
  ),
};

export const AllCombinations: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '32px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '16px', fontWeight: '600' }}>Normal States</span>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '12px', color: '#666' }}>Primary - Checked</span>
          <Checkbox variant='primary' state='checked' />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '12px', color: '#666' }}>Primary - Unchecked</span>
          <Checkbox variant='primary' state='unchecked' />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '12px', color: '#666' }}>Secondary - Checked</span>
          <Checkbox variant='secondary' state='checked' />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '12px', color: '#666' }}>Secondary - Unchecked</span>
          <Checkbox variant='secondary' state='unchecked' />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '16px', fontWeight: '600' }}>Disabled States</span>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '12px', color: '#666' }}>Primary - Checked</span>
          <Checkbox variant='primary' state='checked' disabled={true} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '12px', color: '#666' }}>Primary - Unchecked</span>
          <Checkbox variant='primary' state='unchecked' disabled={true} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '12px', color: '#666' }}>Secondary - Checked</span>
          <Checkbox variant='secondary' state='checked' disabled={true} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '12px', color: '#666' }}>Secondary - Unchecked</span>
          <Checkbox variant='secondary' state='unchecked' disabled={true} />
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    variant: 'secondary',
    state: 'unchecked',
    disabled: false,
  },
  argTypes: {
    state: {
      control: false,
    },
  },
};
