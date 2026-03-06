import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from '../components';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    thickness: {
      control: { type: 'select' },
      options: [1, 2, 4, 6, 8, 12],
    },
  },
  args: { orientation: 'horizontal', thickness: 2 },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: (args) => {
    const isVertical = args.orientation === 'vertical';
    const wrapperStyle: React.CSSProperties = isVertical
      ? { height: 160, padding: 16, display: 'flex', alignItems: 'stretch' }
      : { width: 360, padding: 16 };

    return (
      <div style={wrapperStyle}>
        {isVertical ? (
          <>
            <div style={{ flex: 1, paddingRight: 12 }}>왼쪽</div>
            <Divider {...args} style={{ margin: '0 12px' }} />
            <div style={{ flex: 1, paddingLeft: 12 }}>오른쪽</div>
          </>
        ) : (
          <>
            <div style={{ marginBottom: 12 }}>상단 콘텐츠</div>
            <Divider {...args} />
            <div style={{ marginTop: 12 }}>하단 콘텐츠</div>
          </>
        )}
      </div>
    );
  },
};

export const Vertical: Story = {
  args: { orientation: 'vertical', thickness: 4 },
  render: (args) => (
    <div
      style={{
        height: 160,
        padding: 16,
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      <div style={{ flex: 1, paddingRight: 12 }}>왼쪽</div>
      <Divider {...args} style={{ margin: '0 12px' }} />
      <div style={{ flex: 1, paddingLeft: 12 }}>오른쪽</div>
    </div>
  ),
};

export const ThicknessVariants: Story = {
  render: () => (
    <div style={{ width: 360, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {[1, 2, 4, 6, 8, 12].map((t) => (
        <Divider key={t} thickness={t as any} />
      ))}
    </div>
  ),
};
