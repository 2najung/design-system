import type { Meta, StoryObj } from '@storybook/react';

import opacity from '../tokens/opacity';

// Opacity Swatch 컴포넌트
const OpacitySwatch = ({ name, value }: { name: string; value: string }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <div
        style={{
          width: '120px',
          height: '120px',
          backgroundColor: '#6366f1',
          opacity: value,
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
        }}
      />
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>{name}</div>
        <div style={{ fontSize: '12px', color: '#6b7280' }}>
          {value} ({parseInt(value) * 100}%)
        </div>
      </div>
    </div>
  );
};

const meta = {
  title: 'Foundation/Opacity',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Opacity 시스템은 화면 내 요소의 시각적 명도와 투명도를 조정함으로써, 정보의 중요도와 상태 변화를 정확하게 전달하기 위해 설계되었습니다.\n\n' +
          '투명도는 사용자 시선의 집중도를 조절하고, 활성·비활성 상태나 배경과의 대비를 통해 시각적 위계와 가독성을 균형 있게 유지합니다. ' +
          'Opacity는 일정한 비율 단위를 기반으로 정의되며, 각 단계는 콘텐츠 우선순위 따라 일관된 시각적 기준을 제공합니다.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// 전체 Opacity 스케일
export const AllOpacities: Story = {
  render: () => (
    <div style={{ padding: '24px', backgroundColor: '#f9fafb' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Opacity Tokens</h2>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '32px' }}>
        일반적으로 Opacity 토큰은 예시입니다.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '24px',
        }}
      >
        {Object.entries(opacity).map(([key, value]) => (
          <OpacitySwatch key={key} name={key} value={value} />
        ))}
      </div>
    </div>
  ),
};

// 사용 예시
export const UsageExample: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Usage Example</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div
          style={{
            padding: '16px',
            backgroundColor: '#f3f4f6',
            borderRadius: '8px',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: '#6366f1',
              color: 'white',
              borderRadius: '6px',
              opacity: opacity['opacity-10'],
            }}
          >
            opacity-10 (100% - 완전 불투명)
          </div>
        </div>

        <div
          style={{
            padding: '16px',
            backgroundColor: '#f3f4f6',
            borderRadius: '8px',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: '#6366f1',
              color: 'white',
              borderRadius: '6px',
              opacity: opacity['opacity-8'],
            }}
          >
            opacity-8 (80%)
          </div>
        </div>

        <div
          style={{
            padding: '16px',
            backgroundColor: '#f3f4f6',
            borderRadius: '8px',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: '#6366f1',
              color: 'white',
              borderRadius: '6px',
              opacity: opacity['opacity-5'],
            }}
          >
            opacity-5 (50%)
          </div>
        </div>

        <div
          style={{
            padding: '16px',
            backgroundColor: '#f3f4f6',
            borderRadius: '8px',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: '#6366f1',
              color: 'white',
              borderRadius: '6px',
              opacity: opacity['opacity-3'],
            }}
          >
            opacity-3 (30%)
          </div>
        </div>

        <div
          style={{
            padding: '16px',
            backgroundColor: '#f3f4f6',
            borderRadius: '8px',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: '#6366f1',
              color: 'white',
              borderRadius: '6px',
              opacity: opacity['opacity-0'],
            }}
          >
            opacity-0 (0% - 완전 투명)
          </div>
        </div>
      </div>
    </div>
  ),
};
