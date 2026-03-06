import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { TextArea } from '../components/TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    labelType: {
      control: 'select',
      options: ['default', 'required', 'optional'],
    },
    status: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    disabled: {
      control: 'boolean',
    },
    showCharacterCounter: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: '텍스트를 입력해 주세요.',
    showCharacterCounter: true,
    maxCount: 500,
  },
  render: (args) => {
    const { value, ...rest } = args;
    return (
      <Wrapper>
        <TextArea {...rest} />
      </Wrapper>
    );
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Label',
    placeholder: '텍스트를 입력해 주세요.',
  },
  render: (args) => (
    <Wrapper>
      <TextArea {...args} />
    </Wrapper>
  ),
};

export const WithDescription: Story = {
  args: {
    label: 'Label',
    description: 'Description text',
    placeholder: '텍스트를 입력해 주세요.',
  },
  render: (args) => (
    <Wrapper>
      <TextArea {...args} />
    </Wrapper>
  ),
};

export const WithCharacterCounter: Story = {
  args: {
    label: 'Label',
    placeholder: '텍스트를 입력해 주세요.',
    showCharacterCounter: true,
    maxCount: 500,
  },
  render: (args) => (
    <Wrapper>
      <TextArea {...args} />
    </Wrapper>
  ),
};

export const WithValue: Story = {
  args: {
    label: 'Label',
    value: '텍스트 입력',
    showCharacterCounter: true,
    maxCount: 500,
  },
  render: (args) => (
    <Wrapper>
      <TextArea {...args} />
    </Wrapper>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    placeholder: '텍스트를 입력해 주세요.',
    disabled: true,
    showCharacterCounter: true,
    maxCount: 500,
  },
  render: (args) => (
    <Wrapper>
      <TextArea {...args} />
    </Wrapper>
  ),
};

export const DisabledWithValue: Story = {
  args: {
    label: 'Label',
    value: '텍스트 입력',
    disabled: true,
    showCharacterCounter: true,
    maxCount: 500,
  },
  render: (args) => (
    <Wrapper>
      <TextArea {...args} />
    </Wrapper>
  ),
};

export const AllStates: Story = {
  render: () => (
    <StatesWrapper>
      <StateRow>
        <StateLabel>Default</StateLabel>
        <TextArea placeholder='텍스트를 입력해 주세요.' showCharacterCounter maxCount={500} />
      </StateRow>
      <StateRow>
        <StateLabel>Active</StateLabel>
        <TextArea value='텍스트 입력' showCharacterCounter maxCount={500} />
      </StateRow>
      <StateRow>
        <StateLabel>Disabled (Empty)</StateLabel>
        <TextArea
          placeholder='텍스트를 입력해 주세요.'
          disabled
          showCharacterCounter
          maxCount={500}
        />
      </StateRow>
      <StateRow>
        <StateLabel>Disabled (With Value)</StateLabel>
        <TextArea value='텍스트 입력' disabled showCharacterCounter maxCount={500} />
      </StateRow>
    </StatesWrapper>
  ),
};

const Wrapper = styled.div`
  width: 400px;
`;

const StatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 400px;
`;

const StateRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StateLabel = styled.span`
  font-size: 12px;
  color: #666;
`;
