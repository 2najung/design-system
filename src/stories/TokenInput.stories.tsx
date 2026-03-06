import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { TokenInput } from '../components/TokenInput';

const meta: Meta<typeof TokenInput> = {
  title: 'Components/TokenInput',
  component: TokenInput,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '토큰 인풋의 크기',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    placeholder: {
      control: 'text',
      description: 'placeholder 텍스트',
    },
    lineMode: {
      control: 'select',
      options: ['single', 'multi'],
      description: '칩 표시 모드 (single: 가로 스크롤, multi: 세로 스크롤)',
    },
    lang: {
      control: 'select',
      options: ['ko', 'en'],
      description: '언어 설정',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TokenInput>;

export const Default: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState<string[]>([]);

    return (
      <div style={{ width: '400px' }}>
        <TokenInput {...args} value={tokens} onChange={setTokens} />
      </div>
    );
  },
};

export const WithInitialValue: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState<string[]>(['React', 'TypeScript', 'Styled-components']);

    return (
      <div style={{ width: '400px' }}>
        <TokenInput {...args} value={tokens} onChange={setTokens} />
      </div>
    );
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => {
    const [tokens, setTokens] = useState<string[]>(['Tag1', 'Tag2']);

    return (
      <div style={{ width: '400px' }}>
        <TokenInput {...args} value={tokens} onChange={setTokens} />
      </div>
    );
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args) => {
    const [tokens, setTokens] = useState<string[]>(['Tag1', 'Tag2']);

    return (
      <div style={{ width: '400px' }}>
        <TokenInput {...args} value={tokens} onChange={setTokens} />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    const tokens = ['React', 'TypeScript', 'Disabled'];

    return (
      <div style={{ width: '400px' }}>
        <TokenInput {...args} value={tokens} />
      </div>
    );
  },
};

export const SingleLineMode: Story = {
  args: {
    lineMode: 'single',
    placeholder: '단일 라인 모드 (가로 스크롤)',
  },
  render: (args) => {
    const [tokens, setTokens] = useState<string[]>([
      'React',
      'TypeScript',
      'Styled-components',
      'Storybook',
      'Jest',
      'ESLint',
      'Prettier',
    ]);

    return (
      <div style={{ width: '400px' }}>
        <TokenInput {...args} value={tokens} onChange={setTokens} />
      </div>
    );
  },
};

export const MultiLineMode: Story = {
  args: {
    lineMode: 'multi',
    placeholder: '멀티 라인 모드 (최대 3줄, 세로 스크롤)',
  },
  render: (args) => {
    const [tokens, setTokens] = useState<string[]>([
      'React',
      'TypeScript',
      'Styled-components',
      'Storybook',
      'Jest',
      'ESLint',
      'Prettier',
      'Webpack',
      'Babel',
      'Redux',
    ]);

    return (
      <div style={{ width: '400px' }}>
        <TokenInput {...args} value={tokens} onChange={setTokens} />
      </div>
    );
  },
};

export const EmailTokens: Story = {
  args: {
    placeholder: '이메일 주소를 입력하고 Enter를 눌러주세요',
  },
  render: (args) => {
    const [emails, setEmails] = useState<string[]>(['john@example.com', 'jane@example.com']);

    return (
      <div style={{ width: '500px' }}>
        <TokenInput {...args} value={emails} onChange={setEmails} />
      </div>
    );
  },
};

export const TagInput: Story = {
  args: {
    placeholder: '태그를 입력하고 Enter를 눌러주세요',
  },
  render: (args) => {
    const [tags, setTags] = useState<string[]>(['디자인', '개발', 'UI/UX']);

    return (
      <div style={{ width: '400px' }}>
        <TokenInput {...args} value={tags} onChange={setTags} />
      </div>
    );
  },
};
