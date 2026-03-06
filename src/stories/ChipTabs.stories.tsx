import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '../components/Chip';
import { ChipTabs } from '../components/ChipTabs';
import type { ChipTabsProps } from '../components/ChipTabs/types';

const meta = {
  title: 'Components/Navigation/ChipTabs',
  component: ChipTabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Chip Tabs는 여러 개의 칩 아이템과 연결된 콘텐츠 영역으로 구성된 컴포넌트입니다. 사용자는 칩 아이템을 선택하여 해당하는 콘텐츠로 빠르게 전환할 수 있으며, 화면 내 다양한 정보나 기능을 간결하고 직관적으로 구분하고 탐색할 수 있습니다. 기존 Chip 컴포넌트를 조합하여 구성되며, 항상 Solid 타입으로 고정됩니다.',
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
      description: '초기 선택될 칩의 인덱스입니다.',
    },
    value: {
      control: { type: 'number', min: 0, max: 7 },
      description: '현재 선택된 칩의 인덱스입니다 (controlled).',
    },
    onChange: {
      action: 'changed',
      description: '칩이 변경될 때 호출되는 콜백 함수입니다.',
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
      description: 'Chip 컴포넌트들입니다.',
    },
  },
} satisfies Meta<typeof ChipTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ defaultValue, style, className }) => (
    <ChipTabs defaultValue={defaultValue} style={style} className={className}>
      <Chip>텍스트</Chip>
      <Chip>텍스트</Chip>
      <Chip>텍스트</Chip>
    </ChipTabs>
  ),
  args: {
    defaultValue: 0,
    style: {},
    className: '',
  },
};

export const TwoItems: Story = {
  render: ({ defaultValue }) => (
    <ChipTabs defaultValue={defaultValue}>
      <Chip>홈</Chip>
      <Chip>설정</Chip>
    </ChipTabs>
  ),
  args: {
    defaultValue: 0,
  },
};

export const ManyItems: Story = {
  render: ({ defaultValue }) => (
    <ChipTabs defaultValue={defaultValue}>
      <Chip>전체</Chip>
      <Chip>진행중</Chip>
      <Chip>완료</Chip>
      <Chip>보류</Chip>
      <Chip>취소</Chip>
      <Chip>대기</Chip>
      <Chip>검토</Chip>
      <Chip>승인</Chip>
    </ChipTabs>
  ),
  args: {
    defaultValue: 0,
  },
  parameters: {
    docs: {
      description: {
        story: '최대 8개까지의 칩을 지원합니다. 이 예제는 정확히 8개의 칩을 보여줍니다.',
      },
    },
  },
};

export const TooManyItems: Story = {
  render: ({ defaultValue }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ChipTabs defaultValue={defaultValue}>
        <Chip>전체</Chip>
        <Chip>진행중</Chip>
        <Chip>완료</Chip>
        <Chip>보류</Chip>
        <Chip>취소</Chip>
        <Chip>대기</Chip>
        <Chip>검토</Chip>
        <Chip>승인</Chip>
        <Chip>추가1</Chip>
        <Chip>추가2</Chip>
      </ChipTabs>
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
        ✅ 10개의 칩을 제공했지만 스펙에 따라 8개만 표시됩니다. 콘솔에서 경고 메시지를 확인하세요.
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
          '10개의 칩을 제공했지만 스펙에 따라 8개만 표시됩니다. 개발자 콘솔에서 경고 메시지를 확인하세요.',
      },
    },
  },
};

export const WithDisabled: Story = {
  render: ({ defaultValue }) => (
    <ChipTabs defaultValue={defaultValue}>
      <Chip>활성</Chip>
      <Chip disabled>비활성</Chip>
      <Chip>활성</Chip>
    </ChipTabs>
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
        <ChipTabs value={value} onChange={setValue}>
          <Chip>첫 번째</Chip>
          <Chip>두 번째</Chip>
          <Chip>세 번째</Chip>
        </ChipTabs>
        <div
          style={{
            padding: '16px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
          }}
        >
          현재 선택된 칩: {value + 1}
        </div>
      </div>
    );
  },
};

export const Interactive: Story = {
  render: ({ defaultValue, style, className }) => (
    <ChipTabs defaultValue={defaultValue} style={style} className={className}>
      <Chip>홈</Chip>
      <Chip>설정</Chip>
      <Chip>프로필</Chip>
    </ChipTabs>
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
        story: 'Controls 패널에서 스타일과 클래스를 실시간으로 조정할 수 있습니다.',
      },
    },
  },
};

export const WrappedInModal: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div
        style={{
          width: '400px',
          padding: '20px',
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <h4 style={{ marginTop: 0 }}>모달 내부 (좁은 컨테이너)</h4>
        <ChipTabs defaultValue={0}>
          <Chip>전체</Chip>
          <Chip>진행중</Chip>
          <Chip>완료</Chip>
          <Chip>보류</Chip>
          <Chip>취소</Chip>
          <Chip>대기</Chip>
          <Chip>대기</Chip>
          <Chip>대기</Chip>
          <Chip>대기</Chip>
          <Chip>대기</Chip>
        </ChipTabs>
      </div>
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
        ✅ 칩이 컨테이너를 넘어가면 자동으로 다음 줄로 wrap됩니다.
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          '모달이나 좁은 컨테이너 안에서 ChipTabs가 공간을 넘어가면 자동으로 여러 줄로 wrap됩니다.',
      },
    },
  },
};

export const Styling: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h4>기본 스타일링</h4>
        <ChipTabs
          style={{
            backgroundColor: '#f8f9fa',
            padding: '8px',
            borderRadius: '8px',
          }}
        >
          <Chip>홈</Chip>
          <Chip>설정</Chip>
          <Chip>프로필</Chip>
        </ChipTabs>
      </div>

      <div>
        <h4>마진과 패딩</h4>
        <ChipTabs style={{ margin: '20px 0', padding: '0 20px' }}>
          <Chip>칩 1</Chip>
          <Chip>칩 2</Chip>
          <Chip>칩 3</Chip>
        </ChipTabs>
      </div>

      <div>
        <h4>반응형 스타일링</h4>
        <ChipTabs
          style={{
            width: '100%',
            maxWidth: '600px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            justifyContent: 'center',
          }}
        >
          <Chip>전체</Chip>
          <Chip>진행중</Chip>
          <Chip>완료</Chip>
          <Chip>보류</Chip>
        </ChipTabs>
      </div>

      <div>
        <h4>클래스 기반 스타일링</h4>
        <style>{`
          .custom-chiptabs {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            padding: 8px;
          }
        `}</style>
        <ChipTabs className='custom-chiptabs'>
          <Chip>프리미엄</Chip>
          <Chip>기본</Chip>
          <Chip>무료</Chip>
        </ChipTabs>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
