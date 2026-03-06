import type { Meta, StoryObj } from '@storybook/react';

import color from '../tokens/color';
import { radius } from '../tokens/radius';
import { shadow } from '../tokens/shadow';
import { spacing } from '../tokens/spacing';

const meta = {
  title: 'Foundation/Layout',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '디자인 시스템의 레이아웃 관련 토큰들을 보여줍니다.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Radius 토큰
export const Radius: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>Radius Tokens</h2>
      <p style={{ color: '#6b7280', marginBottom: '24px' }}>
        일반적으로 사용되는 Radius 토큰 예시입니다.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {Object.entries(radius).map(([key, value]) => (
          <div key={key}>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}
            >
              <div style={{ fontWeight: 500 }}>{key}</div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>{value}</div>
            </div>
            <div
              style={{
                width: '200px',
                height: '100px',
                backgroundColor: color.deeppurple['100'],
                border: `2px solid ${color.deeppurple['200']}`,
                borderRadius: value,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: color.deeppurple['700'],
                fontWeight: 500,
              }}
            >
              {key}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Gap 토큰
export const Gap: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>Gap Tokens</h2>
      <p style={{ color: '#6b7280', marginBottom: '24px' }}>
        요소들 사이의 간격을 일관되게 유지하기 위한 gap 토큰입니다.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {Object.entries(spacing.gap).map(([key, value]) => (
          <div key={key}>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}
            >
              <div style={{ width: '100px', fontWeight: 500 }}>{key}</div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>{value}</div>
            </div>
            <div
              style={{
                backgroundColor: '#f9fafb',
                padding: '16px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            >
              <div style={{ display: 'flex', gap: value }}>
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: color.deeppurple['100'],
                      border: `1px solid ${color.deeppurple['200']}`,
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      color: color.deeppurple['700'],
                      fontWeight: 500,
                    }}
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Shadow 토큰
export const Shadow: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>Shadow Tokens</h2>
      <p style={{ color: '#6b7280', marginBottom: '32px' }}>
        요소의 깊이감과 계층 구조를 표현하기 위한 그림자 토큰입니다.
      </p>

      {/* Light Mode */}
      <div style={{ marginBottom: '48px' }}>
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 600,
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#ffffff',
              border: '2px solid #d1d5db',
              borderRadius: '50%',
            }}
          ></span>
          Light Mode
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '24px',
          }}
        >
          {Object.entries(shadow.light).map(([key, value]) => (
            <div key={key}>
              <div style={{ fontWeight: 500, marginBottom: '8px' }}>{key}</div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '12px' }}>
                {value}
              </div>
              <div
                style={{
                  height: '100px',
                  borderRadius: '12px',
                  backgroundColor: color.deeppurple['600'],
                  boxShadow: value,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 500,
                }}
              >
                {key}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dark Mode */}
      <div>
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 600,
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              width: '12px',
              height: '12px',
              backgroundColor: '#171719',
              borderRadius: '50%',
            }}
          ></span>
          Dark Mode
        </h3>
        <div
          style={{
            backgroundColor: '#171719',
            padding: '24px',
            borderRadius: '12px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '24px',
            }}
          >
            {Object.entries(shadow.dark).map(([key, value]) => (
              <div key={key}>
                <div style={{ fontWeight: 500, marginBottom: '8px', color: '#ffffff' }}>{key}</div>
                <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '12px' }}>
                  {value}
                </div>
                <div
                  style={{
                    height: '100px',
                    borderRadius: '12px',
                    backgroundColor: color.deeppurple['700'],
                    boxShadow: value,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontWeight: 500,
                  }}
                >
                  {key}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};
