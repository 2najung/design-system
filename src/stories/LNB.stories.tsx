import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Divider, LNB, LNBItem, LNBItemGroup, LNBItemProfile } from '../components';
import {
  IconChevronRightOutline20,
  IconDockRightOutline20,
  IconDownloadOutline20,
  IconLogoutOutline20,
  IconMoneyOutline20,
  IconPersonOutline20,
  IconSettingOutline20,
  IconWalletOutline20,
} from '../components/icons/generated';

const meta: Meta<typeof LNB> = {
  title: 'Components/Navigation/LNB',
  component: LNB,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Left Navigation Bar. 좌측 사이드바 네비게이션으로, ItemGroup, Item, ItemProfile 등으로 구성됩니다. iconOnly 모드를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const s = {
  page: { padding: '40px', maxWidth: 960, margin: '0 auto', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" } as React.CSSProperties,
  header: { marginBottom: 48 } as React.CSSProperties,
  title: { fontSize: 28, fontWeight: 700, color: '#171719', margin: '0 0 8px', letterSpacing: -0.5 } as React.CSSProperties,
  desc: { fontSize: 15, color: '#7b7e85', margin: 0, lineHeight: 1.5 } as React.CSSProperties,
  sectionTitle: { fontSize: 13, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 1, color: '#8f9298', margin: '0 0 16px' } as React.CSSProperties,
  card: { border: '1px solid #e6e7e9', borderRadius: 12, padding: '24px', marginBottom: 16 } as React.CSSProperties,
  label: { fontSize: 11, color: '#8f9298', fontFamily: "'SF Mono', monospace" } as React.CSSProperties,
};

const NavItems = ({ selected, setSelected }: { selected: string; setSelected: (v: string) => void }) => (
  <>
    <LNBItemGroup title='설정'>
      <LNBItem value='내 정보' leadingIcon={IconPersonOutline20} selected={selected === 'profile'} onClick={() => setSelected('profile')} />
      <LNBItem value='플랜 관리' leadingIcon={IconWalletOutline20} selected={selected === 'plan'} onClick={() => setSelected('plan')} />
      <LNBItem value='요금 계산기' leadingIcon={IconMoneyOutline20} selected={selected === 'billing'} onClick={() => setSelected('billing')} />
    </LNBItemGroup>
    <LNBItemGroup title='리소스'>
      <LNBItem value='앱 다운로드' leadingIcon={IconDownloadOutline20} selected={selected === 'app'} onClick={() => setSelected('app')} />
    </LNBItemGroup>
  </>
);

export const Playground: Story = {
  parameters: { layout: 'centered' },
  render: (args) => {
    const [selected, setSelected] = useState('profile');
    return (
      <div style={{ width: args.iconOnly ? 'auto' : 280, height: 640 }}>
        <LNB
          {...args}
          style={{ height: '100%' }}
          title='설정'
          bottom={
            <>
              <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile name='사용자' avatarType='initial' trailingIcon={IconChevronRightOutline20} />
            </>
          }
        >
          <NavItems selected={selected} setSelected={setSelected} />
        </LNB>
      </div>
    );
  },
  argTypes: {
    iconOnly: { control: 'boolean' },
    lang: { control: 'select', options: ['ko', 'en'] },
  },
};

export const Overview: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>LNB (Left Navigation Bar)</h1>
        <p style={s.desc}>
          좌측 사이드바 네비게이션입니다. ItemGroup, Item, ItemProfile로 구성되며, iconOnly 모드와 접기 기능을 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Default vs Icon Only</p>
      <div style={s.card}>
        <div style={{ display: 'flex', gap: 24, height: 480 }}>
          <DefaultLNBDemo />
          <IconOnlyLNBDemo />
        </div>
      </div>

      <p style={s.sectionTitle}>Item States</p>
      <div style={s.card}>
        <div style={{ width: 280 }}>
          <LNB>
            <LNBItemGroup title='Item States'>
              <LNBItem value='Default' leadingIcon={IconPersonOutline20} />
              <LNBItem value='Selected' leadingIcon={IconPersonOutline20} selected />
              <LNBItem value='Disabled' leadingIcon={IconPersonOutline20} disabled />
            </LNBItemGroup>
          </LNB>
        </div>
      </div>

      <p style={s.sectionTitle}>Collapsible</p>
      <div style={s.card}>
        <CollapsibleDemo />
      </div>
    </div>
  ),
};

const DefaultLNBDemo = () => {
  const [selected, setSelected] = useState('profile');
  return (
    <div style={{ width: 280, flexShrink: 0 }}>
      <span style={{ fontSize: 11, color: '#8f9298', fontFamily: "'SF Mono', monospace", display: 'block', marginBottom: 8 }}>default</span>
      <LNB
        style={{ height: 440 }}
        title='설정'
        bottom={
          <>
            <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
            <Divider thickness={1} />
            <LNBItemProfile name='사용자' avatarType='initial' trailingIcon={IconChevronRightOutline20} />
          </>
        }
      >
        <NavItems selected={selected} setSelected={setSelected} />
      </LNB>
    </div>
  );
};

const IconOnlyLNBDemo = () => {
  const [selected, setSelected] = useState('profile');
  return (
    <div>
      <span style={{ fontSize: 11, color: '#8f9298', fontFamily: "'SF Mono', monospace", display: 'block', marginBottom: 8 }}>iconOnly</span>
      <LNB
        iconOnly
        style={{ height: 440 }}
        bottom={
          <>
            <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
            <LNBItemProfile name='사용자' avatarType='initial' />
          </>
        }
      >
        <NavItems selected={selected} setSelected={setSelected} />
      </LNB>
    </div>
  );
};

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <rect width='24' height='24' rx='4' fill='#6366F1' />
      <path d='M8 8h8v8H8z' fill='white' />
    </svg>
    <span style={{ fontWeight: 600, fontSize: 16 }}>Logo</span>
  </div>
);

const CollapsibleDemo = () => {
  const [selected, setSelected] = useState('profile');
  const [iconOnly, setIconOnly] = useState(false);

  return (
    <div style={{ width: iconOnly ? 60 : 280, height: 480, transition: 'width 0.2s' }}>
      <LNB
        iconOnly={iconOnly}
        style={{ height: '100%' }}
        title={
          <div style={{ display: 'flex', justifyContent: iconOnly ? 'center' : 'space-between', alignItems: 'center', padding: '8px 0' }}>
            {!iconOnly && <Logo />}
            <button onClick={() => setIconOnly(!iconOnly)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex' }}>
              <IconDockRightOutline20 style={{ width: 20, height: 20, flexShrink: 0 }} />
            </button>
          </div>
        }
        bottom={
          <>
            <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
            <Divider thickness={1} />
            <LNBItemProfile name='사용자' avatarType='initial' trailingIcon={IconChevronRightOutline20} />
          </>
        }
      >
        <NavItems selected={selected} setSelected={setSelected} />
      </LNB>
    </div>
  );
};
