import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { typographyStyles } from '../tokens';

const StyledTypography = styled.div<{
  $variant: keyof typeof typographyStyles;
  $fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
  $fontFamily?: 'en' | 'ko' | 'sans' | 'mono';
}>`
  ${({ $variant, $fontWeight = 'medium', $fontFamily = 'en' }) => {
    const style = typographyStyles[$variant];
    return `
      font-size: ${style.fontSize[0]};
      font-weight: ${style.weights[$fontWeight]};
      font-family: ${
        $fontFamily === 'en'
          ? style.families.en
          : $fontFamily === 'ko'
            ? style.families.ko
            : $fontFamily === 'mono'
              ? '"Geist Mono", monospace'
              : style.families.sans
      };
      letter-spacing: ${style.letterSpacing};
      line-height: ${style.lineHeight};
    `;
  }}
`;

const Typography = ({
  variant,
  children,
  fontWeight = 'medium',
  fontFamily = 'en',
}: {
  variant: keyof typeof typographyStyles;
  children: React.ReactNode;
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
  fontFamily?: 'en' | 'ko' | 'sans' | 'mono';
}) => (
  <StyledTypography $variant={variant} $fontWeight={fontWeight} $fontFamily={fontFamily}>
    {children}
  </StyledTypography>
);

const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(typographyStyles),
    },
    fontWeight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    fontFamily: {
      control: 'select',
      options: ['en', 'ko', 'sans', 'mono'],
    },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

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
  row: {
    display: 'flex',
    alignItems: 'baseline',
    padding: '14px 0',
    borderBottom: '1px solid #f0f0f2',
    gap: 20,
  } as React.CSSProperties,
  label: {
    width: 100,
    flexShrink: 0,
    fontSize: 12,
    fontWeight: 500,
    color: '#8f9298',
    fontFamily: "'SF Mono', monospace",
  } as React.CSSProperties,
  size: {
    width: 48,
    flexShrink: 0,
    fontSize: 12,
    color: '#b6b8bd',
    fontFamily: "'SF Mono', monospace",
  } as React.CSSProperties,
};

type TypoGroup = {
  title: string;
  items: {
    variant: keyof typeof typographyStyles;
    text: string;
  }[];
};

const groups: TypoGroup[] = [
  {
    title: 'Display',
    items: [
      { variant: 'display1', text: 'Display 1' },
      { variant: 'display2', text: 'Display 2' },
      { variant: 'display3', text: 'Display 3' },
      { variant: 'display4', text: 'Display 4' },
      { variant: 'display5', text: 'Display 5' },
    ],
  },
  {
    title: 'Title',
    items: [
      { variant: 'title1', text: 'Title 1' },
      { variant: 'title2', text: 'Title 2' },
      { variant: 'title3', text: 'Title 3' },
      { variant: 'title4', text: 'Title 4' },
    ],
  },
  {
    title: 'Heading',
    items: [
      { variant: 'heading1', text: 'Heading 1' },
      { variant: 'heading2', text: 'Heading 2' },
      { variant: 'heading3', text: 'Heading 3' },
    ],
  },
  {
    title: 'Body',
    items: [
      { variant: 'body1', text: '한글과 English가 혼합된 본문 텍스트입니다.' },
      { variant: 'body2', text: '한글과 English가 혼합된 본문 텍스트입니다.' },
      { variant: 'body3', text: '한글과 English가 혼합된 본문 텍스트입니다.' },
    ],
  },
  {
    title: 'Caption',
    items: [
      { variant: 'caption1', text: '작은 설명 텍스트 Caption 1' },
      { variant: 'caption2', text: '작은 설명 텍스트 Caption 2' },
    ],
  },
];

export const Playground: Story = {
  name: 'Playground',
  args: {
    variant: 'title2',
    children: 'The quick brown fox jumps over the lazy dog',
    fontWeight: 'medium',
    fontFamily: 'en',
  },
  render: (args) => {
    const style = typographyStyles[args.variant!];
    return (
      <div style={{ ...s.page, paddingTop: 48 }}>
        <div
          style={{
            padding: '40px 32px',
            border: '1px solid #e6e7e9',
            borderRadius: 16,
            marginBottom: 24,
          }}
        >
          <Typography
            variant={args.variant!}
            fontWeight={args.fontWeight}
            fontFamily={args.fontFamily}
          >
            {args.children}
          </Typography>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 12,
          }}
        >
          {[
            { label: 'Font Size', value: style.fontSize[0] },
            { label: 'Line Height', value: style.lineHeight[0] },
            { label: 'Letter Spacing', value: style.letterSpacing },
            { label: 'Weight', value: String(style.weights[args.fontWeight || 'medium']) },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: '14px 16px',
                background: '#f7f7f8',
                borderRadius: 10,
              }}
            >
              <div style={{ fontSize: 11, color: '#8f9298', marginBottom: 4 }}>{item.label}</div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#171719',
                  fontFamily: "'SF Mono', monospace",
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const TypeScale: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Type Scale</h1>
        <p style={s.desc}>
          Display부터 Caption까지 16단계의 타이포그래피 시스템입니다.
          <br />
          3단계 반응형 브레이크포인트 (Desktop / Tablet / Mobile)를 지원합니다.
        </p>
      </div>

      {groups.map((group) => (
        <div key={group.title} style={{ marginBottom: 40 }}>
          <p style={s.sectionTitle}>{group.title}</p>
          {group.items.map(({ variant, text }) => {
            const style = typographyStyles[variant];
            return (
              <div key={variant} style={s.row}>
                <span style={s.label}>{variant}</span>
                <span style={s.size}>{style.fontSize[0]}</span>
                <Typography
                  variant={variant}
                  fontFamily={['body1', 'body2', 'body3', 'caption1', 'caption2'].includes(variant) ? 'sans' : 'en'}
                >
                  {text}
                </Typography>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  ),
};

export const FontWeights: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Font Weights</h1>
        <p style={s.desc}>4단계 폰트 웨이트로 텍스트의 강조도를 조절합니다.</p>
      </div>

      {(['regular', 'medium', 'semibold', 'bold'] as const).map((weight) => (
        <div key={weight} style={s.row}>
          <span style={{ ...s.label, width: 120 }}>
            {weight} ({typographyStyles.body2.weights[weight]})
          </span>
          <Typography variant="title2" fontWeight={weight} fontFamily="en">
            The quick brown fox jumps
          </Typography>
        </div>
      ))}
    </div>
  ),
};

export const FontFamilies: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Font Families</h1>
        <p style={s.desc}>영문, 한글, 혼합, 모노스페이스 4가지 폰트 패밀리를 지원합니다.</p>
      </div>

      {([
        { family: 'en' as const, label: 'English (DM Sans)', text: 'The quick brown fox jumps over the lazy dog' },
        { family: 'ko' as const, label: 'Korean (Pretendard)', text: '프리텐다드 폰트로 표시되는 한글 텍스트입니다' },
        { family: 'sans' as const, label: 'Mixed (Sans)', text: '한글과 English가 혼합된 텍스트입니다' },
        { family: 'mono' as const, label: 'Monospace (Geist Mono)', text: 'const greeting = "Hello World";' },
      ]).map(({ family, label, text }) => (
        <div key={family} style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: '#8f9298', marginBottom: 8 }}>{label}</div>
          <Typography variant="title3" fontFamily={family}>
            {text}
          </Typography>
        </div>
      ))}
    </div>
  ),
};
