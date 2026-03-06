import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '../components/Button/IconButton';

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <polyline points='20,6 9,17 4,12' />
  </svg>
);

const TrashIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <polyline points='3,6 5,6 21,6' />
    <path d='m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2' />
    <line x1='10' y1='11' x2='10' y2='17' />
    <line x1='14' y1='11' x2='14' y2='17' />
  </svg>
);

const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
  </svg>
);

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <line x1='12' y1='5' x2='12' y2='19' />
    <line x1='5' y1='12' x2='19' y2='12' />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
    <line x1='18' y1='6' x2='6' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </svg>
);

const variants = ['primary', 'secondary', 'brand', 'positive', 'negative'] as const;
const iconMap = { primary: CheckIcon, secondary: PlusIcon, brand: HeartIcon, positive: CheckIcon, negative: TrashIcon };

const meta = {
  title: 'Components/Inputs/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '아이콘 전용 버튼 컴포넌트입니다. Solid와 Outline 두 가지 타입, 5가지 variant, 3가지 크기를 지원합니다.',
      },
    },
  },
} satisfies Meta<typeof IconButton>;

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
  render: (args) => <IconButton {...args} />,
  args: {
    type: 'solid',
    variant: 'primary',
    size: 'medium',
    icon: CheckIcon,
  },
  argTypes: {
    type: { control: 'select', options: ['solid', 'outline'] },
    variant: { control: 'select', options: [...variants] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Icon Button</h1>
        <p style={s.desc}>
          아이콘 전용 버튼 컴포넌트입니다.
          <br />
          Solid/Outline 타입, 5가지 variant, 3가지 크기를 지원합니다.
        </p>
      </div>

      {(['solid', 'outline'] as const).map((type) => (
        <React.Fragment key={type}>
          <p style={s.sectionTitle}>{type}</p>
          <div style={s.card}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              {variants.map((variant) => (
                <div key={variant} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <IconButton type={type} variant={variant} size='medium' icon={iconMap[variant]} />
                  <span style={s.label}>{variant}</span>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <IconButton type='solid' variant='primary' size={size} icon={CheckIcon} />
              <span style={s.label}>{size}</span>
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Special States</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <IconButton type='solid' variant='primary' size='medium' icon={CheckIcon} disabled />
            <span style={s.label}>disabled</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <IconButton type='solid' variant='primary' size='medium' icon={CheckIcon} loading />
            <span style={s.label}>loading</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {(['small', 'medium', 'large'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <IconButton type='solid' variant='primary' size={size} icon={CheckIcon} />
          <span style={s.label}>{size}</span>
        </div>
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  parameters: { layout: 'centered', controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {(['solid', 'outline'] as const).map((type) => (
        <div key={type} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={s.label}>{type}</span>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            {variants.map((variant) => (
              <IconButton key={variant} type={type} variant={variant} size='medium' icon={iconMap[variant]} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
