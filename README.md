# design-system

React와 TypeScript로 구축된 포괄적인 디자인 시스템입니다.

## 설치

```bash
npm install design-system
# 또는
yarn add design-system
# 또는
pnpm add design-system
```

## 사용법

### 기본 사용법

```tsx
import { Badge, Chip, SolidButton } from 'design-system';

function App() {
  return (
    <div>
      <SolidButton size='medium' variant='primary'>
        클릭하세요
      </SolidButton>
      <Badge type='positive' size='small'>
        성공
      </Badge>
      <Chip type='default' size='medium'>
        태그
      </Chip>
    </div>
  );
}
```

### 디자인 토큰 사용

```tsx
import { color, fontSize, spacing } from 'design-system';

const customStyles = {
  backgroundColor: color.primary[500],
  padding: spacing.md,
  fontSize: fontSize.body.medium,
};
```

### CSS 스타일 가져오기

```tsx
// 필요한 CSS 파일들을 import
import 'design-system/dist/styles/body.css';
import 'design-system/dist/styles/fonts.css';
```

## 컴포넌트

### Button

버튼 컴포넌트는 다양한 스타일과 크기를 제공합니다.

```tsx
import { SolidButton, OutlineButton, TextButton, IconButton } from 'design-system';

// Solid Button
<SolidButton variant="primary" size="medium">
  기본 버튼
</SolidButton>

// Outline Button
<OutlineButton variant="secondary" size="large">
  아웃라인 버튼
</OutlineButton>

// Text Button
<TextButton size="small">
  텍스트 버튼
</TextButton>

// Icon Button
<IconButton variant="primary" size="medium">
  <YourIcon />
</IconButton>
```

### Badge

상태나 카테고리를 표시하는 배지 컴포넌트입니다.

```tsx
import { Badge } from 'design-system';

<Badge type="positive" size="medium">성공</Badge>
<Badge type="negative" size="small">오류</Badge>
<Badge type="cautionary" size="large">경고</Badge>
```

### Chip

선택 가능한 태그나 필터 컴포넌트입니다.

```tsx
import { Chip } from 'design-system';

<Chip type="default" size="medium" state="default">
  기본 칩
</Chip>
<Chip type="selected" size="small" state="active">
  선택된 칩
</Chip>
```

## 디자인 토큰

### 색상

```tsx
import { brandColor, color, textColor } from 'design-system';

// 기본 색상
color.primary[500];
color.gray[100];

// 브랜드 색상
brandColor.primary;
brandColor.secondary;

// 텍스트 색상
textColor.primary;
textColor.secondary;
```

### 타이포그래피

```tsx
import { fontSize, fontWeight, lineHeight } from 'design-system';

// 폰트 크기
fontSize.display.large;
fontSize.heading.medium;
fontSize.body.small;

// 폰트 굵기
fontWeight.regular;
fontWeight.medium;
fontWeight.bold;

// 줄 높이
lineHeight.tight;
lineHeight.normal;
lineHeight.loose;
```

### 간격과 레이아웃

```tsx
import { radius, spacing } from 'design-system';

// 간격
spacing.xs; // 4px
spacing.sm; // 8px
spacing.md; // 16px
spacing.lg; // 24px
spacing.xl; // 32px

// 둥근 모서리
radius.sm; // 4px
radius.md; // 8px
radius.lg; // 12px
radius.xl; // 16px
```

## TypeScript 지원

이 라이브러리는 완전한 TypeScript 지원을 제공합니다. 모든 컴포넌트와 토큰에 대한 타입 정의가 포함되어 있습니다.

```tsx
import type { BadgeProps, ButtonProps, ChipProps } from 'design-system';
```

## 개발 환경 설정

이 프로젝트를 개발하거나 기여하려면:

```bash
# 저장소 클론
git clone https://github.com/2najung/design-system.git

# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# Storybook 실행
npm run storybook

# 라이브러리 빌드
npm run lib:build
```

## 라이선스

MIT License

## 기여

이슈나 풀 리퀘스트를 통해 기여해주세요.

## 문서

더 자세한 사용법과 예제는 Storybook을 참고하세요.
