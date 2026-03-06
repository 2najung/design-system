import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { MultiSelect } from '../components/MultiSelect';
import type { MultiSelectProps } from '../components/MultiSelect/types';

const meta = {
  title: 'Components/Inputs/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'MultiSelect는 드롭다운에서 여러 옵션을 선택하고 Chip 형태로 표시하는 컴포넌트입니다. 입력을 통해 옵션을 검색할 수 있으며, 선택된 항목은 Chip으로 표시되고 X 버튼으로 제거할 수 있습니다.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '컴포넌트 크기',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 상태',
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더 텍스트',
    },
    lang: {
      control: { type: 'select' },
      options: ['ko', 'en'],
      description: '언어 설정',
    },
  },
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'nextjs', label: 'Next.js' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'gatsby', label: 'Gatsby' },
  { value: 'remix', label: 'Remix' },
  { value: 'solid', label: 'Solid' },
  { value: 'qwik', label: 'Qwik' },
  { value: 'astro', label: 'Astro' },
  { value: 'preact', label: 'Preact' },
  { value: 'lit', label: 'Lit' },
  { value: 'alpine', label: 'Alpine.js' },
  { value: 'ember', label: 'Ember' },
  { value: 'backbone', label: 'Backbone' },
  { value: 'meteor', label: 'Meteor' },
  { value: 'aurelia', label: 'Aurelia' },
  { value: 'mithril', label: 'Mithril' },
  { value: 'riot', label: 'Riot' },
];

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <div style={{ width: '400px' }}>
        <MultiSelect {...args} value={value} onChange={setValue} options={sampleOptions} />
      </div>
    );
  },
  args: {
    size: 'medium',
    disabled: false,
    placeholder: '프레임워크를 선택해주세요',
    lang: 'ko',
  },
};

export const WithInitialValues: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(['react', 'nextjs']);
    return (
      <div style={{ width: '400px' }}>
        <MultiSelect {...args} value={value} onChange={setValue} options={sampleOptions} />
      </div>
    );
  },
  args: {
    size: 'medium',
    disabled: false,
    placeholder: '프레임워크를 선택해주세요',
    lang: 'ko',
  },
};

export const Small: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(['vue', 'angular']);
    return (
      <div style={{ width: '400px' }}>
        <MultiSelect {...args} value={value} onChange={setValue} options={sampleOptions} />
      </div>
    );
  },
  args: {
    size: 'small',
    disabled: false,
    placeholder: '프레임워크를 선택해주세요',
    lang: 'ko',
  },
};

export const Large: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(['react', 'vue', 'angular']);
    return (
      <div style={{ width: '400px' }}>
        <MultiSelect {...args} value={value} onChange={setValue} options={sampleOptions} />
      </div>
    );
  },
  args: {
    size: 'large',
    disabled: false,
    placeholder: '프레임워크를 선택해주세요',
    lang: 'ko',
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(['react', 'nextjs']);
    return (
      <div style={{ width: '400px' }}>
        <MultiSelect {...args} value={value} onChange={setValue} options={sampleOptions} />
      </div>
    );
  },
  args: {
    size: 'medium',
    disabled: true,
    placeholder: '프레임워크를 선택해주세요',
    lang: 'ko',
  },
};

export const AllSizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [smallValue, setSmallValue] = useState<string[]>(['react']);
    const [mediumValue, setMediumValue] = useState<string[]>(['react', 'vue']);
    const [largeValue, setLargeValue] = useState<string[]>(['react', 'vue', 'angular']);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          width: '500px',
        }}
      >
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Small</h3>
          <MultiSelect
            size='small'
            value={smallValue}
            onChange={setSmallValue}
            options={sampleOptions}
            placeholder='선택해주세요'
          />
        </div>

        <div>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Medium</h3>
          <MultiSelect
            size='medium'
            value={mediumValue}
            onChange={setMediumValue}
            options={sampleOptions}
            placeholder='선택해주세요'
          />
        </div>

        <div>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Large</h3>
          <MultiSelect
            size='large'
            value={largeValue}
            onChange={setLargeValue}
            options={sampleOptions}
            placeholder='선택해주세요'
          />
        </div>
      </div>
    );
  },
};

export const ManySelections: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([
      'react',
      'vue',
      'angular',
      'svelte',
      'nextjs',
      'nuxt',
      'gatsby',
      'remix',
      'solid',
      'qwik',
    ]);
    return (
      <div style={{ width: '500px' }}>
        <MultiSelect {...args} value={value} onChange={setValue} options={sampleOptions} />
      </div>
    );
  },
  args: {
    size: 'medium',
    disabled: false,
    placeholder: '프레임워크를 선택해주세요',
    lang: 'ko',
  },
};

export const LineModeComparison: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [singleLine, setSingleLine] = useState<string[]>([
      'react',
      'vue',
      'angular',
      'svelte',
      'nextjs',
      'nuxt',
      'gatsby',
      'remix',
    ]);
    const [multiLine, setMultiLine] = useState<string[]>([
      'react',
      'vue',
      'angular',
      'svelte',
      'nextjs',
      'nuxt',
      'gatsby',
      'remix',
      'solid',
      'qwik',
      'astro',
      'preact',
      'lit',
      'alpine',
      'ember',
    ]);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
          width: '500px',
        }}
      >
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
            lineMode = "single" (한 줄 고정, 가로 스크롤)
          </h3>
          <MultiSelect
            size='medium'
            value={singleLine}
            onChange={setSingleLine}
            options={sampleOptions}
            placeholder='선택해주세요'
            lineMode='single'
          />
          <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
            한 줄로만 표시되고 가로 스크롤이 생깁니다
          </p>
        </div>

        <div>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
            lineMode = "multi" (최대 3줄까지, 이후 세로 스크롤)
          </h3>
          <MultiSelect
            size='medium'
            value={multiLine}
            onChange={setMultiLine}
            options={sampleOptions}
            placeholder='선택해주세요'
            lineMode='multi'
          />
          <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
            최대 3줄까지 늘어나고, 이후 세로 스크롤이 생깁니다
          </p>
        </div>
      </div>
    );
  },
};
