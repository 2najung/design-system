import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '../components';
import type { TextFieldProps } from '../components/TextField/types';

const TextFieldWithState = (props: TextFieldProps) => {
  const [value, setValue] = useState(props.value || '');

  return <TextField {...props} value={value} onChange={(e) => setValue(e.target.value)} />;
};

const meta: Meta<typeof TextField> = {
  title: 'Components/Inputs/TextField',
  component: TextField,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Label, Description을 포함한 완성형 텍스트 입력 컴포넌트입니다. Input 컴포넌트를 기반으로 합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const s = {
  page: {
    padding: '40px',
    maxWidth: 960,
    margin: '0 auto',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  } as React.CSSProperties,
  header: {
    marginBottom: 48,
  } as React.CSSProperties,
  title: {
    fontSize: 28,
    fontWeight: 700,
    color: '#171719',
    margin: '0 0 8px',
    letterSpacing: -0.5,
  } as React.CSSProperties,
  desc: {
    fontSize: 15,
    color: '#7b7e85',
    margin: 0,
    lineHeight: 1.5,
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: 13,
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
    color: '#8f9298',
    margin: '0 0 16px',
  } as React.CSSProperties,
  card: {
    border: '1px solid #e6e7e9',
    borderRadius: 12,
    padding: '24px',
    marginBottom: 16,
  } as React.CSSProperties,
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 24,
  } as React.CSSProperties,
  gridItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 8,
  } as React.CSSProperties,
  label: {
    fontSize: 11,
    color: '#8f9298',
    fontFamily: "'SF Mono', monospace",
  } as React.CSSProperties,
};

// ─── Playground ──────────────────────────────────────────────
export const Playground: Story = {
  parameters: { layout: 'centered' },
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    placeholder: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해주세요.',
    size: 'medium',
    status: 'default',
    labelType: 'default',
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    status: { control: 'select', options: ['default', 'negative', 'positive'] },
    labelType: { control: 'select', options: ['default', 'required', 'optional'] },
    disabled: { control: 'boolean' },
    descriptionLeadingIcon: { control: 'boolean' },
    type: { control: 'select', options: ['text', 'password'] },
  },
};

// ─── Overview ────────────────────────────────────────────────
export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>TextField</h1>
        <p style={s.desc}>
          Label과 Description을 포함한 완성형 텍스트 필드입니다.
          <br />
          Label 타입(default, required, optional), 상태(default, negative, positive), 사이즈를 조합하여 사용합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Label Types</p>
      <div style={s.card}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {([
            { labelType: 'default' as const, label: 'default' },
            { labelType: 'required' as const, label: 'required' },
            { labelType: 'optional' as const, label: 'optional' },
          ]).map(({ labelType, label }) => (
            <div key={label} style={s.gridItem}>
              <span style={s.label}>{label}</span>
              <TextFieldWithState
                label='주제'
                labelType={labelType}
                placeholder='텍스트를 입력해 주세요.'
                description='안내 텍스트를 입력해주세요.'
              />
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Status</p>
      <div style={s.card}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          <div style={s.gridItem}>
            <span style={s.label}>default</span>
            <TextFieldWithState
              label='주제'
              placeholder='텍스트를 입력해 주세요.'
              description='안내 텍스트를 입력해주세요.'
            />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>negative</span>
            <TextFieldWithState
              label='주제'
              labelType='required'
              value='올바르지 않은 입력'
              description='올바르지 않은 입력입니다.'
              descriptionLeadingIcon
              status='negative'
            />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>positive</span>
            <TextFieldWithState
              label='주제'
              labelType='required'
              value='올바른 입력'
              description='입력이 완료되었습니다.'
              descriptionLeadingIcon
              status='positive'
            />
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} style={s.gridItem}>
              <span style={s.label}>{size}</span>
              <TextFieldWithState
                label='주제'
                size={size}
                placeholder='텍스트를 입력해 주세요.'
                description='안내 텍스트를 입력해주세요.'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// ─── Anatomy ─────────────────────────────────────────────────
export const Anatomy: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Anatomy</h1>
        <p style={s.desc}>
          TextField는 Label, Input, Description 3개 영역으로 구성됩니다.
          <br />
          각 영역은 선택적으로 사용할 수 있습니다.
        </p>
      </div>

      <div style={s.card}>
        <div style={s.grid}>
          <div style={s.gridItem}>
            <span style={s.label}>full (label + input + description)</span>
            <TextFieldWithState
              label='주제'
              labelType='required'
              placeholder='텍스트를 입력해 주세요.'
              description='안내 텍스트를 입력해주세요.'
            />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>without label</span>
            <TextFieldWithState
              placeholder='텍스트를 입력해 주세요.'
              description='안내 텍스트를 입력해주세요.'
            />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>without description</span>
            <TextFieldWithState
              label='주제'
              placeholder='텍스트를 입력해 주세요.'
            />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>input only</span>
            <TextFieldWithState
              placeholder='텍스트를 입력해 주세요.'
            />
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Disabled</p>
      <div style={s.card}>
        <div style={s.grid}>
          <div style={s.gridItem}>
            <span style={s.label}>disabled (empty)</span>
            <TextField
              label='주제'
              placeholder='텍스트를 입력해 주세요.'
              description='안내 텍스트를 입력해주세요.'
              disabled
            />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>disabled (with value)</span>
            <TextField
              label='주제'
              value='비활성화된 입력'
              description='안내 텍스트를 입력해주세요.'
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// ─── Password ────────────────────────────────────────────────
export const PasswordField: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Password Field</h1>
        <p style={s.desc}>
          type="password"로 설정하면 비밀번호 입력 모드가 됩니다.
          <br />
          값이 입력되면 visibility 토글 아이콘이 나타납니다.
        </p>
      </div>

      <div style={s.card}>
        <div style={s.grid}>
          <div style={s.gridItem}>
            <span style={s.label}>empty</span>
            <TextFieldWithState
              label='비밀번호'
              type='password'
              placeholder='비밀번호를 입력해 주세요.'
              description='8자 이상 영문, 숫자, 특수문자를 포함해 주세요.'
            />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>with value</span>
            <TextFieldWithState
              label='비밀번호'
              type='password'
              value='mypassword123'
              placeholder='비밀번호를 입력해 주세요.'
              description='비밀번호가 입력되었습니다.'
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// ─── Form Example ────────────────────────────────────────────
export const FormExample: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Form Example</h1>
        <p style={s.desc}>실제 폼에서 사용되는 TextField 조합 예시입니다.</p>
      </div>

      <div style={{ ...s.card, maxWidth: 480 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <TextFieldWithState
            label='이름'
            labelType='required'
            placeholder='이름을 입력해 주세요.'
          />
          <TextFieldWithState
            label='이메일'
            labelType='required'
            placeholder='example@email.com'
            value='invalid-email'
            status='negative'
            description='올바른 이메일 형식을 입력해 주세요.'
            descriptionLeadingIcon
          />
          <TextFieldWithState
            label='닉네임'
            labelType='required'
            value='designsystem'
            status='positive'
            description='사용 가능한 닉네임입니다.'
            descriptionLeadingIcon
          />
          <TextFieldWithState
            label='비밀번호'
            labelType='required'
            type='password'
            placeholder='비밀번호를 입력해 주세요.'
            description='8자 이상 영문, 숫자, 특수문자를 포함해 주세요.'
          />
          <TextFieldWithState
            label='메모'
            labelType='optional'
            placeholder='추가 메모를 입력해 주세요.'
          />
        </div>
      </div>
    </div>
  ),
};
