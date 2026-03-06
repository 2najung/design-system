import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Selector } from '../components';
import type { SelectorOption, SelectorProps } from '../components/Selector/types';

const SelectorWithState = (props: SelectorProps) => {
  const [value, setValue] = useState(props.value || '');
  return (
    <div style={{ width: 240 }}>
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
];

const meta: Meta<typeof Selector> = {
  title: 'Components/Inputs/Selector',
  component: Selector,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '드롭다운 셀렉터 컴포넌트입니다. 3가지 크기와 다양한 상태를 지원합니다.',
      },
    },
  },
  args: {
    size: 'medium',
    disabled: false,
    placeholder: '선택해주세요.',
    options: sampleOptions,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const s = {
  page: { padding: '40px', maxWidth: 960, margin: '0 auto', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" } as React.CSSProperties,
  header: { marginBottom: 48 } as React.CSSProperties,
  title: { fontSize: 28, fontWeight: 700, color: '#171719', margin: '0 0 8px', letterSpacing: -0.5 } as React.CSSProperties,
  desc: { fontSize: 15, color: '#7b7e85', margin: 0, lineHeight: 1.5 } as React.CSSProperties,
  sectionTitle: { fontSize: 13, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#8f9298', margin: '0 0 16px' } as React.CSSProperties,
  card: { border: '1px solid #e6e7e9', borderRadius: 12, padding: '24px', marginBottom: 16 } as React.CSSProperties,
  label: { fontSize: 11, color: '#8f9298', fontFamily: "'SF Mono', monospace" } as React.CSSProperties,
};

export const Playground: Story = {
  parameters: { layout: 'centered' },
  render: (args) => <SelectorWithState {...args} />,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Selector</h1>
        <p style={s.desc}>
          드롭다운 셀렉터 컴포넌트입니다.
          <br />
          3가지 크기와 다양한 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ ...s.label, width: 60 }}>{size}</span>
              <SelectorWithState size={size} options={sampleOptions} />
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ ...s.label, width: 80 }}>default</span>
            <SelectorWithState options={sampleOptions} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ ...s.label, width: 80 }}>with value</span>
            <div style={{ width: 240 }}>
              <Selector value='option2' options={sampleOptions} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ ...s.label, width: 80 }}>disabled</span>
            <div style={{ width: 240 }}>
              <Selector disabled options={sampleOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {(['small', 'medium', 'large'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ ...s.label, width: 60 }}>{size}</span>
          <SelectorWithState size={size} options={sampleOptions} />
        </div>
      ))}
    </div>
  ),
};

export const States: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 240 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={s.label}>default</span>
        <SelectorWithState options={sampleOptions} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={s.label}>with value</span>
        <Selector value='option3' options={sampleOptions} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={s.label}>disabled</span>
        <Selector disabled options={sampleOptions} />
      </div>
    </div>
  ),
};
