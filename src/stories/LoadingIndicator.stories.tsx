import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { LoadingIndicator } from '../components/LoadingIndicator';

const meta: Meta<typeof LoadingIndicator> = {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['spinner', 'dots'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'x-large'],
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingIndicator>;

export const Default: Story = {
  args: {
    type: 'spinner',
    size: 'medium',
  },
};

export const Spinner: Story = {
  args: {
    type: 'spinner',
    size: 'medium',
  },
};

export const Dots: Story = {
  args: {
    type: 'dots',
    size: 'medium',
  },
};

export const Types: Story = {
  render: () => (
    <TypesWrapper>
      <TypeRow>
        <TypeLabel>Spinner</TypeLabel>
        <LoadingIndicator type='spinner' />
      </TypeRow>
      <TypeRow>
        <TypeLabel>Dots</TypeLabel>
        <LoadingIndicator type='dots' />
      </TypeRow>
    </TypesWrapper>
  ),
};

export const Sizes: Story = {
  render: () => (
    <SizesWrapper>
      <SizeSection>
        <SectionTitle>Spinner</SectionTitle>
        <SizeRow>
          <SizeLabel>Small (16px)</SizeLabel>
          <LoadingIndicator type='spinner' size='small' />
        </SizeRow>
        <SizeRow>
          <SizeLabel>Medium (20px)</SizeLabel>
          <LoadingIndicator type='spinner' size='medium' />
        </SizeRow>
        <SizeRow>
          <SizeLabel>Large (24px)</SizeLabel>
          <LoadingIndicator type='spinner' size='large' />
        </SizeRow>
        <SizeRow>
          <SizeLabel>X-Large (32px)</SizeLabel>
          <LoadingIndicator type='spinner' size='x-large' />
        </SizeRow>
      </SizeSection>
      <SizeSection>
        <SectionTitle>Dots</SectionTitle>
        <SizeRow>
          <SizeLabel>Small</SizeLabel>
          <LoadingIndicator type='dots' size='small' />
        </SizeRow>
        <SizeRow>
          <SizeLabel>Medium</SizeLabel>
          <LoadingIndicator type='dots' size='medium' />
        </SizeRow>
        <SizeRow>
          <SizeLabel>Large</SizeLabel>
          <LoadingIndicator type='dots' size='large' />
        </SizeRow>
        <SizeRow>
          <SizeLabel>X-Large</SizeLabel>
          <LoadingIndicator type='dots' size='x-large' />
        </SizeRow>
      </SizeSection>
    </SizesWrapper>
  ),
};

export const CustomColor: Story = {
  render: () => (
    <ColorWrapper>
      <ColorSection>
        <SectionTitle>Spinner</SectionTitle>
        <ColorRow>
          <LoadingIndicator type='spinner' color='#FF5722' />
          <LoadingIndicator type='spinner' color='#4CAF50' />
          <LoadingIndicator type='spinner' color='#9C27B0' />
        </ColorRow>
      </ColorSection>
      <ColorSection>
        <SectionTitle>Dots</SectionTitle>
        <ColorRow>
          <LoadingIndicator type='dots' color='#FF5722' />
          <LoadingIndicator type='dots' color='#4CAF50' />
          <LoadingIndicator type='dots' color='#9C27B0' />
        </ColorRow>
      </ColorSection>
    </ColorWrapper>
  ),
};

const TypesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TypeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const TypeLabel = styled.span`
  width: 80px;
  font-size: 14px;
  color: #666;
`;

const SizesWrapper = styled.div`
  display: flex;
  gap: 48px;
`;

const SizeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const SizeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const SizeLabel = styled.span`
  width: 120px;
  font-size: 14px;
  color: #666;
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ColorSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ColorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
