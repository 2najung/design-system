import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { TokenField } from '../components/TokenField';

const meta: Meta<typeof TokenField> = {
  title: 'Components/TokenField',
  component: TokenField,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '토큰 필드의 크기',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    labelType: {
      control: 'select',
      options: ['default', 'required', 'optional'],
      description: '라벨 타입',
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
    descriptionLeadingIcon: {
      control: 'boolean',
      description: '설명 앞 아이콘 표시 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TokenField>;

export const Default: Story = {
  args: {
    label: '태그',
    placeholder: '태그를 입력하고 Enter를 눌러주세요',
  },
  render: (args) => {
    const [tokens, setTokens] = useState<string[]>([]);

    return (
      <div style={{ width: '400px' }}>
        <TokenField {...args} value={tokens} onChange={setTokens} />
      </div>
    );
  },
};

export const WithDescription: Story = {
  args: {
    label: '이메일 주소',
    description: '여러 개의 이메일 주소를 입력할 수 있습니다.',
    placeholder: '이메일 주소를 입력하고 Enter를 눌러주세요',
  },
  render: (args) => {
    const [emails, setEmails] = useState<string[]>(['john@example.com', 'jane@example.com']);

    return (
      <div style={{ width: '500px' }}>
        <TokenField {...args} value={emails} onChange={setEmails} />
      </div>
    );
  },
};

export const Required: Story = {
  args: {
    label: '필수 태그',
    labelType: 'required',
    description: '최소 1개 이상의 태그를 입력해주세요.',
    placeholder: '태그를 입력하세요',
  },
  render: (args) => {
    const [tags, setTags] = useState<string[]>(['React']);

    return (
      <div style={{ width: '400px' }}>
        <TokenField {...args} value={tags} onChange={setTags} />
      </div>
    );
  },
};

export const Optional: Story = {
  args: {
    label: '선택 태그',
    labelType: 'optional',
    description: '선택적으로 태그를 입력할 수 있습니다.',
    placeholder: '태그를 입력하세요',
  },
  render: (args) => {
    const [tags, setTags] = useState<string[]>([]);

    return (
      <div style={{ width: '400px' }}>
        <TokenField {...args} value={tags} onChange={setTags} />
      </div>
    );
  },
};

export const Small: Story = {
  args: {
    label: '작은 크기',
    size: 'small',
    placeholder: '태그를 입력하세요',
  },
  render: (args) => {
    const [tags, setTags] = useState<string[]>(['Tag1', 'Tag2']);

    return (
      <div style={{ width: '400px' }}>
        <TokenField {...args} value={tags} onChange={setTags} />
      </div>
    );
  },
};

export const Large: Story = {
  args: {
    label: '큰 크기',
    size: 'large',
    placeholder: '태그를 입력하세요',
  },
  render: (args) => {
    const [tags, setTags] = useState<string[]>(['Tag1', 'Tag2']);

    return (
      <div style={{ width: '400px' }}>
        <TokenField {...args} value={tags} onChange={setTags} />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성화',
    disabled: true,
    description: '비활성화된 상태입니다.',
  },
  render: (args) => {
    const tokens = ['React', 'TypeScript', 'Disabled'];

    return (
      <div style={{ width: '400px' }}>
        <TokenField {...args} value={tokens} />
      </div>
    );
  },
};

export const SingleLineMode: Story = {
  args: {
    label: '단일 라인 모드',
    lineMode: 'single',
    description: '한 줄로 표시되며, 넘치면 가로 스크롤됩니다.',
    placeholder: '태그를 입력하세요',
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
        <TokenField {...args} value={tokens} onChange={setTokens} />
      </div>
    );
  },
};

export const MultiLineMode: Story = {
  args: {
    label: '멀티 라인 모드',
    lineMode: 'multi',
    description: '최대 3줄까지 표시되며, 넘치면 세로 스크롤됩니다.',
    placeholder: '태그를 입력하세요',
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
        <TokenField {...args} value={tokens} onChange={setTokens} />
      </div>
    );
  },
};

export const EmailExample: Story = {
  args: {
    label: '초대할 사람',
    labelType: 'required',
    description: '이메일 주소를 입력하고 Enter를 눌러주세요.',
    placeholder: '이메일 주소 입력',
  },
  render: (args) => {
    const [emails, setEmails] = useState<string[]>(['john@example.com', 'jane@example.com']);

    return (
      <div style={{ width: '500px' }}>
        <TokenField {...args} value={emails} onChange={setEmails} />
      </div>
    );
  },
};

export const KeywordsExample: Story = {
  args: {
    label: '검색 키워드',
    labelType: 'optional',
    description: '여러 개의 키워드로 검색할 수 있습니다.',
    placeholder: '키워드를 입력하세요',
  },
  render: (args) => {
    const [keywords, setKeywords] = useState<string[]>(['디자인 시스템', 'React', 'TypeScript']);

    return (
      <div style={{ width: '450px' }}>
        <TokenField {...args} value={keywords} onChange={setKeywords} />
      </div>
    );
  },
};
