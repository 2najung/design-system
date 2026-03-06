import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '../components/TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/Inputs/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '여러 줄의 텍스트를 입력할 수 있는 텍스트 영역 컴포넌트입니다. 라벨, 설명, 글자 수 카운터를 지원합니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

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
  render: (args) => (
    <div style={{ width: 400 }}>
      <TextArea {...args} />
    </div>
  ),
  args: {
    label: 'Label',
    placeholder: '텍스트를 입력해 주세요.',
    showCharacterCounter: true,
    maxCount: 500,
  },
  argTypes: {
    labelType: { control: 'select', options: ['default', 'required', 'optional'] },
    status: { control: 'select', options: ['default', 'error', 'success'] },
    disabled: { control: 'boolean' },
    showCharacterCounter: { control: 'boolean' },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>TextArea</h1>
        <p style={s.desc}>
          여러 줄의 텍스트를 입력할 수 있는 컴포넌트입니다.
          <br />
          라벨, 설명, 글자 수 카운터, disabled 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>default</span>
            <div style={{ width: 400 }}>
              <TextArea placeholder='텍스트를 입력해 주세요.' showCharacterCounter maxCount={500} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>with value</span>
            <div style={{ width: 400 }}>
              <TextArea value='텍스트 입력' showCharacterCounter maxCount={500} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>disabled (empty)</span>
            <div style={{ width: 400 }}>
              <TextArea placeholder='텍스트를 입력해 주세요.' disabled showCharacterCounter maxCount={500} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>disabled (with value)</span>
            <div style={{ width: 400 }}>
              <TextArea value='텍스트 입력' disabled showCharacterCounter maxCount={500} />
            </div>
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Content Options</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>with label</span>
            <div style={{ width: 400 }}>
              <TextArea label='Label' placeholder='텍스트를 입력해 주세요.' />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>with label + description</span>
            <div style={{ width: 400 }}>
              <TextArea label='Label' description='Description text' placeholder='텍스트를 입력해 주세요.' />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>with character counter</span>
            <div style={{ width: 400 }}>
              <TextArea label='Label' placeholder='텍스트를 입력해 주세요.' showCharacterCounter maxCount={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 400 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={s.label}>default</span>
        <TextArea placeholder='텍스트를 입력해 주세요.' showCharacterCounter maxCount={500} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={s.label}>with value</span>
        <TextArea value='텍스트 입력' showCharacterCounter maxCount={500} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={s.label}>disabled</span>
        <TextArea placeholder='텍스트를 입력해 주세요.' disabled showCharacterCounter maxCount={500} />
      </div>
    </div>
  ),
};

export const ContentOptions: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 400 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={s.label}>label only</span>
        <TextArea label='Label' placeholder='텍스트를 입력해 주세요.' />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={s.label}>label + description</span>
        <TextArea label='Label' description='Description text' placeholder='텍스트를 입력해 주세요.' />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={s.label}>with counter</span>
        <TextArea label='Label' showCharacterCounter maxCount={500} placeholder='텍스트를 입력해 주세요.' />
      </div>
    </div>
  ),
};
