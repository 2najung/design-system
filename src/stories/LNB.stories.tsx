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
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    // LNB 컨테이너
    lang: { control: { type: 'select' }, options: ['ko', 'en'] },
    iconOnly: { control: { type: 'boolean' } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 데모용 하위 아이템 템플릿
const ItemsDemo = ({ selected, setSelected }: any) => (
  <>
    <LNBItemGroup title='설정'>
      <LNBItem
        value='내 정보'
        leadingIcon={IconPersonOutline20}
        selected={selected === 'profile'}
        onClick={() => setSelected('profile')}
      />
      <LNBItem
        value='플랜 관리'
        leadingIcon={IconWalletOutline20}
        selected={selected === 'plan'}
        onClick={() => setSelected('plan')}
      />
      <LNBItem
        value='요금 계산기'
        leadingIcon={IconMoneyOutline20}
        selected={selected === 'billing'}
        onClick={() => setSelected('billing')}
      />
    </LNBItemGroup>

    <LNBItemGroup title='리소스'>
      <LNBItem
        value='앱 다운로드'
        leadingIcon={IconDownloadOutline20}
        selected={selected === 'app'}
        onClick={() => setSelected('app')}
      />
    </LNBItemGroup>
  </>
);

export const Overview: Story = {
  render: (args) => {
    const [selected, setSelected] = useState('profile');
    const containerWidth = args.iconOnly ? '100%' : '280px';
    return (
      <div style={{ width: containerWidth, height: 640 }}>
        <LNB
          {...args}
          style={{ height: '100%' }}
          title='설정'
          bottom={
            <>
              <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile
                name='김규빅'
                avatarType='initial'
                trailingIcon={IconChevronRightOutline20}
              />
            </>
          }
        >
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>
    );
  },
};

export const Item_Variants: Story = {
  render: () => {
    return (
      <div style={{ width: 320 }}>
        <LNB>
          <LNBItemGroup title='Item Variants'>
            <LNBItem value='Default' leadingIcon={IconPersonOutline20} />
            <LNBItem value='Selected' leadingIcon={IconPersonOutline20} selected />
            <LNBItem value='Disabled' leadingIcon={IconPersonOutline20} disabled />
          </LNBItemGroup>
        </LNB>
      </div>
    );
  },
};

export const WithCustomLang: Story = {
  args: { lang: 'en' },
  render: (args) => {
    const [selected, setSelected] = useState('profile');
    return (
      <div style={{ width: 280 }}>
        <LNB {...args} title='Settings'>
          <LNBItemGroup title='Settings'>
            <LNBItem
              value='Profile'
              leadingIcon={IconPersonOutline20}
              selected={selected === 'profile'}
              onClick={() => setSelected('profile')}
            />
            <LNBItem
              value='Plan'
              leadingIcon={IconWalletOutline20}
              selected={selected === 'plan'}
              onClick={() => setSelected('plan')}
            />
            <LNBItem
              value='Billing'
              leadingIcon={IconMoneyOutline20}
              selected={selected === 'billing'}
              onClick={() => setSelected('billing')}
            />
          </LNBItemGroup>
          <LNBItemGroup title='Resources'>
            <LNBItem
              value='App Download'
              leadingIcon={IconDownloadOutline20}
              selected={selected === 'app'}
              onClick={() => setSelected('app')}
            />
          </LNBItemGroup>
        </LNB>
      </div>
    );
  },
};

export const WithBottomPinned: Story = {
  render: (args) => {
    const [selected, setSelected] = useState('profile');
    return (
      <div style={{ width: 280, height: 640 }}>
        <LNB
          {...args}
          style={{ height: '100%' }}
          title='설정'
          bottom={
            <>
              <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItem value='로그아웃' leadingIcon={IconLogoutOutline20} />
            </>
          }
        >
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>
    );
  },
};

export const IconOnly: Story = {
  render: () => {
    const [selected, setSelected] = useState('profile');
    return (
      <div style={{ height: 640 }}>
        <LNB
          iconOnly={true}
          style={{ height: '100%' }}
          bottom={
            <>
              <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
              <LNBItem value='로그아웃' leadingIcon={IconLogoutOutline20} />
            </>
          }
        >
          <LNBItemGroup title='설정'>
            <LNBItem
              value='내 정보'
              leadingIcon={IconPersonOutline20}
              selected={selected === 'profile'}
              onClick={() => setSelected('profile')}
            />
            <LNBItem
              value='플랜 관리'
              leadingIcon={IconWalletOutline20}
              selected={selected === 'plan'}
              onClick={() => setSelected('plan')}
            />
            <LNBItem
              value='요금 계산기'
              leadingIcon={IconMoneyOutline20}
              selected={selected === 'billing'}
              onClick={() => setSelected('billing')}
            />
          </LNBItemGroup>
          <LNBItemGroup title='리소스'>
            <LNBItem
              value='앱 다운로드'
              leadingIcon={IconDownloadOutline20}
              selected={selected === 'app'}
              onClick={() => setSelected('app')}
            />
          </LNBItemGroup>
        </LNB>
      </div>
    );
  },
};

export const WithProfile: Story = {
  render: () => {
    const [selected, setSelected] = useState('profile');
    return (
      <div style={{ height: 640, display: 'flex', gap: '16px' }}>
        <LNB
          iconOnly={true}
          style={{ height: '100%' }}
          bottom={
            <>
              <LNBItemProfile name='김규빅' avatarType='initial' />
            </>
          }
        >
          <LNBItemGroup title='설정'>
            <LNBItem
              value='내 정보'
              leadingIcon={IconPersonOutline20}
              selected={selected === 'profile'}
              onClick={() => setSelected('profile')}
            />
            <LNBItem
              value='플랜 관리'
              leadingIcon={IconWalletOutline20}
              selected={selected === 'plan'}
              onClick={() => setSelected('plan')}
            />
          </LNBItemGroup>
        </LNB>

        <LNB
          style={{ height: '100%' }}
          title='설정'
          bottom={
            <>
              <LNBItemProfile
                name='김규빅'
                avatarType='initial'
                trailingIcon={IconChevronRightOutline20}
              />
            </>
          }
        >
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>
    );
  },
};

export const WithProfileAndItems: Story = {
  render: () => {
    const [selected, setSelected] = useState('profile');
    return (
      <div style={{ height: 640, display: 'flex', gap: '16px' }}>
        <LNB
          iconOnly={true}
          style={{ height: '100%' }}
          bottom={
            <>
              <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile name='김규빅' avatarType='initial' />
            </>
          }
        >
          <LNBItemGroup title='설정'>
            <LNBItem
              value='내 정보'
              leadingIcon={IconPersonOutline20}
              selected={selected === 'profile'}
              onClick={() => setSelected('profile')}
            />
            <LNBItem
              value='플랜 관리'
              leadingIcon={IconWalletOutline20}
              selected={selected === 'plan'}
              onClick={() => setSelected('plan')}
            />
            <LNBItem
              value='요금 계산기'
              leadingIcon={IconMoneyOutline20}
              selected={selected === 'billing'}
              onClick={() => setSelected('billing')}
            />
          </LNBItemGroup>
          <LNBItemGroup title='리소스'>
            <LNBItem
              value='앱 다운로드'
              leadingIcon={IconDownloadOutline20}
              selected={selected === 'app'}
              onClick={() => setSelected('app')}
            />
          </LNBItemGroup>
        </LNB>

        <LNB
          style={{ height: '100%' }}
          title='설정'
          bottom={
            <>
              <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile
                name='김규빅'
                avatarType='initial'
                trailingIcon={IconChevronRightOutline20}
              />
            </>
          }
        >
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>
    );
  },
};

// 로고 + 접기 버튼이 있는 커스텀 헤더 예시
const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <rect width='24' height='24' rx='4' fill='#6366F1' />
      <path d='M8 8h8v8H8z' fill='white' />
    </svg>
    <span style={{ fontWeight: 600, fontSize: '16px' }}>Logo</span>
  </div>
);

const CollapseButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <IconDockRightOutline20 style={{ width: '20px', height: '20px', flexShrink: 0 }} />
  </button>
);

const CustomHeader = ({ iconOnly, onToggle }: { iconOnly: boolean; onToggle: () => void }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: iconOnly ? 'center' : 'space-between',
      alignItems: 'center',
      padding: '8px 0',
    }}
  >
    {!iconOnly && <Logo />}
    <CollapseButton onClick={onToggle} />
  </div>
);

export const WithCustomHeader: Story = {
  render: () => {
    const [selected, setSelected] = useState('profile');
    const [iconOnly, setIconOnly] = useState(false);

    return (
      <div style={{ width: iconOnly ? '60px' : '280px', height: 640 }}>
        <LNB
          iconOnly={iconOnly}
          style={{ height: '100%' }}
          title={<CustomHeader iconOnly={iconOnly} onToggle={() => setIconOnly(!iconOnly)} />}
          bottom={
            <>
              <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile
                name='김규빅'
                avatarType='initial'
                trailingIcon={IconChevronRightOutline20}
              />
            </>
          }
        >
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>
    );
  },
};
