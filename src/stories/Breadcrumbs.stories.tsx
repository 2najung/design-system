import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { BreadcrumbItem } from '../components/Breadcrumbs/BreadcrumbItem';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';
import type { BreadcrumbsProps } from '../components/Breadcrumbs/types';
import { Icons } from '../components/icons';

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '브레드크럼(Breadcrumbs)은 아이템(Breadcrumb Item)으로 구성된 네비게이션 컴포넌트입니다. 크기, 여백, 아이콘 등 시각적 요소와 레이아웃 기준을 상세히 정의합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'BreadcrumbItem 컴포넌트들입니다.',
    },
    className: {
      control: { type: 'text' },
      description: 'CSS 클래스명을 적용합니다.',
    },
    style: {
      control: { type: 'object' },
      description: '인라인 스타일을 적용합니다.',
    },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ className, style }) => (
    <Breadcrumbs className={className} style={style}>
      <BreadcrumbItem>
        <Icons.IconHomeOutline20 />홈
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icons.IconSettingOutline20 />
        설정
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Icons.IconLockOutline20 />
        개인정보 변경
      </BreadcrumbItem>
    </Breadcrumbs>
  ),
  args: {
    style: {},
    className: '',
  },
};

export const TextOnly: Story = {
  render: ({ className, style }) => (
    <Breadcrumbs className={className} style={style}>
      <BreadcrumbItem>홈</BreadcrumbItem>
      <BreadcrumbItem>설정</BreadcrumbItem>
      <BreadcrumbItem active>개인정보 변경</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const WithIcons: Story = {
  render: ({ className, style }) => (
    <Breadcrumbs className={className} style={style}>
      <BreadcrumbItem>
        <Icons.IconHomeOutline20 />홈
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icons.IconSettingOutline20 />
        설정
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icons.IconLockOutline20 />
        개인정보 변경
      </BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const TwoItems: Story = {
  render: ({ className, style }) => (
    <Breadcrumbs className={className} style={style}>
      <BreadcrumbItem>
        <Icons.IconHomeOutline20 />홈
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Icons.IconSettingOutline20 />
        설정
      </BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const FourItems: Story = {
  render: ({ className, style }) => (
    <Breadcrumbs className={className} style={style}>
      <BreadcrumbItem>
        <Icons.IconHomeOutline20 />홈
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icons.IconSettingOutline20 />
        설정
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icons.IconPersonOutline20 />
        사용자
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Icons.IconLockOutline20 />
        개인정보 변경
      </BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const WithDisabled: Story = {
  render: ({ className, style }) => (
    <Breadcrumbs className={className} style={style}>
      <BreadcrumbItem disabled>
        <Icons.IconHomeOutline20 />홈
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icons.IconSettingOutline20 />
        설정
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Icons.IconLockOutline20 />
        개인정보 변경
      </BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const AllStates: Story = {
  render: ({ className, style }) => (
    <Container>
      <Section>
        <SectionTitle>Default</SectionTitle>
        <Breadcrumbs className={className} style={style}>
          <BreadcrumbItem>
            <Icons.IconHomeOutline20 />홈
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Icons.IconSettingOutline20 />
            설정
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Icons.IconLockOutline20 />
            개인정보 변경
          </BreadcrumbItem>
        </Breadcrumbs>
      </Section>

      <Section>
        <SectionTitle>Hovered (두 번째 아이템에 마우스 올리기)</SectionTitle>
        <Breadcrumbs className={className} style={style}>
          <BreadcrumbItem>
            <Icons.IconHomeOutline20 />홈
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Icons.IconSettingOutline20 />
            설정
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Icons.IconLockOutline20 />
            개인정보 변경
          </BreadcrumbItem>
        </Breadcrumbs>
      </Section>

      <Section>
        <SectionTitle>Focused (탭 키로 포커스)</SectionTitle>
        <Breadcrumbs className={className} style={style}>
          <BreadcrumbItem>
            <Icons.IconHomeOutline20 />홈
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Icons.IconSettingOutline20 />
            설정
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Icons.IconLockOutline20 />
            개인정보 변경
          </BreadcrumbItem>
        </Breadcrumbs>
      </Section>

      <Section>
        <SectionTitle>Disabled</SectionTitle>
        <Breadcrumbs className={className} style={style}>
          <BreadcrumbItem disabled>
            <Icons.IconHomeOutline20 />홈
          </BreadcrumbItem>
          <BreadcrumbItem disabled>
            <Icons.IconSettingOutline20 />
            설정
          </BreadcrumbItem>
          <BreadcrumbItem disabled>
            <Icons.IconLockOutline20 />
            개인정보 변경
          </BreadcrumbItem>
        </Breadcrumbs>
      </Section>
    </Container>
  ),
};

export const Interactive: Story = {
  render: ({ className, style }) => (
    <Breadcrumbs className={className} style={style}>
      <BreadcrumbItem onClick={() => console.log('Item 1 clicked')}>
        <Icons.IconHomeOutline20 />홈
      </BreadcrumbItem>
      <BreadcrumbItem onClick={() => console.log('Item 2 clicked')}>
        <Icons.IconSettingOutline20 />
        설정
      </BreadcrumbItem>
      <BreadcrumbItem active onClick={() => console.log('Item 3 clicked')}>
        <Icons.IconLockOutline20 />
        개인정보 변경
      </BreadcrumbItem>
    </Breadcrumbs>
  ),
  args: {
    style: {},
    className: '',
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;
