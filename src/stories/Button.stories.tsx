import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { OutlineButton } from '../components/Button/OutlineButton';
import { SolidButton } from '../components/Button/SolidButton';
import { TextButton } from '../components/Button/TextButton';
import type { ButtonProps } from '../components/Button/types';

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M12 5v14M5 12h14' />
  </svg>
);

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M5 12h14M12 5l7 7-7 7' />
  </svg>
);

const meta = {
  title: 'Components/Inputs/Button',
  component: SolidButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Solid, Outline, Text 3가지 스타일과 6가지 variant, 3가지 size를 조합하여 사용할 수 있는 버튼 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof SolidButton>;

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
  cardLabel: {
    fontSize: 13,
    fontWeight: 500,
    color: '#525459',
    marginBottom: 16,
  } as React.CSSProperties,
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,
  tag: {
    display: 'inline-block',
    padding: '2px 8px',
    borderRadius: 4,
    fontSize: 11,
    fontWeight: 500,
    fontFamily: "'SF Mono', monospace",
    background: '#f0f0f2',
    color: '#525459',
    marginLeft: 8,
  } as React.CSSProperties,
};

// ─── Playground ──────────────────────────────────────────────
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    state: 'default',
    disabled: false,
    loading: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'brand', 'positive', 'negative'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    state: {
      control: 'select',
      options: ['default', 'hovered', 'pressed', 'focused'],
    },
  },
  render: (args) => <SolidButton {...args}>Button</SolidButton>,
};

// ─── Overview ────────────────────────────────────────────────
export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Button</h1>
        <p style={s.desc}>
          3가지 스타일 (Solid, Outline, Text)과 다양한 variant를 조합하여 사용합니다.
          <br />
          마우스 hover, press, focus 인터랙션이 자동으로 적용됩니다.
        </p>
      </div>

      {/* Solid Buttons */}
      <p style={s.sectionTitle}>Solid</p>
      <div style={s.card}>
        <div style={s.cardLabel}>Variants</div>
        <div style={s.row}>
          <SolidButton variant='primary'>Primary</SolidButton>
          <SolidButton variant='secondary'>Secondary</SolidButton>
          <SolidButton variant='tertiary'>Tertiary</SolidButton>
          <SolidButton variant='brand'>Brand</SolidButton>
          <SolidButton variant='positive'>Positive</SolidButton>
          <SolidButton variant='negative'>Negative</SolidButton>
        </div>
      </div>

      {/* Outline Buttons */}
      <p style={s.sectionTitle}>Outline</p>
      <div style={s.card}>
        <div style={s.cardLabel}>Variants</div>
        <div style={s.row}>
          <OutlineButton variant='secondary'>Secondary</OutlineButton>
          <OutlineButton variant='brand'>Brand</OutlineButton>
          <OutlineButton variant='positive'>Positive</OutlineButton>
          <OutlineButton variant='negative'>Negative</OutlineButton>
        </div>
      </div>

      {/* Text Buttons */}
      <p style={s.sectionTitle}>Text</p>
      <div style={s.card}>
        <div style={s.cardLabel}>Variants</div>
        <div style={s.row}>
          <TextButton variant='secondary'>Secondary</TextButton>
          <TextButton variant='brand'>Brand</TextButton>
          <TextButton variant='positive'>Positive</TextButton>
          <TextButton variant='negative'>Negative</TextButton>
        </div>
      </div>
    </div>
  ),
};

