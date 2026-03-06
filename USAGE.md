# design-system 사용법

## 설치

```bash
npm install design-system
```

## 기본 사용법

### 컴포넌트 Import

```tsx
import {
  Badge,
  Chip,
  IconButton,
  OutlineButton,
  SolidButton,
  TextButton,
} from 'design-system';
```

### 디자인 토큰 Import

```tsx
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  radius,
  spacing,
  typography,
  typographyCSS,
} from 'design-system';
```

## 컴포넌트 사용 예시

### Button

```tsx
// 기본 버튼
<SolidButton variant="primary" size="medium">
  확인
</SolidButton>

<OutlineButton variant="secondary" size="small">
  취소
</OutlineButton>

<TextButton variant="negative" size="large">
  삭제
</TextButton>

// 아이콘 버튼
<IconButton
  icon={<SearchIcon />}
  variant="primary"
  size="medium"
  aria-label="검색"
/>
```

### Badge

```tsx
<Badge variant="positive" type="solid">성공</Badge>
<Badge variant="negative" type="outline">실패</Badge>
<Badge variant="cautionary" type="soft">경고</Badge>
```

### Chip

```tsx
<Chip type="outline" size="medium">태그</Chip>
<Chip type="solid" size="small">카테고리</Chip>
```

## 디자인 토큰 사용 예시

### 타이포그래피

````tsx
import {
  fontSize,
  fontWeight,
  fontFamily,
  typography,
  typographyCSS,
} from "design-system";

// 개별 속성 사용
const StyledTitle = styled.h1`
  font-size: ${fontSize.t1}; // 48px
  font-weight: ${fontWeight[700]};
  font-family: ${fontFamily.ko};
`;

// 타이포그래피 함수 사용 (권장)
const StyledHeading = styled.h1`
  ${typography('en', 'display1')}
`;

// 커스터마이징
const CustomHeading = styled.h1`
  ${typography('ko', 'display1', 'bold')}
`;

// 간단한 CSS 문자열 사용
const SimpleTitle = styled.h1`
  ${typographyCSS.display1}
`;

// 또는 스프레드 문법으로 한 번에 적용
const StyledText = styled.p`
  ${typographyCSS.body1}
`;

// 간단한 CSS 문자열 사용 (권장)
const SimpleTitle = styled.h1`
  ${typographyCSS.display1}
`;

const SimpleBody = styled.p`
  ${typographyCSS.body2}
`;

const SimpleCaption = styled.span`
  ${typographyCSS.caption1}
`;

### 색상

```tsx
import { color } from "design-system";

const StyledDiv = styled.div`
  background-color: ${color.brand[500]};
  color: ${color.text.primary};
  border: 1px solid ${color.border.primary};
`;
````

### 간격 및 반지름

```tsx
import { radius, spacing } from 'design-system';

const StyledCard = styled.div`
  padding: ${spacing[16]};
  margin: ${spacing[8]};
  border-radius: ${radius[8]};
`;
```

## TypeScript 지원

모든 컴포넌트와 토큰은 완전한 TypeScript 지원을 제공합니다. IDE에서 자동완성과 타입 체크를 활용하세요.

```tsx
import type { BadgeProps, SolidButtonProps } from 'design-system';

const MyButton: React.FC<SolidButtonProps> = (props) => {
  return <SolidButton {...props} />;
};
```

## 스타일링 방법

### styled-components와 함께 사용

```tsx
import styled from 'styled-components';

import { SolidButton, color, spacing } from 'design-system';

const CustomButton = styled(SolidButton)`
  margin: ${spacing[12]};
  box-shadow: 0 4px 8px ${color.shadow.medium};
`;
```

### Tailwind CSS와 함께 사용

```tsx
import { SolidButton } from 'design-system';

<div className='flex gap-4 p-6'>
  <SolidButton variant='primary' size='medium'>
    버튼
  </SolidButton>
