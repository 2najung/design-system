import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { MultiSelect } from '../components/MultiSelect';

const meta = {
  title: 'Components/Inputs/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'MultiSelect는 드롭다운에서 여러 옵션을 선택하고 Chip 형태로 표시하는 컴포넌트입니다. 검색 필터링과 single/multi 라인 모드를 지원합니다.',
      },
    },
  },
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'gatsby', label: 'Gatsby' },
  { value: 'remix', label: 'Remix' },
  { value: 'solid', label: 'Solid' },
  { value: 'qwik', label: 'Qwik' },
  { value: 'astro', label: 'Astro' },
  { value: 'preact', label: 'Preact' },
  { value: 'lit', label: 'Lit' },
  { value: 'alpine', label: 'Alpine.js' },
  { value: 'ember', label: 'Ember' },
];

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
    const [value, setValue] = useState<string[]>([]);
    return (
      <div style={{ width: 400 }}>
        <MultiSelect {...args} value={value} onChange={setValue} options={sampleOptions} />
      </div>
    );
  },
  args: {
    size: 'medium',
    disabled: false,
    placeholder: '프레임워크를 선택해주세요',
  },
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
        <h1 style={s.title}>MultiSelect</h1>
        <p style={s.desc}>
          드롭다운에서 여러 옵션을 선택하고 Chip으로 표시합니다.
          <br />
          3가지 크기, 검색 필터링, single/multi 라인 모드를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <SizesDemo />
      </div>

      <p style={s.sectionTitle}>Line Modes</p>
      <div style={s.card}>
        <LineModesDemo />
      </div>
    </div>
  ),
};

const SizesDemo = () => {
  const [small, setSmall] = useState<string[]>(['react']);
  const [medium, setMedium] = useState<string[]>(['react', 'vue']);
  const [large, setLarge] = useState<string[]>(['react', 'vue', 'angular']);

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
            <MultiSelect size={item.size} value={item.value} onChange={item.onChange} options={sampleOptions} placeholder='선택해주세요' />
          </div>
        </div>
      ))}
    </div>
  );
};

const LineModesDemo = () => {
  const [singleLine, setSingleLine] = useState<string[]>(['react', 'vue', 'angular', 'svelte', 'nextjs', 'nuxt', 'gatsby', 'remix']);
  const [multiLine, setMultiLine] = useState<string[]>(['react', 'vue', 'angular', 'svelte', 'nextjs', 'nuxt', 'gatsby', 'remix', 'solid', 'qwik']);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={s.label}>single (한 줄, 가로 스크롤)</span>
        <div style={{ width: 400 }}>
          <MultiSelect size='medium' value={singleLine} onChange={setSingleLine} options={sampleOptions} lineMode='single' />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={s.label}>multi (최대 3줄, 세로 스크롤)</span>
        <div style={{ width: 400 }}>
          <MultiSelect size='medium' value={multiLine} onChange={setMultiLine} options={sampleOptions} lineMode='multi' />
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
