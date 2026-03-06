import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { Badge } from '../components/Badge';
import type { BadgeProps } from '../components/Badge/types';
import { IconDocumentOutline16 } from '../components/icons';

const meta = {
  title: 'Components/Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Badge는 상태, 카테고리, 라벨 등을 표시하는 작은 컴포넌트입니다. Outline, Solid, Strong 세 가지 타입을 지원합니다.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'brand', 'positive', 'negative', 'info', 'cautionary'],
    },
    type: {
      control: { type: 'radio' },
      options: ['outline', 'solid', 'strong'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: 'primary',
    type: 'outline',
    size: 'medium',
  },
};

export const Outline: Story = {
  render: (args) => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: 'primary',
    type: 'outline',
    size: 'medium',
  },
};

export const OutlineWithIcon: Story = {
  render: (args) => <Badge {...args}>텍스트</Badge>,
  args: {
    ...Outline.args,
    leadingIcon: <IconDocumentOutline16 />,
  },
};

export const Solid: Story = {
  render: (args) => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: 'primary',
    type: 'solid',
    size: 'medium',
  },
};

export const SolidWithIcon: Story = {
  render: (args) => <Badge {...args}>텍스트</Badge>,
  args: {
    ...Solid.args,
    leadingIcon: <IconDocumentOutline16 />,
  },
};

export const Strong: Story = {
  render: (args) => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: 'primary',
    type: 'strong',
    size: 'medium',
  },
};

export const StrongWithIcon: Story = {
  render: (args) => <Badge {...args}>텍스트</Badge>,
  args: {
    ...Strong.args,
    leadingIcon: <IconDocumentOutline16 />,
  },
};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Container>
      <Section>
        <SectionTitle>Outline Type</SectionTitle>
        <BadgeRow>
          <Badge variant='primary' type='outline'>
            Primary
          </Badge>
          <Badge variant='secondary' type='outline'>
            Secondary
          </Badge>
          <Badge variant='brand' type='outline'>
            Brand
          </Badge>
          <Badge variant='positive' type='outline'>
            Positive
          </Badge>
          <Badge variant='negative' type='outline'>
            Negative
          </Badge>
          <Badge variant='info' type='outline'>
            Info
          </Badge>
          <Badge variant='cautionary' type='outline'>
            Cautionary
          </Badge>
        </BadgeRow>
      </Section>

      <Section>
        <SectionTitle>Solid Type</SectionTitle>
        <BadgeRow>
          <Badge variant='primary' type='solid'>
            Primary
          </Badge>
          <Badge variant='secondary' type='solid'>
            Secondary
          </Badge>
          <Badge variant='brand' type='solid'>
            Brand
          </Badge>
          <Badge variant='positive' type='solid'>
            Positive
          </Badge>
          <Badge variant='negative' type='solid'>
            Negative
          </Badge>
          <Badge variant='info' type='solid'>
            Info
          </Badge>
          <Badge variant='cautionary' type='solid'>
            Cautionary
          </Badge>
        </BadgeRow>
      </Section>

      <Section>
        <SectionTitle>Strong Type</SectionTitle>
        <BadgeRow>
          <Badge variant='primary' type='strong'>
            Primary
          </Badge>
          <Badge variant='secondary' type='strong'>
            Secondary
          </Badge>
          <Badge variant='brand' type='strong'>
            Brand
          </Badge>
          <Badge variant='positive' type='strong'>
            Positive
          </Badge>
          <Badge variant='negative' type='strong'>
            Negative
          </Badge>
          <Badge variant='info' type='strong'>
            Info
          </Badge>
          <Badge variant='cautionary' type='strong'>
            Cautionary
          </Badge>
        </BadgeRow>
      </Section>
    </Container>
  ),
};

