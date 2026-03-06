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
    const weight = $fontWeight;

    return `
      font-size: ${style.fontSize[0]};
      font-weight: ${style.weights[weight]};
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
}) => {
  return (
    <StyledTypography $variant={variant} $fontWeight={fontWeight} $fontFamily={fontFamily}>
      {children}
    </StyledTypography>
  );
};

const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '디자인 시스템의 타이포그래피 토큰을 기반으로 한 스타일입니다. 폰트 웨이트(400~700)와 폰트 패밀리(영문/한글/혼합)를 선택할 수 있습니다.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display1',
        'display2',
        'display3',
        'display4',
        'display5',
        'title1',
        'title2',
        'title3',
        'title4',
        'heading1',
        'heading2',
        'heading3',
        'body1',
        'body2',
        'body3',
        'caption1',
        'caption2',
      ],
      description: '타이포그래피 변형을 선택합니다.',
    },
    fontWeight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
      description: '폰트 웨이트를 선택합니다.',
    },
    fontFamily: {
      control: 'select',
      options: ['en', 'ko', 'sans', 'mono'],
      description: '폰트 패밀리를 선택합니다.',
    },
    children: {
      control: 'text',
      description: '표시할 텍스트 내용',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: 'body2',
    children: '기본 텍스트 스타일입니다.',
    fontWeight: 'regular',
    fontFamily: 'sans',
  },
};

export const DisplayStyles: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Container>
      <SectionTitle>Display Styles (영문 폰트, 500 weight 기본)</SectionTitle>
      <Typography variant='display1' fontFamily='en'>
        Display 1 - The quick brown fox
      </Typography>
      <Typography variant='display2' fontFamily='en'>
        Display 2 - The quick brown fox
      </Typography>
      <Typography variant='display3' fontFamily='en'>
        Display 3 - The quick brown fox
      </Typography>
      <Typography variant='display4' fontFamily='en'>
        Display 4 - The quick brown fox
      </Typography>
      <Typography variant='display5' fontFamily='en'>
        Display 5 - The quick brown fox
      </Typography>
    </Container>
  ),
};

export const TitleStyles: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Container>
      <SectionTitle>Title Styles (영문 폰트, 500 weight 기본)</SectionTitle>
      <Typography variant='title1' fontFamily='en'>
        Title 1 - The quick brown fox
      </Typography>
      <Typography variant='title2' fontFamily='en'>
        Title 2 - The quick brown fox
      </Typography>
      <Typography variant='title3' fontFamily='en'>
        Title 3 - The quick brown fox
      </Typography>
      <Typography variant='title4' fontFamily='en'>
        Title 4 - The quick brown fox
      </Typography>
    </Container>
  ),
};

export const HeadingStyles: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Container>
      <SectionTitle>Heading Styles (영문 폰트, 500 weight 기본)</SectionTitle>
      <Typography variant='heading1' fontFamily='en'>
        Heading 1 - The quick brown fox
      </Typography>
      <Typography variant='heading2' fontFamily='en'>
        Heading 2 - The quick brown fox
      </Typography>
      <Typography variant='heading3' fontFamily='en'>
        Heading 3 - The quick brown fox
      </Typography>
    </Container>
  ),
};

export const BodyStyles: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Container>
      <SectionTitle>Body Styles (혼합 폰트, 400 weight 기본)</SectionTitle>
      <Typography variant='body1' fontFamily='sans'>
        Body 1 - 한글과 English가 혼합된 텍스트입니다.
      </Typography>
      <Typography variant='body2' fontFamily='sans'>
        Body 2 - 한글과 English가 혼합된 텍스트입니다.
      </Typography>
      <Typography variant='body3' fontFamily='sans'>
        Body 3 - 한글과 English가 혼합된 텍스트입니다.
      </Typography>
    </Container>
  ),
};

export const CaptionStyles: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <Container>
      <SectionTitle>Caption Styles (혼합 폰트, 400 weight 기본)</SectionTitle>
      <Typography variant='caption1' fontFamily='sans'>
        Caption 1 - 작은 설명 텍스트입니다.
      </Typography>
      <Typography variant='caption2' fontFamily='sans'>
        Caption 2 - 작은 설명 텍스트입니다.
      </Typography>
    </Container>
  ),
};

export const FontWeightVariations: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <LargeContainer>
      <SectionTitle>Font Weight Variations</SectionTitle>

      <Container>
        <SubTitle>Display 1 Weight Variations</SubTitle>
        <Typography variant='display1' fontWeight='regular' fontFamily='en'>
          Display 1 Regular (400) - The quick brown fox
        </Typography>
        <Typography variant='display1' fontWeight='medium' fontFamily='en'>
          Display 1 Medium (500) - The quick brown fox
        </Typography>
        <Typography variant='display1' fontWeight='semibold' fontFamily='en'>
          Display 1 Semibold (600) - The quick brown fox
        </Typography>
        <Typography variant='display1' fontWeight='bold' fontFamily='en'>
          Display 1 Bold (700) - The quick brown fox
        </Typography>
      </Container>

      <Container>
        <SubTitle>Body 2 Weight Variations</SubTitle>
        <Typography variant='body2' fontWeight='regular' fontFamily='sans'>
          Body 2 Regular (400) - 한글과 English가 혼합된 텍스트입니다.
        </Typography>
        <Typography variant='body2' fontWeight='medium' fontFamily='sans'>
          Body 2 Medium (500) - 한글과 English가 혼합된 텍스트입니다.
        </Typography>
        <Typography variant='body2' fontWeight='semibold' fontFamily='sans'>
          Body 2 Semibold (600) - 한글과 English가 혼합된 텍스트입니다.
        </Typography>
        <Typography variant='body2' fontWeight='bold' fontFamily='sans'>
          Body 2 Bold (700) - 한글과 English가 혼합된 텍스트입니다.
        </Typography>
      </Container>
    </LargeContainer>
  ),
};

export const FontFamilyComparison: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <LargeContainer>
      <SectionTitle>Font Family Comparison</SectionTitle>

      <Container>
        <SubTitle>영문 폰트 (DM Sans)</SubTitle>
        <Typography variant='body2' fontFamily='en'>
          This text is displayed in DM Sans font.
        </Typography>
        <Typography variant='body2' fontWeight='bold' fontFamily='en'>
          This text is displayed in DM Sans Bold font.
        </Typography>
      </Container>

      <Container>
        <SubTitle>한글 폰트 (Pretendard)</SubTitle>
        <Typography variant='body2' fontFamily='ko'>
          프리텐다드 폰트로 표시되는 한글 텍스트입니다.
        </Typography>
        <Typography variant='body2' fontWeight='bold' fontFamily='ko'>
          프리텐다드 Bold 폰트로 표시되는 한글 텍스트입니다.
        </Typography>
      </Container>

      <Container>
        <SubTitle>혼합 폰트 (Sans)</SubTitle>
        <Typography variant='body2' fontFamily='sans'>
          한글과 English가 혼합된 텍스트입니다.
        </Typography>
        <Typography variant='body2' fontWeight='bold' fontFamily='sans'>
          한글과 English가 혼합된 Bold 텍스트입니다.
        </Typography>
      </Container>

      <Container>
        <SubTitle>모노스페이스 폰트 (Geist Mono)</SubTitle>
        <Typography variant='body2' fontFamily='mono'>
          const greeting = "Hello World";
        </Typography>
        <Typography variant='body2' fontWeight='bold' fontFamily='mono'>
          function() {"{ return 'Geist Mono Bold'; }"}
        </Typography>
      </Container>
    </LargeContainer>
  ),
};

export const TokenSystem: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <LargeContainer>
      <SectionTitle>Typography Token System</SectionTitle>

      <GridContainer>
        <GridItem>
          <SubTitle>Display Styles</SubTitle>
          <SmallContainer>
            <TokenRow>
              <TokenLabel>Display1</TokenLabel>
              <TokenSize>40px</TokenSize>
              <Typography variant='display1' fontFamily='en'>
                Sample Text
              </Typography>
            </TokenRow>
            <TokenRow>
              <TokenLabel>Display2</TokenLabel>
              <TokenSize>48px</TokenSize>
              <Typography variant='display2' fontFamily='en'>
                Sample Text
              </Typography>
            </TokenRow>
            <TokenRow>
              <TokenLabel>Display3</TokenLabel>
              <TokenSize>56px</TokenSize>
              <Typography variant='display3' fontFamily='en'>
                Sample Text
              </Typography>
            </TokenRow>
            <TokenRow>
              <TokenLabel>Display4</TokenLabel>
              <TokenSize>64px</TokenSize>
              <Typography variant='display4' fontFamily='en'>
                Sample Text
              </Typography>
            </TokenRow>
            <TokenRow>
              <TokenLabel>Display5</TokenLabel>
              <TokenSize>80px</TokenSize>
              <Typography variant='display5' fontFamily='en'>
                Sample Text
              </Typography>
            </TokenRow>
          </SmallContainer>
        </GridItem>

        <GridItem>
          <SubTitle>Font Weights</SubTitle>
          <SmallContainer>
            <TokenRow>
              <WeightLabel>400</WeightLabel>
              <Typography variant='body2' fontWeight='regular'>
                Regular Weight
              </Typography>
            </TokenRow>
            <TokenRow>
              <WeightLabel>500</WeightLabel>
              <Typography variant='body2' fontWeight='medium'>
                Medium Weight
              </Typography>
            </TokenRow>
            <TokenRow>
              <WeightLabel>600</WeightLabel>
              <Typography variant='body2' fontWeight='semibold'>
                Semibold Weight
              </Typography>
            </TokenRow>
            <TokenRow>
              <WeightLabel>700</WeightLabel>
              <Typography variant='body2' fontWeight='bold'>
                Bold Weight
              </Typography>
            </TokenRow>
          </SmallContainer>
        </GridItem>
      </GridContainer>
    </LargeContainer>
  ),
};

export const UsageExamples: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <ExampleContainer>
      <SectionTitle>실제 사용 예시</SectionTitle>

      <ExampleCard>
        <Typography variant='title2' fontFamily='ko' fontWeight='bold'>
          블로그 포스트 제목 예시
        </Typography>
        <ExampleMeta>
          <Typography variant='body2' fontWeight='regular' fontFamily='sans'>
            2024년 3월 15일 • 5분 읽기
          </Typography>
        </ExampleMeta>
        <ExampleContent>
          <Typography variant='body2' fontWeight='regular' fontFamily='sans'>
            이것은 블로그 포스트의 본문 내용입니다. 한글과 English가 자연스럽게 혼합되어 있으며,
            적절한 줄간격과 폰트 크기로 가독성을 높였습니다.
          </Typography>
        </ExampleContent>
        <ExampleTags>
          <Typography variant='caption1' fontWeight='regular' fontFamily='sans'>
            태그: 디자인시스템, 타이포그래피, 웹개발
          </Typography>
        </ExampleTags>
      </ExampleCard>

      <ProductCard>
        <Typography variant='heading2' fontFamily='en' fontWeight='semibold'>
          Product Card
        </Typography>
        <ProductDescription>
          <Typography variant='body2' fontWeight='regular' fontFamily='sans'>
            제품에 대한 간단한 설명이 들어갑니다. 이 텍스트는 body2 스타일을 사용합니다.
          </Typography>
        </ProductDescription>
        <ProductPrice>
          <Typography variant='title1' fontFamily='en' fontWeight='bold'>
            $29.99
          </Typography>
        </ProductPrice>
        <ProductInfo>
          <Typography variant='caption2' fontWeight='regular' fontFamily='sans'>
            무료 배송 • 재고 있음
          </Typography>
        </ProductInfo>
      </ProductCard>
    </ExampleContainer>
  ),
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LargeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TokenRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const TokenLabel = styled.span`
  font-size: 14px;
  color: #6b7280;
  width: 64px;
`;

const TokenSize = styled.span`
  font-size: 14px;
  color: #9ca3af;
  width: 48px;
`;

const WeightLabel = styled.span`
  font-size: 14px;
  color: #6b7280;
  width: 48px;
`;

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ExampleCard = styled.div`
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;

const ExampleMeta = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
  color: #4b5563;
`;

const ExampleContent = styled.div`
  margin-bottom: 16px;
`;

const ExampleTags = styled.div`
  color: #6b7280;
`;

const ProductCard = styled.div`
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #f9fafb;
`;

const ProductDescription = styled.div`
  margin-top: 8px;
  margin-bottom: 12px;
`;

const ProductPrice = styled.div`
  margin-bottom: 8px;
  color: #2563eb;
`;

const ProductInfo = styled.div`
  color: #6b7280;
`;
