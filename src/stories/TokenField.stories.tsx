import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { TokenField } from '../components/TokenField';

const meta: Meta<typeof TokenField> = {
  title: 'Components/Inputs/TokenField',
  component: TokenField,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '라벨과 설명을 포함한 토큰 입력 필드 컴포넌트입니다. 3가지 크기, 라벨 타입, single/multi 라인 모드를 지원합니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TokenField>;

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
    const [tokens, setTokens] = useState<string[]>([]);
    return (
      <div style={{ width: 400 }}>
        <TokenField {...args} value={tokens} onChange={setTokens} />
      </div>
    );
  },
  args: {
    label: '태그',
    placeholder: '태그를 입력하고 Enter를 눌러주세요',
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    labelType: { control: 'select', options: ['default', 'required', 'optional'] },
    disabled: { control: 'boolean' },
    lineMode: { control: 'select', options: ['single', 'multi'] },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>TokenField</h1>
        <p style={s.desc}>
          라벨과 설명을 포함한 토큰 입력 필드입니다.
          <br />
          3가지 크기, 라벨 타입(default/required/optional), single/multi 라인 모드를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Label Types</p>
      <div style={s.card}>
        <LabelTypesDemo />
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <SizesDemo />
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <StatesDemo />
      </div>
    </div>
  ),
};

const LabelTypesDemo = () => {
  const [def, setDef] = useState<string[]>(['React']);
  const [req, setReq] = useState<string[]>(['React']);
  const [opt, setOpt] = useState<string[]>([]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ width: 400 }}>
        <TokenField label='기본 라벨' labelType='default' value={def} onChange={setDef} placeholder='태그를 입력하세요' />
      </div>
      <div style={{ width: 400 }}>
        <TokenField label='필수 라벨' labelType='required' description='최소 1개 이상 입력해주세요.' value={req} onChange={setReq} placeholder='태그를 입력하세요' />
      </div>
      <div style={{ width: 400 }}>
        <TokenField label='선택 라벨' labelType='optional' description='선택적으로 입력할 수 있습니다.' value={opt} onChange={setOpt} placeholder='태그를 입력하세요' />
      </div>
    </div>
  );
};

const SizesDemo = () => {
  const [small, setSmall] = useState<string[]>(['Tag1', 'Tag2']);
  const [medium, setMedium] = useState<string[]>(['Tag1', 'Tag2']);
  const [large, setLarge] = useState<string[]>(['Tag1', 'Tag2']);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {([
        { size: 'small' as const, label: 'Small', value: small, onChange: setSmall },
        { size: 'medium' as const, label: 'Medium', value: medium, onChange: setMedium },
        { size: 'large' as const, label: 'Large', value: large, onChange: setLarge },
      ]).map((item) => (
        <div key={item.size} style={{ width: 400 }}>
          <TokenField label={item.label} size={item.size} value={item.value} onChange={item.onChange} placeholder='태그를 입력하세요' />
        </div>
      ))}
    </div>
  );
};

const StatesDemo = () => {
  const [tokens, setTokens] = useState<string[]>(['React', 'TypeScript']);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ width: 400 }}>
        <TokenField label='기본' value={tokens} onChange={setTokens} placeholder='태그를 입력하세요' />
      </div>
      <div style={{ width: 400 }}>
        <TokenField label='비활성화' disabled value={['React', 'TypeScript', 'Disabled']} description='비활성화된 상태입니다.' />
      </div>
    </div>
  );
};

export const LabelTypes: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => <LabelTypesDemo />,
};

export const Sizes: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => <SizesDemo />,
};

export const LineModes: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => {
    const [single, setSingle] = useState<string[]>(['React', 'TypeScript', 'Styled-components', 'Storybook', 'Jest', 'ESLint', 'Prettier']);
    const [multi, setMulti] = useState<string[]>(['React', 'TypeScript', 'Styled-components', 'Storybook', 'Jest', 'ESLint', 'Prettier', 'Webpack', 'Babel', 'Redux']);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ width: 400 }}>
          <TokenField label='단일 라인' lineMode='single' description='한 줄로 표시, 넘치면 가로 스크롤' value={single} onChange={setSingle} />
        </div>
        <div style={{ width: 400 }}>
          <TokenField label='멀티 라인' lineMode='multi' description='최대 3줄, 넘치면 세로 스크롤' value={multi} onChange={setMulti} />
        </div>
      </div>
    );
  },
};