</div>;
```

## 주요 Props

### Button Props

- `variant`: 'primary' | 'secondary' | 'positive' | 'negative' | 'cautionary'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean
- `loading`: boolean (SolidButton, OutlineButton만)

### Badge Props

- `variant`: 'positive' | 'negative' | 'cautionary' | 'info'
- `type`: 'solid' | 'outline' | 'soft'

### Chip Props

- `type`: 'outline' | 'solid'
- `size`: 'small' | 'medium' | 'large'

## 사용 가능한 타이포그래피 스타일

### Display 스타일 (대형 제목용)

- `typography.display1` ~ `typography.display5`
- 폰트 웨이트: 400~700 범위 지원 (`weights.regular`, `weights.medium`, `weights.semibold`, `weights.bold`)
- 폰트 패밀리: 영문/한글 선택 가능 (`families.en`, `families.ko`, `families.sans`)
- 기본값: `fontWeight[500]` (medium), `fontFamily.en` (영문 폰트)

### Title 스타일 (제목용)

- `typography.title1` ~ `typography.title4`
- 폰트 웨이트: 400~700 범위 지원 (`weights.regular`, `weights.medium`, `weights.semibold`, `weights.bold`)
- 폰트 패밀리: 영문/한글 선택 가능 (`families.en`, `families.ko`, `families.sans`)
- 기본값: `fontWeight[500]` (medium), `fontFamily.en` (영문 폰트)
- 자간: Title1은 `letterSpacing.md`, Title2~4는 `letterSpacing.lg`

### Heading 스타일 (소제목용)

- `typography.heading1` ~ `typography.heading3`
- 폰트 웨이트: 400~700 범위 지원 (`weights.regular`, `weights.medium`, `weights.semibold`, `weights.bold`)
- 폰트 패밀리: 영문/한글 선택 가능 (`families.en`, `families.ko`, `families.sans`)
- 기본값: `fontWeight[500]` (medium), `fontFamily.en` (영문 폰트)
- 자간: `letterSpacing.md`

### Body 스타일 (본문용)

- `typography.body1` ~ `typography.body3`
- 폰트 웨이트: 400~700 범위 지원 (`weights.regular`, `weights.medium`, `weights.semibold`, `weights.bold`)
- 폰트 패밀리: 영문/한글 선택 가능 (`families.en`, `families.ko`, `families.sans`)
- 기본값: `fontWeight[400]` (regular), `fontFamily.sans` (혼합 폰트)
- 자간: `letterSpacing.md`

### Caption 스타일 (작은 텍스트용)

- `typography.caption1` ~ `typography.caption2`
- 폰트 웨이트: 400~700 범위 지원 (`weights.regular`, `weights.medium`, `weights.semibold`, `weights.bold`)
- 폰트 패밀리: 영문/한글 선택 가능 (`families.en`, `families.ko`, `families.sans`)
- 기본값: `fontWeight[400]` (regular), `fontFamily.sans` (혼합 폰트)
- 자간: `letterSpacing.md`

````tsx
// 사용 예시
const ArticleTitle = styled.h1`
  ${typographyCSS.display2} // 큰 제목
`;

const SectionTitle = styled.h2`
  ${typographyCSS.title1} // 섹션 제목
`;

const Paragraph = styled.p`
  ${typographyCSS.body2} // 본문 텍스트
`;

const SmallText = styled.span`
  ${typographyCSS.caption1} // 작은 설명 텍스트
`;

// Display 스타일에서 폰트 웨이트 변경
const RegularDisplay = styled.h1`
  ${typography('en', 'display1', 'regular')}
`;

const BoldDisplay = styled.h1`
  ${typography('en', 'display1', 'bold')}
`;

// Display 스타일에서 폰트 패밀리 변경
const KoreanDisplay = styled.h1`
  ${typography('ko', 'display1')}
`;

const MixedDisplay = styled.h1`
  ${typography('sans', 'display1')}
