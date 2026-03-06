import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Tab, TabItem } from '../components/Tab';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '탭(Tab)은 여러 개의 탭 아이템(Tab Item)과 연결된 콘텐츠 영역으로 구성된 컴포넌트입니다. 사용자는 탭 아이템을 선택하여 해당하는 콘텐츠로 빠르게 전환할 수 있으며, 화면 내 다양한 정보나 기능을 효율적으로 구분하고 탐색할 수 있습니다.',
      },
      canvas: {
        sourceState: 'shown',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: { type: 'number', min: 0, max: 7 },
      description: '초기 선택될 탭의 인덱스입니다.',
    },
    value: {
      control: { type: 'number', min: 0, max: 7 },
      description: '현재 선택된 탭의 인덱스입니다 (controlled).',
    },
    onChange: {
      action: 'changed',
      description: '탭이 변경될 때 호출되는 콜백 함수입니다.',
    },
    style: {
      control: { type: 'object' },
      description: '인라인 스타일을 적용합니다.',
    },
    className: {
      control: { type: 'text' },
      description: 'CSS 클래스명을 적용합니다.',
    },
    children: {
      control: false,
      description: 'TabItem 컴포넌트들입니다.',
    },
    showDivider: {
      control: { type: 'boolean' },
      description: '하단 구분선 표시 여부를 설정합니다.',
    },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ defaultValue, style, className }) => (
    <Tab defaultValue={defaultValue} style={style} className={className}>
      <TabItem>탭 1</TabItem>
      <TabItem>탭 2</TabItem>
      <TabItem>탭 3</TabItem>
    </Tab>
  ),
  args: {
    defaultValue: 0,
    style: {},
    className: '',
  },
};

export const TwoItems: Story = {
  render: ({ defaultValue }) => (
    <Tab defaultValue={defaultValue}>
      <TabItem>홈</TabItem>
      <TabItem>설정</TabItem>
    </Tab>
  ),
  args: {
    defaultValue: 0,
  },
};

export const ManyItems: Story = {
  render: ({ defaultValue }) => (
    <Tab defaultValue={defaultValue}>
      <TabItem>전체</TabItem>
      <TabItem>진행중</TabItem>
      <TabItem>완료</TabItem>
      <TabItem>보류</TabItem>
      <TabItem>취소</TabItem>
      <TabItem>대기</TabItem>
      <TabItem>검토</TabItem>
      <TabItem>승인</TabItem>
    </Tab>
  ),
  args: {
    defaultValue: 0,
  },
  parameters: {
    docs: {
      description: {
        story: '최대 8개까지의 탭을 지원합니다. 이 예제는 정확히 8개의 탭을 보여줍니다.',
      },
    },
  },
};

export const TooManyItems: Story = {
  render: ({ defaultValue }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Tab defaultValue={defaultValue}>
        <TabItem>전체</TabItem>
        <TabItem>진행중</TabItem>
        <TabItem>완료</TabItem>
        <TabItem>보류</TabItem>
        <TabItem>취소</TabItem>
        <TabItem>대기</TabItem>
        <TabItem>검토</TabItem>
        <TabItem>승인</TabItem>
        <TabItem>추가1</TabItem>
        <TabItem>추가2</TabItem>
      </Tab>
      <div
        style={{
          padding: '12px',
          backgroundColor: '#e7f3ff',
          border: '1px solid #b3d9ff',
          borderRadius: '4px',
          fontSize: '14px',
          color: '#0066cc',
        }}
      >
        ✅ 10개의 탭을 제공했지만 스펙에 따라 8개만 표시됩니다. 콘솔에서 경고 메시지를 확인하세요.
      </div>
    </div>
  ),
  args: {
    defaultValue: 0,
  },
  parameters: {
    docs: {
      description: {
        story:
          '10개의 탭을 제공했지만 스펙에 따라 8개만 표시됩니다. 개발자 콘솔에서 경고 메시지를 확인하세요.',
      },
    },
  },
};

export const WithDisabled: Story = {
  render: ({ defaultValue }) => (
    <Tab defaultValue={defaultValue}>
      <TabItem>활성</TabItem>
      <TabItem disabled>비활성</TabItem>
      <TabItem>활성</TabItem>
    </Tab>
  ),
  args: {
    defaultValue: 0,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState(1);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Tab value={value} onChange={setValue}>
          <TabItem>첫 번째</TabItem>
          <TabItem>두 번째</TabItem>
          <TabItem>세 번째</TabItem>
        </Tab>
        <div
          style={{
            padding: '16px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
          }}
        >
          현재 선택된 탭: {value + 1}
        </div>
      </div>
    );
  },
};

