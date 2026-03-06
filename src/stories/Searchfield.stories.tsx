import React, { useState } from 'react';

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
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '검색 입력 필드 컴포넌트입니다. 3가지 크기와 disabled 상태를 지원합니다.',
      },
    },
  },
  args: {
    size: 'medium',
    disabled: false,
    focused: false,
    placeholder: '검색어를 입력해 주세요',
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
  render: (args) => <SearchfieldWithState {...args} />,
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
        <h1 style={s.title}>Searchfield</h1>
        <p style={s.desc}>
          검색 입력 필드 컴포넌트입니다.
          <br />
          3가지 크기와 disabled 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ ...s.label, width: 60 }}>{size}</span>
              <SearchfieldWithState size={size} placeholder='검색어를 입력해 주세요' />
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ ...s.label, width: 60 }}>default</span>
            <SearchfieldWithState placeholder='검색어를 입력해 주세요' />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ ...s.label, width: 60 }}>disabled</span>
            <div style={{ width: 360 }}>
              <Searchfield disabled placeholder='검색어를 입력해 주세요' />
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
          <SearchfieldWithState size={size} placeholder='검색어를 입력해 주세요' />
        </div>
      ))}
    </div>
  ),
};
