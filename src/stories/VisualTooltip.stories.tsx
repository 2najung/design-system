import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { SolidButton } from '../components/Button/SolidButton';
import { OutlineButton } from '../components/Button/OutlineButton';
import { VisualTooltip } from '../components/Tooltip/VisualTooltip';

const PlaceholderContent = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f2',
      borderRadius: 4,
    }}
  >
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <path
        d='M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z'
        stroke='#8f9298' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
      />
      <path
        d='M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z'
        stroke='#8f9298' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
      />
      <path d='M21 15L16 10L5 21' stroke='#8f9298' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  </div>
);

const meta = {
  title: 'Components/Feedback/VisualTooltip',
  component: VisualTooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '텍스트와 이미지를 함께 제공하여 복잡한 정보를 직관적으로 이해할 수 있도록 돕는 Visual Tooltip 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof VisualTooltip>;

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
  label: {
    fontSize: 11,
    color: '#8f9298',
    fontFamily: "'SF Mono', monospace",
  } as React.CSSProperties,
};

// ─── Playground ──────────────────────────────────────────────
export const Playground: Story = {
  parameters: { layout: 'centered' },
  render: (args) => (
    <div style={{ padding: 200 }}>
      <VisualTooltip {...args}>
        <SolidButton>Hover me</SolidButton>
      </VisualTooltip>
    </div>
  ),
  args: {
    text: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해 주세요.',
    content: <PlaceholderContent />,
    placement: 'bottom-center',
  },
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top-left', 'top-center', 'top-right',
        'bottom-left', 'bottom-center', 'bottom-right',
        'left-top', 'left-center', 'left-bottom',
        'right-top', 'right-center', 'right-bottom',
      ],
    },
    text: { control: 'text' },
    description: { control: 'text' },
    contentWidth: { control: 'number' },
    contentHeight: { control: 'number' },
    offset: { control: 'number' },
  },
};

// ─── Overview ────────────────────────────────────────────────
export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Visual Tooltip</h1>
        <p style={s.desc}>
          텍스트와 이미지/콘텐츠를 함께 표시하는 확장형 툴팁입니다.
          <br />
          12가지 placement를 지원하며, 콘텐츠 영역의 크기를 커스텀할 수 있습니다.
          <br />
          버튼에 마우스를 올려 확인하세요.
        </p>
      </div>

      <p style={s.sectionTitle}>Content Types</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 24, padding: '80px 0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <VisualTooltip
              text='이미지 포함'
              description='이미지와 텍스트가 함께 표시됩니다.'
              content={<PlaceholderContent />}
              placement='bottom-center'
            >
              <SolidButton>With Content</SolidButton>
            </VisualTooltip>
            <span style={s.label}>with content</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <VisualTooltip
              text='텍스트만'
              description='콘텐츠 영역 없이 텍스트만 표시됩니다.'
              placement='bottom-center'
            >
              <OutlineButton variant='secondary'>Text Only</OutlineButton>
            </VisualTooltip>
            <span style={s.label}>text only</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <VisualTooltip
              text='항상 보임'
              description='defaultVisible로 항상 표시됩니다.'
              content={<PlaceholderContent />}
              placement='bottom-center'
              defaultVisible
            >
              <SolidButton variant='brand'>Always Visible</SolidButton>
            </VisualTooltip>
            <span style={s.label}>defaultVisible</span>
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Placements — Top / Bottom</p>
      <div style={s.card}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 80,
          padding: '100px 0',
        }}>
          <div style={{ display: 'flex', gap: 24 }}>
            {(['top-left', 'top-center', 'top-right'] as const).map((p) => (
              <VisualTooltip key={p} text={p} description='placement 확인' content={<PlaceholderContent />} placement={p}>
                <SolidButton variant='secondary' size='small'>{p}</SolidButton>
              </VisualTooltip>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {(['bottom-left', 'bottom-center', 'bottom-right'] as const).map((p) => (
              <VisualTooltip key={p} text={p} description='placement 확인' content={<PlaceholderContent />} placement={p}>
                <SolidButton variant='secondary' size='small'>{p}</SolidButton>
              </VisualTooltip>
            ))}
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Placements — Left / Right</p>
      <div style={s.card}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 200,
          padding: '80px 0',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {(['left-top', 'left-center', 'left-bottom'] as const).map((p) => (
              <VisualTooltip key={p} text={p} description='placement 확인' content={<PlaceholderContent />} placement={p}>
                <SolidButton variant='secondary' size='small'>{p}</SolidButton>
              </VisualTooltip>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {(['right-top', 'right-center', 'right-bottom'] as const).map((p) => (
              <VisualTooltip key={p} text={p} description='placement 확인' content={<PlaceholderContent />} placement={p}>
                <SolidButton variant='secondary' size='small'>{p}</SolidButton>
              </VisualTooltip>
            ))}
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Custom Size</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 24, padding: '80px 0' }}>
          <VisualTooltip
            text='기본 사이즈'
            description='240 x 126'
            content={<PlaceholderContent />}
            placement='bottom-center'
          >
            <OutlineButton variant='secondary'>Default</OutlineButton>
          </VisualTooltip>
          <VisualTooltip
            text='커스텀 사이즈'
            description='284 x 180'
            content={<PlaceholderContent />}
            contentWidth={284}
            contentHeight={180}
            placement='bottom-center'
          >
            <OutlineButton variant='secondary'>284 x 180</OutlineButton>
          </VisualTooltip>
        </div>
      </div>
    </div>
  ),
};