export const InfoVariant: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <SmallContainer>
      <Section>
        <SectionTitle>Info - Outline</SectionTitle>
        <BadgeRow>
          <Badge variant='info' type='outline' size='small'>
            Info
          </Badge>
          <Badge variant='info' type='outline' size='medium'>
            Info
          </Badge>
          <Badge variant='info' type='outline' size='large'>
            Info
          </Badge>
        </BadgeRow>
      </Section>

      <Section>
        <SectionTitle>Info - Solid</SectionTitle>
        <BadgeRow>
          <Badge variant='info' type='solid' size='small'>
            Info
          </Badge>
          <Badge variant='info' type='solid' size='medium'>
            Info
          </Badge>
          <Badge variant='info' type='solid' size='large'>
            Info
          </Badge>
        </BadgeRow>
      </Section>

      <Section>
        <SectionTitle>Info - Strong</SectionTitle>
        <BadgeRow>
          <Badge variant='info' type='strong' size='small'>
            Info
          </Badge>
          <Badge variant='info' type='strong' size='medium'>
            Info
          </Badge>
          <Badge variant='info' type='strong' size='large'>
            Info
          </Badge>
        </BadgeRow>
      </Section>
    </SmallContainer>
  ),
};

export const CautionaryVariant: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <SmallContainer>
      <Section>
        <SectionTitle>Cautionary - Outline</SectionTitle>
        <BadgeRow>
          <Badge variant='cautionary' type='outline' size='small'>
            Cautionary
          </Badge>
          <Badge variant='cautionary' type='outline' size='medium'>
            Cautionary
          </Badge>
          <Badge variant='cautionary' type='outline' size='large'>
            Cautionary
          </Badge>
        </BadgeRow>
      </Section>

      <Section>
        <SectionTitle>Cautionary - Solid</SectionTitle>
        <BadgeRow>
          <Badge variant='cautionary' type='solid' size='small'>
            Cautionary
          </Badge>
          <Badge variant='cautionary' type='solid' size='medium'>
            Cautionary
          </Badge>
          <Badge variant='cautionary' type='solid' size='large'>
            Cautionary
          </Badge>
        </BadgeRow>
      </Section>

      <Section>
        <SectionTitle>Cautionary - Strong</SectionTitle>
        <BadgeRow>
          <Badge variant='cautionary' type='strong' size='small'>
            Cautionary
          </Badge>
          <Badge variant='cautionary' type='strong' size='medium'>
            Cautionary
          </Badge>
          <Badge variant='cautionary' type='strong' size='large'>
            Cautionary
          </Badge>
        </BadgeRow>
      </Section>
    </SmallContainer>
  ),
};

export const AllSizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <SmallContainer>
      <Section>
        <SectionTitle>Small (20px)</SectionTitle>
        <BadgeRowCentered>
          <Badge variant='primary' type='outline' size='small'>
            텍스트
          </Badge>
          <Badge variant='primary' type='solid' size='small'>
            텍스트
          </Badge>
          <Badge variant='primary' type='strong' size='small'>
            텍스트
          </Badge>
        </BadgeRowCentered>
      </Section>

      <Section>
        <SectionTitle>Medium (24px)</SectionTitle>
        <BadgeRowCentered>
          <Badge variant='primary' type='outline' size='medium'>
            텍스트
          </Badge>
          <Badge variant='primary' type='solid' size='medium'>
            텍스트
          </Badge>
          <Badge variant='primary' type='strong' size='medium'>
            텍스트
          </Badge>
        </BadgeRowCentered>
      </Section>

      <Section>
        <SectionTitle>Large (28px)</SectionTitle>
        <BadgeRowCentered>
          <Badge variant='primary' type='outline' size='large'>
            텍스트
          </Badge>
          <Badge variant='primary' type='solid' size='large'>
            텍스트
          </Badge>
          <Badge variant='primary' type='strong' size='large'>
            텍스트
          </Badge>
        </BadgeRowCentered>
      </Section>
    </SmallContainer>
  ),
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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

const BadgeRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const BadgeRowCentered = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
`;