`;

// Title 스타일 사용 예시
const DefaultTitle = styled.h2`
  ${typography('en', 'title1')} // 기본 사용
`;

const BoldTitle = styled.h2`
  ${typography('en', 'title2', 'bold')}
`;

const KoreanTitle = styled.h2`
  ${typography('ko', 'title3')}
`;

// Heading 스타일 사용 예시
const DefaultHeading = styled.h3`
  ${typography('en', 'heading1')} // 기본 사용
`;

const SemiboldHeading = styled.h3`
  ${typography('en', 'heading2', 'semibold')}
`;

const KoreanHeading = styled.h3`
  ${typography('ko', 'heading3')}
`;

// Body 스타일 사용 예시
const DefaultBody = styled.p`
  ${typography('sans', 'body2')} // 기본 사용
`;

const MediumBody = styled.p`
  ${typography('sans', 'body3', 'medium')}
`;

const KoreanBody = styled.p`
  ${typography('ko', 'body1')}
`;

// Caption 스타일 사용 예시
const DefaultCaption = styled.span`
  ${typography('sans', 'caption1')} // 기본 사용
`;

const MediumCaption = styled.span`
  ${typography('sans', 'caption2', 'medium')}
`;

const KoreanCaption = styled.span`
  ${typography('ko', 'caption1')}
`;

## 추가 정보

- [Storybook 문서](npm run storybook으로 로컬 실행)

# Design System Usage Guide

## Toast 컴포넌트 사용법

### 기본 사용법

Toast 컴포넌트는 자체적으로 positioning을 처리하므로, 별도의 컨테이너 없이 직접 사용할 수 있습니다.

```tsx
import { Toast } from 'design-system';

// 기본 사용법
<Toast variant="positive" placement="bottom-right">
  요청하신 인증번호를 재발송하였습니다.
</Toast>

// 자동 닫기 기능
<Toast
  variant="positive"
  placement="bottom-right"
  autoClose={true}
  autoCloseDelay={3000}
  onClose={() => console.log('Toast closed')}
>
  저장이 완료되었습니다.
</Toast>
````

### 위치 옵션

- `top-left`: 왼쪽 상단
- `top-center`: 상단 중앙
- `top-right`: 오른쪽 상단
- `bottom-left`: 왼쪽 하단
- `bottom-center`: 하단 중앙
- `bottom-right`: 오른쪽 하단 (기본값)

### 변형 옵션

- `default`: 기본 (회색 아이콘)
- `positive`: 성공 (초록색 체크 아이콘)
- `negative`: 오류 (빨간색 에러 아이콘)
- `cautionary`: 경고 (노란색 경고 아이콘)

### 고급 사용법

```tsx
// 설명과 구분선 포함
<Toast
  variant="positive"
  placement="bottom-right"
  description="1 저장 완료, 0 실패"
  showDivider={true}
  onClose={() => setShowToast(false)}
>
  저장이 완료되었습니다.
  변경한 내용이 정상적으로 반영되었어요.
</Toast>

// 아이콘 없이 사용
<Toast
  variant="default"
  placement="bottom-right"
  showLeadingIcon={false}
  showTrailingIcon={false}
>
  아이콘 없는 토스트 메시지입니다.
</Toast>
```

### 주의사항

1. **Positioning**: Toast는 `position: fixed`로 설정되어 있어 viewport 기준으로 위치가 결정됩니다.
2. **Z-index**: 기본적으로 `z-index: 9999`가 설정되어 있어 대부분의 요소 위에 표시됩니다.
3. **Offset**: `offset` prop으로 화면 가장자리로부터의 거리를 조정할 수 있습니다 (기본값: 40px).

### 잘못된 사용법

```tsx
// ❌ 이렇게 하면 Toast가 보이지 않을 수 있습니다
<div style={{ position: 'relative' }}>
  <Toast variant="positive">메시지</Toast>
</div>

// ✅ 올바른 사용법
<Toast variant="positive" placement="bottom-right">메시지</Toast>
```
