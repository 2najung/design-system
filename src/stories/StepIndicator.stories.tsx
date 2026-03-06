import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { StepIndicator } from '../components/StepIndicator';

const meta = {
  title: 'Components/Navigation/StepIndicator',
  component: StepIndicator,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '프로세스의 단계를 시각적으로 보여주는 컴포넌트입니다. 3~5개 스텝과 라벨 표시를 지원합니다.',
      },
    },
  },
} satisfies Meta<typeof StepIndicator>;

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
  render: (args) => (
    <div style={{ width: 600 }}>
      <StepIndicator {...args} />
    </div>
  ),
  args: {
    count: 4,
    currentStep: 2,
    showLabel: true,
    steps: [{ label: '정보 입력' }, { label: '본인 인증' }, { label: '약관 동의' }, { label: '가입 완료' }],
  },
  argTypes: {
    count: { control: 'select', options: [3, 4, 5] },
    currentStep: { control: { type: 'number', min: 1, max: 5 } },
    showLabel: { control: 'boolean' },
    orientation: { control: 'select', options: ['vertical', 'horizontal'] },
  },
};

export const Overview: Story = {
  args: { count: 4, currentStep: 2 },
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Step Indicator</h1>
        <p style={s.desc}>
          프로세스의 단계를 시각적으로 보여주는 컴포넌트입니다.
          <br />
          3~5개 스텝, 라벨 표시, horizontal 라벨 방향을 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Step Count</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {([
            { count: 3 as const, step: 2, steps: [{ label: '단계 1' }, { label: '단계 2' }, { label: '단계 3' }] },
            { count: 4 as const, step: 2, steps: [{ label: '단계 1' }, { label: '단계 2' }, { label: '단계 3' }, { label: '단계 4' }] },
            { count: 5 as const, step: 3, steps: [{ label: '단계 1' }, { label: '단계 2' }, { label: '단계 3' }, { label: '단계 4' }, { label: '단계 5' }] },
          ]).map(({ count, step, steps }) => (
            <div key={count} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={s.label}>{count} steps</span>
              <StepIndicator count={count} currentStep={step} showLabel steps={steps} />
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Progress States</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {[1, 2, 3, 4].map((step) => (
            <div key={step} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={s.label}>step {step} / 4</span>
              <StepIndicator
                count={4}
                currentStep={step}
                showLabel
                steps={[{ label: '정보 입력' }, { label: '본인 인증' }, { label: '약관 동의' }, { label: '가입 완료' }]}
              />
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Without Labels</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>3 steps</span>
            <StepIndicator count={3} currentStep={2} showLabel={false} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>4 steps</span>
            <StepIndicator count={4} currentStep={2} showLabel={false} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={s.label}>5 steps</span>
            <StepIndicator count={5} currentStep={3} showLabel={false} />
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Horizontal Labels</p>
      <div style={s.card}>
        <StepIndicator
          count={4}
          currentStep={2}
          showLabel
          orientation='horizontal'
          steps={[{ label: '정보 입력' }, { label: '본인 인증' }, { label: '약관 동의' }, { label: '가입 완료' }]}
        />
      </div>
    </div>
  ),
};
