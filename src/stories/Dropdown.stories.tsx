import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, Dropdown } from '../components';
import type { DropdownOption, DropdownProps } from '../components/Dropdown/types';
import {
  IconDocumentOutline16,
  IconHomeOutline16,
  IconSearchOutline16,
} from '../components/icons/generated';

const DropdownWithState = (props: DropdownProps) => {
  const [value, setValue] = useState<string | string[]>(
    props.type === 'multiselect'
      ? Array.isArray(props.value)
        ? props.value
        : []
      : props.value || ''
  );
  return <Dropdown {...props} value={value} onChange={(newValue) => setValue(newValue)} />;
};

const basicOptions: DropdownOption[] = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
  { value: 'option4', label: '옵션 4' },
  { value: 'option5', label: '옵션 5' },
];

const manyOptions: DropdownOption[] = Array.from({ length: 20 }, (_, i) => ({
  value: `option${i + 1}`,
  label: `옵션 ${i + 1}`,
}));

const memberOptions: DropdownOption[] = [
  { value: '1', label: 'John Doe', description: 'john@example.com', leadingContent: () => <Avatar type='initial' size='small' value='JD' /> },
  { value: '2', label: 'Jane Smith', description: 'jane@example.com', leadingContent: () => <Avatar type='initial' size='small' value='JS' /> },
  { value: '3', label: 'Bob Johnson', description: 'bob@example.com', leadingContent: () => <Avatar type='initial' size='small' value='BJ' /> },
];

const iconOptions: DropdownOption[] = [
  { value: 'home', label: '홈', description: '메인 페이지로 이동', leadingContent: () => <IconHomeOutline16 /> },
  { value: 'search', label: '검색', description: '검색 기능', leadingContent: () => <IconSearchOutline16 /> },
  { value: 'docs', label: '문서', description: '문서 관리', leadingContent: () => <IconDocumentOutline16 /> },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Inputs/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Selector, ComboBox, MultiSelect 3가지 타입을 지원하는 드롭다운 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const s = {
  page: {
    padding: '40px',
    maxWidth: 960,
    margin: '0 auto',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  } as React.CSSProperties,
  header: {
    marginBottom: 48,
  } as React.CSSProperties,
  title: {
    fontSize: 28,
    fontWeight: 700,
    color: '#171719',
    margin: '0 0 8px',
    letterSpacing: -0.5,
  } as React.CSSProperties,
  desc: {
    fontSize: 15,
    color: '#7b7e85',
    margin: 0,
    lineHeight: 1.5,
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: 13,
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
    color: '#8f9298',
    margin: '0 0 16px',
  } as React.CSSProperties,
  card: {
    border: '1px solid #e6e7e9',
    borderRadius: 12,
    padding: '24px',
    marginBottom: 16,
  } as React.CSSProperties,
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
  } as React.CSSProperties,
  gridItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 8,
  } as React.CSSProperties,
  label: {
    fontSize: 11,
    color: '#8f9298',
    fontFamily: "'SF Mono', monospace",
  } as React.CSSProperties,
};

