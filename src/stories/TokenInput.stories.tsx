import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { TokenInput } from '../components/TokenInput';

const meta: Meta<typeof TokenInput> = {
  title: 'Components/Inputs/TokenInput',
  component: TokenInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '토큰(칩) 형태로 여러 값을 입력할 수 있는 컴포넌트입니다. 3가지 크기와 single/multi 라인 모드를 지원합니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TokenInput>;

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
  render: (args) => {
    const [tokens, setTokens] = useState<string[]>(['React', 'TypeScript']);
    return (
      <div style={{ width: 400 }}>
        <TokenInput {...args} value={tokens} onChange={setTokens} />
      </div>
    );
  },
  args: {
    placeholder: '태그를 입력하고 Enter를 눌러주세요',
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    lineMode: { control: 'select', options: ['single', 'multi'] },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>TokenInput</h1>
        <p style={s.desc}>
          토큰(칩) 형태로 여러 값을 입력할 수 있는 컴포넌트입니다.
          <br />
          3가지 크기, disabled 상태, single/multi 라인 모드를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <SizesDemo />
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <StatesDemo />
      </div>

      <p style={s.sectionTitle}>Line Modes</p>
      <div style={s.card}>
        <LineModesDemo />
      </div>
    </div>
  ),
};

const SizesDemo = () => {
  const [small, setSmall] = useState<string[]>(['Tag1', 'Tag2']);
  const [medium, setMedium] = useState<string[]>(['Tag1', 'Tag2']);
  const [large, setLarge] = useState<string[]>(['Tag1', 'Tag2']);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {([
        { size: 'small' as const, value: small, onChange: setSmall },
        { size: 'medium' as const, value: medium, onChange: setMedium },
        { size: 'large' as const, value: large, onChange: setLarge },
      ]).map((item) => (
        <div key={item.size} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ ...s.label, width: 60 }}>{item.size}</span>
          <div style={{ width: 400 }}>
            <TokenInput size={item.size} value={item.value} onChange={item.onChange} />
          </div>
        </div>
      ))}
    </div>
  );
};

const StatesDemo = () => {
  const [tokens, setTokens] = useState<string[]>(['React', 'TypeScript']);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ ...s.label, width: 60 }}>default</span>
        <div style={{ width: 400 }}>
          <TokenInput value={tokens} onChange={setTokens} />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ ...s.label, width: 60 }}>disabled</span>
        <div style={{ width: 400 }}>
          <TokenInput value={['React', 'TypeScript', 'Disabled']} disabled />
        </div>
      </div>
    </div>
  );
};

const LineModesDemo = () => {
  const [single, setSingle] = useState<string[]>(['React', 'TypeScript', 'Styled-components', 'Storybook', 'Jest', 'ESLint', 'Prettier']);
  const [multi, setMulti] = useState<string[]>(['React', 'TypeScript', 'Styled-components', 'Storybook', 'Jest', 'ESLint', 'Prettier', 'Webpack', 'Babel', 'Redux']);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={s.label}>single (한 줄, 가로 스크롤)</span>
        <div style={{ width: 400 }}>
          <TokenInput lineMode='single' value={single} onChange={setSingle} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={s.label}>multi (최대 3줄, 세로 스크롤)</span>
        <div style={{ width: 400 }}>
          <TokenInput lineMode='multi' value={multi} onChange={setMulti} />
        </div>
      </div>
    </div>
  );
};

export const Sizes: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => <SizesDemo />,
};

export const LineModes: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => <LineModesDemo />,
};
