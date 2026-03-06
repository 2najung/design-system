import type { Meta, StoryObj } from '@storybook/react';

import { SolidButton } from '../components/Button/SolidButton';
import { VisualTooltip } from '../components/Tooltip/VisualTooltip';
import type { VisualTooltipProps } from '../components/Tooltip/types';

const meta = {
  title: 'Components/VisualTooltip',
  component: VisualTooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Visual Tooltip은 아이콘, 버튼, 텍스트 등 인터페이스 요소에 마우스를 오버하거나 포커스했을 때 텍스트와 이미지를 함께 제공하여, 복잡하거나 추상적인 정보를 보다 직관적으로 이해할 수 있도록 돕는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'left-top',
        'left-center',
        'left-bottom',
        'right-top',
        'right-center',
        'right-bottom',
      ],
      description: '툴팁이 표시되는 위치를 설정합니다.',
    },
    text: {
      control: 'text',
      description: '툴팁에 표시될 메인 텍스트입니다.',
    },
    description: {
      control: 'text',
      description: '툴팁에 표시될 설명 텍스트입니다.',
    },
    contentWidth: {
      control: 'number',
      description: '콘텐츠 영역의 너비(px)입니다.',
    },
    contentHeight: {
      control: 'number',
      description: '콘텐츠 영역의 높이(px)입니다.',
    },
    offset: {
      control: 'number',
      description: '트리거 요소와 툴팁 사이의 간격(px)입니다.',
    },
  },
} satisfies Meta<typeof VisualTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const PlaceholderContent = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E5E5E5',
    }}
  >
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z'
        stroke='#9E9E9E'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z'
        stroke='#9E9E9E'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21 15L16 10L5 21'
        stroke='#9E9E9E'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </div>
);

export const Default: Story = {
  render: (args) => (
    <VisualTooltip {...args}>
      <SolidButton>Hover me</SolidButton>
    </VisualTooltip>
  ),
  args: {
    text: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해 주세요.',
    content: <PlaceholderContent />,
    placement: 'bottom-center',
  },
};

export const WithImage: Story = {
  render: () => (
    <VisualTooltip
      text='이미지 툴팁'
      description='이미지가 포함된 툴팁입니다.'
      content={
        <img
          src='https://via.placeholder.com/240x126'
          alt='placeholder'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      }
      placement='bottom-center'
    >
      <SolidButton>이미지 툴팁</SolidButton>
    </VisualTooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: '이미지 콘텐츠가 포함된 Visual Tooltip입니다.',
      },
    },
  },
};

export const TextOnly: Story = {
  render: () => (
    <VisualTooltip
      text='텍스트만 있는 툴팁'
      description='콘텐츠 영역 없이 텍스트만 표시됩니다.'
      placement='bottom-center'
    >
      <SolidButton>텍스트만</SolidButton>
    </VisualTooltip>
  ),
  parameters: {
    docs: {
      description: {
        story: '콘텐츠 영역 없이 텍스트와 설명만 표시되는 Visual Tooltip입니다.',
      },
    },
  },
};

export const Placements: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '120px',
        padding: '200px',
      }}
    >
      <div style={{ display: 'flex', gap: '40px' }}>
        <VisualTooltip
          text='Top Left'
          description='상단 왼쪽 정렬'
          content={<PlaceholderContent />}
          placement='top-left'
        >
          <SolidButton>Top Left</SolidButton>
        </VisualTooltip>
        <VisualTooltip
          text='Top Center'
          description='상단 중앙 정렬'
          content={<PlaceholderContent />}
          placement='top-center'
        >
          <SolidButton>Top Center</SolidButton>
        </VisualTooltip>
        <VisualTooltip
          text='Top Right'
          description='상단 오른쪽 정렬'
          content={<PlaceholderContent />}
          placement='top-right'
        >
          <SolidButton>Top Right</SolidButton>
        </VisualTooltip>
      </div>
      <div style={{ display: 'flex', gap: '300px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <VisualTooltip
            text='Left Top'
            description='왼쪽 상단 정렬'
            content={<PlaceholderContent />}
            placement='left-top'
          >
            <SolidButton>Left Top</SolidButton>
          </VisualTooltip>
          <VisualTooltip
            text='Left Center'
            description='왼쪽 중앙 정렬'
            content={<PlaceholderContent />}
            placement='left-center'
          >
            <SolidButton>Left Center</SolidButton>
          </VisualTooltip>
          <VisualTooltip
            text='Left Bottom'
            description='왼쪽 하단 정렬'
            content={<PlaceholderContent />}
            placement='left-bottom'
          >
            <SolidButton>Left Bottom</SolidButton>
          </VisualTooltip>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <VisualTooltip
            text='Right Top'
            description='오른쪽 상단 정렬'
            content={<PlaceholderContent />}
            placement='right-top'
          >
            <SolidButton>Right Top</SolidButton>
          </VisualTooltip>
          <VisualTooltip
            text='Right Center'
            description='오른쪽 중앙 정렬'
            content={<PlaceholderContent />}
            placement='right-center'
          >
            <SolidButton>Right Center</SolidButton>
          </VisualTooltip>
          <VisualTooltip
            text='Right Bottom'
            description='오른쪽 하단 정렬'
            content={<PlaceholderContent />}
            placement='right-bottom'
          >
            <SolidButton>Right Bottom</SolidButton>
          </VisualTooltip>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '40px' }}>
        <VisualTooltip
          text='Bottom Left'
          description='하단 왼쪽 정렬'
          content={<PlaceholderContent />}
          placement='bottom-left'
        >
          <SolidButton>Bottom Left</SolidButton>
        </VisualTooltip>
        <VisualTooltip
          text='Bottom Center'
          description='하단 중앙 정렬'
          content={<PlaceholderContent />}
          placement='bottom-center'
        >
          <SolidButton>Bottom Center</SolidButton>
        </VisualTooltip>
        <VisualTooltip
          text='Bottom Right'
          description='하단 오른쪽 정렬'
          content={<PlaceholderContent />}
          placement='bottom-right'
        >
          <SolidButton>Bottom Right</SolidButton>
        </VisualTooltip>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          '툴팁의 위치를 top-left, top-center, top-right, bottom-left, bottom-center, bottom-right, left-top, left-center, left-bottom, right-top, right-center, right-bottom으로 설정할 수 있습니다.',
      },
    },
  },
};

export const CustomSize: Story = {
  render: () => (
    <VisualTooltip
      text='커스텀 사이즈'
      description='콘텐츠 영역 크기를 조절할 수 있습니다.'
      content={<PlaceholderContent />}
      contentWidth={284}
      contentHeight={180}
      placement='bottom-center'
    >
      <SolidButton>커스텀 사이즈</SolidButton>
    </VisualTooltip>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'contentWidth와 contentHeight props를 통해 콘텐츠 영역의 크기를 조절할 수 있습니다. (전체 툴팁 너비는 contentWidth + 16px padding)',
      },
    },
  },
};

export const AlwaysVisible: Story = {
  render: () => (
    <div style={{ padding: '200px' }}>
      <VisualTooltip
        text='텍스트를 입력해 주세요.'
        description='안내 텍스트를 입력해 주세요.'
        content={<PlaceholderContent />}
        placement='bottom-center'
        defaultVisible
      >
        <SolidButton>항상 보임</SolidButton>
      </VisualTooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'defaultVisible prop을 사용하면 호버 없이도 툴팁이 항상 표시됩니다.',
      },
    },
  },
};
