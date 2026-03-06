import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Switch, SwitchProps } from '../components/Switch';

const SwitchWithState = (args: SwitchProps) => {
  const [active, setActive] = useState(args.active || false);

  return (
    <div style={{ padding: '20px' }}>
      <Switch {...args} active={active} onChange={(newActive) => setActive(newActive)} />
    </div>
  );
};

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
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
    lang: {
      control: { type: 'select' },
      options: ['ko', 'en'],
    },
  },
  args: {
    size: 'medium',
    disabled: false,
    active: false,
    lang: 'ko',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SwitchWithState {...args} />,
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => <SwitchWithState {...args} />,
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => <SwitchWithState {...args} />,
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args) => <SwitchWithState {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <SwitchWithState {...args} />,
};

export const Active: Story = {
  args: {
    active: true,
  },
  render: (args) => <SwitchWithState {...args} />,
};

export const ActiveDisabled: Story = {
  args: {
    active: true,
    disabled: true,
  },
  render: (args) => <SwitchWithState {...args} />,
};

// 모든 크기 비교
export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'flex-start',
      }}
    >
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Small</h4>
        <SwitchWithState size='small' />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Medium</h4>
        <SwitchWithState size='medium' />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>Large</h4>
        <SwitchWithState size='large' />
      </div>
    </div>
  ),
};

// 모든 상태 비교
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          alignItems: 'center',
        }}
      >
        <div>
          <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            Default (Active=False, Disable=False)
          </h4>
          <SwitchWithState active={false} disabled={false} />
        </div>
        <div>
          <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            Active (Active=True, Disable=False)
          </h4>
          <SwitchWithState active={true} disabled={false} />
        </div>
        <div>
          <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            Disabled (Active=False, Disable=True)
          </h4>
          <SwitchWithState active={false} disabled={true} />
        </div>
        <div>
          <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
            Active + Disabled (Active=True, Disable=True)
          </h4>
          <SwitchWithState active={true} disabled={true} />
        </div>
      </div>
    </div>
  ),
};

// 커스텀 스타일 예제
export const CustomWidth: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>기본 크기</h4>
        <SwitchWithState />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: '600' }}>
          커스텀 스타일 (margin 추가)
        </h4>
        <SwitchWithState style={{ margin: '10px' }} />
      </div>
    </div>
  ),
};

// 사용 예제
export const UsageDemo: Story = {
  render: () => {
    const [switchStates, setSwitchStates] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
    });

    const handleSwitchChange = (key: string, value: boolean) => {
      setSwitchStates((prev) => ({
        ...prev,
        [key]: value,
      }));
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '20px',
        }}
      >
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>설정 예제</h3>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 0',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '4px',
              }}
            >
              알림
            </div>
            <div style={{ fontSize: '12px', color: '#666' }}>
              새로운 메시지와 업데이트를 받아보세요
            </div>
          </div>
          <Switch
            size='medium'
            active={switchStates.notifications}
            onChange={(active) => handleSwitchChange('notifications', active)}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 0',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '4px',
              }}
            >
              다크 모드
            </div>
            <div style={{ fontSize: '12px', color: '#666' }}>어두운 테마를 사용합니다</div>
          </div>
          <Switch
            size='medium'
            active={switchStates.darkMode}
            onChange={(active) => handleSwitchChange('darkMode', active)}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 0',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '4px',
              }}
            >
              자동 저장
            </div>
            <div style={{ fontSize: '12px', color: '#666' }}>변경사항을 자동으로 저장합니다</div>
          </div>
          <Switch
            size='medium'
            active={switchStates.autoSave}
            onChange={(active) => handleSwitchChange('autoSave', active)}
          />
        </div>
      </div>
    );
  },
};