// ─── Sizes ───────────────────────────────────────────────────
export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Sizes</h1>
        <p style={s.desc}>Small (32px), Medium (40px), Large (48px) 3가지 높이를 지원합니다.</p>
      </div>

      {(['solid', 'outline', 'text'] as const).map((type) => {
        const Comp = type === 'solid' ? SolidButton : type === 'outline' ? OutlineButton : TextButton;
        return (
          <div key={type}>
            <p style={s.sectionTitle}>{type}</p>
            <div style={s.card}>
              <div style={{ ...s.row, alignItems: 'flex-end' }}>
                {(['small', 'medium', 'large'] as const).map((size) => (
                  <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <Comp size={size} variant={type === 'solid' ? 'primary' : 'secondary'}>
                      Button
                    </Comp>
                    <span style={{ fontSize: 11, color: '#8f9298', fontFamily: "'SF Mono', monospace" }}>
                      {size === 'small' ? '32px' : size === 'medium' ? '40px' : '48px'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ),
};

// ─── States ──────────────────────────────────────────────────
export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>States</h1>
        <p style={s.desc}>
          Default, Hovered, Pressed, Focused, Disabled, Loading 상태를 지원합니다.
          <br />
          state prop으로 직접 지정하거나, 마우스/키보드 인터랙션으로 자동 전환됩니다.
        </p>
      </div>

      {([
        { label: 'Solid Primary', variant: 'primary' as const, Comp: SolidButton },
        { label: 'Outline Secondary', variant: 'secondary' as const, Comp: OutlineButton },
        { label: 'Text Secondary', variant: 'secondary' as const, Comp: TextButton },
      ]).map(({ label, variant, Comp }) => (
        <div key={label}>
          <p style={s.sectionTitle}>{label}</p>
          <div style={s.card}>
            <div style={s.row}>
              {(['default', 'hovered', 'pressed', 'focused'] as const).map((state) => (
                <div key={state} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <Comp variant={variant} state={state}>
                    Button
                  </Comp>
                  <span style={{ fontSize: 11, color: '#8f9298', fontFamily: "'SF Mono', monospace" }}>{state}</span>
                </div>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <Comp variant={variant} disabled>
                  Button
                </Comp>
                <span style={{ fontSize: 11, color: '#8f9298', fontFamily: "'SF Mono', monospace" }}>disabled</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <Comp variant={variant} loading>
                  Button
                </Comp>
                <span style={{ fontSize: 11, color: '#8f9298', fontFamily: "'SF Mono', monospace" }}>loading</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

// ─── With Icons ──────────────────────────────────────────────
export const WithIcons: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>With Icons</h1>
        <p style={s.desc}>leadingIcon, trailingIcon prop으로 아이콘을 추가할 수 있습니다.</p>
      </div>

      <p style={s.sectionTitle}>Leading Icon</p>
      <div style={s.card}>
        <div style={s.row}>
          <SolidButton variant='primary' leadingIcon={PlusIcon}>Create</SolidButton>
          <OutlineButton variant='secondary' leadingIcon={PlusIcon}>Create</OutlineButton>
          <TextButton variant='secondary' leadingIcon={PlusIcon}>Create</TextButton>
        </div>
      </div>

      <p style={s.sectionTitle}>Trailing Icon</p>
      <div style={s.card}>
        <div style={s.row}>
          <SolidButton variant='primary' trailingIcon={ArrowRightIcon}>Next</SolidButton>
          <OutlineButton variant='secondary' trailingIcon={ArrowRightIcon}>Next</OutlineButton>
          <TextButton variant='secondary' trailingIcon={ArrowRightIcon}>Next</TextButton>
        </div>
      </div>

      <p style={s.sectionTitle}>Both Icons</p>
      <div style={s.card}>
        <div style={s.row}>
          <SolidButton variant='primary' leadingIcon={PlusIcon} trailingIcon={ArrowRightIcon}>
            Create & Continue
          </SolidButton>
          <OutlineButton variant='secondary' leadingIcon={PlusIcon} trailingIcon={ArrowRightIcon}>
            Create & Continue
          </OutlineButton>
        </div>
      </div>

      <p style={s.sectionTitle}>Sizes with Icons</p>
      <div style={s.card}>
        <div style={{ ...s.row, alignItems: 'flex-end' }}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <SolidButton variant='primary' size={size} leadingIcon={PlusIcon}>
                Create
              </SolidButton>
              <span style={{ fontSize: 11, color: '#8f9298', fontFamily: "'SF Mono', monospace" }}>{size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// ─── Radius ──────────────────────────────────────────────────
export const Radius: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Radius</h1>
        <p style={s.desc}>Small (rounded-2), Medium (rounded-3), Large (rounded-full) 3가지 border-radius를 지원합니다.</p>
      </div>

      <div style={s.card}>
        <div style={s.row}>
          {(['small', 'medium', 'large'] as const).map((r) => (
            <div key={r} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <SolidButton variant='primary' radius={r}>Button</SolidButton>
              <span style={{ fontSize: 11, color: '#8f9298', fontFamily: "'SF Mono', monospace" }}>{r}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={s.card}>
        <div style={s.row}>
          {(['small', 'medium', 'large'] as const).map((r) => (
            <div key={r} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <OutlineButton variant='secondary' radius={r}>Button</OutlineButton>
              <span style={{ fontSize: 11, color: '#8f9298', fontFamily: "'SF Mono', monospace" }}>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// ─── Composition Examples ────────────────────────────────────
export const Examples: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Composition Examples</h1>
        <p style={s.desc}>실제 사용 사례를 기반으로 한 버튼 조합 예시입니다.</p>
      </div>

      <p style={s.sectionTitle}>Dialog Actions</p>
      <div style={s.card}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <TextButton variant='secondary'>취소</TextButton>
          <SolidButton variant='primary'>확인</SolidButton>
        </div>
      </div>

      <p style={s.sectionTitle}>Destructive Action</p>
      <div style={s.card}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <OutlineButton variant='secondary'>취소</OutlineButton>
          <SolidButton variant='negative'>삭제</SolidButton>
        </div>
      </div>

      <p style={s.sectionTitle}>Form Actions</p>
      <div style={s.card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <TextButton variant='secondary'>이전</TextButton>
          <div style={{ display: 'flex', gap: 8 }}>
            <OutlineButton variant='secondary'>임시저장</OutlineButton>
            <SolidButton variant='brand' leadingIcon={ArrowRightIcon}>
              다음 단계
            </SolidButton>
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Button Group</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 8 }}>
          <SolidButton variant='primary' size='large' leadingIcon={PlusIcon}>
            새 프로젝트
          </SolidButton>
          <OutlineButton variant='secondary' size='large'>
            불러오기
          </OutlineButton>
        </div>
      </div>

      <p style={s.sectionTitle}>Full Width</p>
      <div style={s.card}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 360 }}>
          <SolidButton variant='brand' size='large'>
            시작하기
          </SolidButton>
          <OutlineButton variant='secondary' size='large'>
            둘러보기
          </OutlineButton>
        </div>
      </div>
    </div>
  ),
};