// ─── Playground ──────────────────────────────────────────────
export const Playground: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div style={{ width: 300 }}>
      <DropdownWithState {...args} />
    </div>
  ),
  args: {
    type: 'selector',
    size: 'medium',
    placeholder: '선택해주세요.',
    options: basicOptions,
    label: '라벨',
    description: '설명 텍스트입니다.',
  },
  argTypes: {
    type: { control: 'select', options: ['selector', 'combobox', 'multiselect'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    status: { control: 'select', options: ['default', 'negative', 'positive'] },
    labelType: { control: 'select', options: ['default', 'required', 'optional'] },
    disabled: { control: 'boolean' },
    descriptionLeadingIcon: { control: 'boolean' },
  },
};

// ─── Overview ────────────────────────────────────────────────
export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Dropdown</h1>
        <p style={s.desc}>
          Selector (선택만), ComboBox (검색+선택), MultiSelect (다중 선택) 3가지 타입을 지원합니다.
          <br />
          Label, Description, 상태(default, negative, positive)를 조합하여 사용합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Types</p>
      <div style={s.card}>
        <div style={s.grid}>
          <div style={s.gridItem}>
            <span style={s.label}>selector</span>
            <DropdownWithState
              type='selector'
              label='카테고리'
              placeholder='선택해주세요.'
              options={basicOptions}
              description='옵션을 선택할 수 있습니다.'
            />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>combobox</span>
            <DropdownWithState
              type='combobox'
              label='검색'
              placeholder='입력하거나 선택해주세요.'
              options={basicOptions}
              description='텍스트를 입력하거나 선택할 수 있습니다.'
            />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>multiselect</span>
            <DropdownWithState
              type='multiselect'
              label='태그'
              placeholder='여러 항목을 선택해주세요.'
              options={basicOptions}
              value={[]}
              description='여러 옵션을 선택할 수 있습니다.'
            />
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={s.grid}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} style={s.gridItem}>
              <span style={s.label}>{size}</span>
              <DropdownWithState
                size={size}
                label='라벨'
                placeholder='선택해주세요.'
                options={basicOptions}
              />
            </div>
          ))}
        </div>
      </div>

      <p style={s.sectionTitle}>Status</p>
      <div style={s.card}>
        <div style={s.grid}>
          <div style={s.gridItem}>
            <span style={s.label}>default</span>
            <DropdownWithState
              label='라벨'
              placeholder='선택해주세요.'
              options={basicOptions}
              description='안내 텍스트입니다.'
            />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>negative</span>
            <DropdownWithState
              label='라벨'
              labelType='required'
              placeholder='선택해주세요.'
              options={basicOptions}
              status='negative'
              description='선택이 필요합니다.'
              descriptionLeadingIcon
            />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>positive</span>
            <DropdownWithState
              label='라벨'
              value='option2'
              options={basicOptions}
              status='positive'
              description='선택이 완료되었습니다.'
              descriptionLeadingIcon
            />
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Disabled</p>
      <div style={s.card}>
        <div style={{ ...s.grid, gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div style={s.gridItem}>
            <span style={s.label}>empty</span>
            <Dropdown
              label='라벨'
              placeholder='선택해주세요.'
              options={basicOptions}
              disabled
              description='비활성화된 상태입니다.'
            />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>with value</span>
            <Dropdown
              label='라벨'
              value='option2'
              options={basicOptions}
              disabled
              description='비활성화된 상태입니다.'
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// ─── Rich Options ────────────────────────────────────────────
export const RichOptions: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Rich Options</h1>
        <p style={s.desc}>
          옵션에 Avatar, Icon, Description을 포함하여 풍부한 정보를 표현할 수 있습니다.
        </p>
      </div>

      <div style={s.card}>
        <div style={s.grid}>
          <div style={s.gridItem}>
            <span style={s.label}>avatar + description</span>
            <DropdownWithState
              type='selector'
              label='멤버 선택'
              placeholder='멤버를 선택하세요'
              options={memberOptions}
            />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>icon + description</span>
            <DropdownWithState
              type='combobox'
              label='메뉴 검색'
              placeholder='검색하거나 선택하세요'
              options={iconOptions}
            />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>multiselect + avatar</span>
            <DropdownWithState
              type='multiselect'
              label='멤버 다중 선택'
              placeholder='멤버를 선택하세요'
              options={memberOptions}
              value={[]}
              lineMode='multi'
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// ─── MultiSelect Modes ───────────────────────────────────────
export const MultiSelectModes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>MultiSelect Line Modes</h1>
        <p style={s.desc}>
          single 모드는 한 줄 고정 + 가로 스크롤, multi 모드는 최대 3줄 + 세로 스크롤입니다.
        </p>
      </div>

      <div style={s.card}>
        <div style={{ ...s.grid, gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div style={s.gridItem}>
            <span style={s.label}>lineMode="single"</span>
            <DropdownWithState
              type='multiselect'
              label='Single Line'
              placeholder='옵션 선택'
              options={manyOptions}
              value={['option1', 'option2', 'option3', 'option4', 'option5', 'option6']}
              lineMode='single'
              description='한 줄로만 표시되고, 가로 스크롤이 생깁니다.'
            />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>lineMode="multi"</span>
            <DropdownWithState
              type='multiselect'
              label='Multi Line'
              placeholder='옵션 선택'
              options={manyOptions}
              value={['option1', 'option2', 'option3', 'option4', 'option5', 'option6', 'option7', 'option8', 'option9', 'option10']}
              lineMode='multi'
              description='최대 3줄까지 늘어나고, 이후 세로 스크롤이 생깁니다.'
            />
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Chip Sizes by Dropdown Size</p>
      <div style={s.card}>
        <div style={s.grid}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <div key={size} style={s.gridItem}>
              <span style={s.label}>{size} ({size === 'large' ? 'small chip' : 'x-small chip'})</span>
              <DropdownWithState
                type='multiselect'
                size={size}
                label={`${size} 사이즈`}
                placeholder='옵션 선택'
                options={basicOptions}
                value={['option1', 'option2']}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// ─── Form Example ────────────────────────────────────────────
export const FormExample: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Form Example</h1>
        <p style={s.desc}>실제 폼에서 사용되는 Dropdown 조합 예시입니다.</p>
      </div>

      <div style={{ ...s.card, maxWidth: 480 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <DropdownWithState
            type='selector'
            label='카테고리'
            labelType='required'
            placeholder='카테고리를 선택해주세요.'
            options={[
              { value: 'design', label: '디자인' },
              { value: 'dev', label: '개발' },
              { value: 'marketing', label: '마케팅' },
              { value: 'hr', label: '인사' },
            ]}
          />
          <DropdownWithState
            type='combobox'
            label='담당자'
            labelType='required'
            placeholder='이름을 검색하세요'
            options={memberOptions}
          />
          <DropdownWithState
            type='multiselect'
            label='태그'
            labelType='optional'
            placeholder='태그를 선택해주세요.'
            options={[
              { value: 'urgent', label: '긴급' },
              { value: 'important', label: '중요' },
              { value: 'review', label: '리뷰 필요' },
              { value: 'bug', label: '버그' },
              { value: 'feature', label: '기능' },
            ]}
            value={[]}
          />
          <DropdownWithState
            type='selector'
            label='우선순위'
            placeholder='우선순위를 선택해주세요.'
            options={basicOptions}
            status='negative'
            description='우선순위를 선택해 주세요.'
            descriptionLeadingIcon
          />
        </div>
      </div>
    </div>
  ),
};