export const LongText: Story = {
  render: ({ defaultValue }) => (
    <Tab defaultValue={defaultValue}>
      <TabItem>탭 1ㄹㄹㄹㄹㄹㄹㄹㄹㄹ</TabItem>
      <TabItem>탭 2</TabItem>
      <TabItem>탭 3</TabItem>
    </Tab>
  ),
  args: {
    defaultValue: 0,
  },
  parameters: {
    docs: {
      description: {
        story:
          '긴 텍스트를 가진 탭 아이템입니다. min-width: 120px로 최소 너비를 유지하되, 텍스트 길이에 따라 자동으로 확장됩니다.',
      },
    },
  },
};

export const FlexibleWidth: Story = {
  render: ({ defaultValue }) => (
    <Tab defaultValue={defaultValue}>
      <TabItem>짧음</TabItem>
      <TabItem>중간 길이의 탭 아이템</TabItem>
      <TabItem>매우 긴 텍스트를 가진 탭 아이템입니다</TabItem>
      <TabItem>탭</TabItem>
    </Tab>
  ),
  args: {
    defaultValue: 0,
  },
  parameters: {
    docs: {
      description: {
        story:
          '다양한 길이의 텍스트를 가진 탭들입니다. 각 탭은 최소 120px를 유지하며, 텍스트 길이에 따라 유동적으로 너비가 조정됩니다.',
      },
    },
  },
};

export const Interactive: Story = {
  render: ({ defaultValue, style, className }) => (
    <Tab defaultValue={defaultValue} style={style} className={className}>
      <TabItem>홈</TabItem>
      <TabItem>설정</TabItem>
      <TabItem>프로필</TabItem>
    </Tab>
  ),
  args: {
    defaultValue: 0,
    style: {
      backgroundColor: '#f8f9fa',
      padding: '8px',
      borderRadius: '8px',
    },
    className: '',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Controls 패널에서 각 탭의 텍스트, 스타일, 클래스를 실시간으로 조정할 수 있습니다. 긴 텍스트를 입력하여 유동적 너비를 테스트해보세요.',
      },
    },
  },
};

export const WithoutDivider: Story = {
  render: ({ defaultValue }) => (
    <Tab defaultValue={defaultValue} showDivider={false}>
      <TabItem>홈</TabItem>
      <TabItem>설정</TabItem>
      <TabItem>프로필</TabItem>
    </Tab>
  ),
  args: {
    defaultValue: 0,
  },
  parameters: {
    docs: {
      description: {
        story: '하단 구분선이 없는 탭입니다.',
      },
    },
  },
};

export const Styling: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h4>기본 스타일링</h4>
        <Tab
          style={{
            backgroundColor: '#f8f9fa',
            padding: '8px',
            borderRadius: '8px',
          }}
        >
          <TabItem>홈</TabItem>
          <TabItem>설정</TabItem>
          <TabItem>프로필</TabItem>
        </Tab>
      </div>

      <div>
        <h4>구분선 없음</h4>
        <Tab showDivider={false}>
          <TabItem>홈</TabItem>
          <TabItem>설정</TabItem>
          <TabItem>프로필</TabItem>
        </Tab>
      </div>

      <div>
        <h4>커스텀 색상</h4>
        <Tab style={{ borderBottom: '2px solid #007bff' }}>
          <TabItem style={{ color: '#007bff' }}>홈</TabItem>
          <TabItem style={{ color: '#007bff' }}>설정</TabItem>
          <TabItem style={{ color: '#007bff' }}>프로필</TabItem>
        </Tab>
      </div>

      <div>
        <h4>마진과 패딩</h4>
        <Tab style={{ margin: '20px 0', padding: '0 20px' }}>
          <TabItem>탭 1</TabItem>
          <TabItem>탭 2</TabItem>
          <TabItem>탭 3</TabItem>
        </Tab>
      </div>

      <div>
        <h4>반응형 스타일링</h4>
        <Tab
          style={{
            width: '100%',
            maxWidth: '600px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <TabItem>전체</TabItem>
          <TabItem>진행중</TabItem>
          <TabItem>완료</TabItem>
          <TabItem>보류</TabItem>
        </Tab>
      </div>

      <div>
        <h4>클래스 기반 스타일링</h4>
        <style>{`
          .custom-tab {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            padding: 8px;
            border-bottom: none;
          }
          .custom-tab-item {
            color: white !important;
            font-weight: 600;
          }
        `}</style>
        <Tab className='custom-tab'>
          <TabItem className='custom-tab-item'>프리미엄</TabItem>
          <TabItem className='custom-tab-item'>기본</TabItem>
          <TabItem className='custom-tab-item'>무료</TabItem>
        </Tab>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
