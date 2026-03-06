import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { RadioButton, RadioButtonProps } from '../components/RadioButton';

const RadioButtonWithState = ({
  state = 'unchecked',
  disabled = false,
  onChange,
  ...props
}: RadioButtonProps) => {
  const [currentState, setCurrentState] = useState(state);

  const handleChange = (checked: boolean) => {
    setCurrentState(checked ? 'checked' : 'unchecked');
    onChange?.(checked);
  };

  return (
    <RadioButton state={currentState} disabled={disabled} onChange={handleChange} {...props} />
  );
};

const meta: Meta<typeof RadioButton> = {
  title: 'Components/Inputs/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Radio Button은 사용자가 여러 선택지 중 하나만 선택할 수 있도록 제한하는 기본 UI 컴포넌트로, 단일 선택이 필요한 상황에서 주로 사용됩니다.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['checked', 'unchecked'],
      description: '라디오 버튼의 상태를 선택합니다.',
    },
    disabled: {
      control: 'boolean',
      description: '라디오 버튼의 비활성화 여부를 설정합니다.',
    },
    onChange: {
      action: 'changed',
      description: '라디오 버튼 상태가 변경될 때 호출되는 콜백 함수입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  render: (args) => <RadioButtonWithState {...args} />,
  args: {
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
        <RadioButton state='checked' />
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
        <RadioButton state='unchecked' />
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
          <span style={{ fontSize: '12px', color: '#666' }}>Checked</span>
          <RadioButton state='checked' />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '12px', color: '#666' }}>Unchecked</span>
          <RadioButton state='unchecked' />
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
          <span style={{ fontSize: '12px', color: '#666' }}>Checked</span>
          <RadioButton state='checked' disabled={true} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '12px', color: '#666' }}>Unchecked</span>
          <RadioButton state='unchecked' disabled={true} />
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: (args) => <RadioButtonWithState {...args} />,
  args: {
    state: 'unchecked',
    disabled: false,
  },
  argTypes: {
    state: {
      control: false,
    },
  },
};
