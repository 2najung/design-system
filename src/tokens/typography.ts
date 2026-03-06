import fontFamily from './fontFamily';
import fontSize from './fontSize';
import fontWeight from './fontWeight';
import letterSpacing from './letterSpacing';
import lineHeight from './lineHeight';

function detectDocumentLang(): 'ko' | 'en' {
  if (typeof document === 'undefined') return 'ko';
  const docLang = document.documentElement.lang?.toLowerCase();

  return docLang?.startsWith('en') ? 'en' : 'ko';
}

export function getCurrentLang(): 'ko' | 'en' {
  return detectDocumentLang();
}

const fontWeights = {
  regular: fontWeight[400],
  medium: fontWeight[500],
  semibold: fontWeight[600],
  bold: fontWeight[700],
} as const;

const fontFamilies = {
  en: fontFamily.en,
  ko: fontFamily.ko,
  sans: fontFamily.sans,
} as const;

const typographyStyles = {
  display1: {
    fontSize: fontSize.t13,
    letterSpacing: letterSpacing.lg,
    lineHeight: lineHeight.t13,
    weights: fontWeights,
    families: fontFamilies,
  },
  display2: {
    fontSize: fontSize.t14,
    letterSpacing: letterSpacing.lg,
    lineHeight: lineHeight.t14,
    weights: fontWeights,
    families: fontFamilies,
  },
  display3: {
    fontSize: fontSize.t15,
    letterSpacing: letterSpacing.lg,
    lineHeight: lineHeight.t15,
    weights: fontWeights,
    families: fontFamilies,
  },
  display4: {
    fontSize: fontSize.t16,
    letterSpacing: letterSpacing.lg,
    lineHeight: lineHeight.t16,
    weights: fontWeights,
    families: fontFamilies,
  },
  display5: {
    fontSize: fontSize.t17,
    letterSpacing: letterSpacing.lg,
    lineHeight: lineHeight.t17,
    weights: fontWeights,
    families: fontFamilies,
  },

  title1: {
    fontSize: fontSize.t9,
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t9,
    weights: fontWeights,
    families: fontFamilies,
  },
  title2: {
    fontSize: fontSize.t10,
    letterSpacing: letterSpacing.lg,
    lineHeight: lineHeight.t10,
    weights: fontWeights,
    families: fontFamilies,
  },
  title3: {
    fontSize: fontSize.t11,
    letterSpacing: letterSpacing.lg,
    lineHeight: lineHeight.t11,
    weights: fontWeights,
    families: fontFamilies,
  },
  title4: {
    fontSize: fontSize.t12,
    letterSpacing: letterSpacing.lg,
    lineHeight: lineHeight.t12,
    weights: fontWeights,
    families: fontFamilies,
  },

  heading1: {
    fontSize: fontSize.t6,
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t6,
    weights: fontWeights,
    families: fontFamilies,
  },
  heading2: {
    fontSize: fontSize.t7,
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t7,
    weights: fontWeights,
    families: fontFamilies,
  },
  heading3: {
    fontSize: fontSize.t8,
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t8,
    weights: fontWeights,
    families: fontFamilies,
  },

  body1: {
    fontSize: fontSize.t3,
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t3,
    weights: fontWeights,
    families: fontFamilies,
  },
  body2: {
    fontSize: fontSize.t4,
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t4,
    weights: fontWeights,
    families: fontFamilies,
  },
  body3: {
    fontSize: fontSize.t5,
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t5,
    weights: fontWeights,
    families: fontFamilies,
  },

  caption1: {
    fontSize: fontSize.t1,
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t1,
    weights: fontWeights,
    families: fontFamilies,
  },
  caption2: {
    fontSize: fontSize.t2,
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t2,
    weights: fontWeights,
    families: fontFamilies,
  },
} as const;

// 간단한 사용을 위한 CSS 문자열 생성 함수들 (기본값: document.lang)
const typography = (
  family: 'en' | 'ko' | 'sans' | undefined = undefined,
  variant: keyof typeof typographyStyles,
  weight: 'regular' | 'medium' | 'semibold' | 'bold' = 'medium'
) => {
  const style = typographyStyles[variant];
  const fontWeight = weight; // 규칙 제거: 사용자가 지정한 weight 그대로 사용

  if (family !== undefined) {
    const fontFamily =
      family === 'en'
        ? style.families.en
        : family === 'ko'
          ? style.families.ko
          : style.families.sans;

    return `
      font-size: ${style.fontSize[0]};
      font-weight: ${style.weights[fontWeight]};
      font-family: ${fontFamily};
      letter-spacing: ${style.letterSpacing};
      line-height: ${style.lineHeight[0]};
      
      @media (max-width: 768px) {
        font-size: ${style.fontSize[1]['@media (max-width: 768px)'][0]};
        line-height: ${style.lineHeight[1]['@media (max-width: 768px)'][0]};
      }
      
      @media (max-width: 375px) {
        font-size: ${style.fontSize[1]['@media (max-width: 375px)'][0]};
        line-height: ${style.lineHeight[1]['@media (max-width: 375px)'][0]};
      }
    `;
  }

  return `
    font-size: ${style.fontSize[0]};
    font-weight: ${style.weights[fontWeight]};
    letter-spacing: ${style.letterSpacing};
    line-height: ${style.lineHeight[0]};

    @media (max-width: 768px) {
      font-size: ${style.fontSize[1]['@media (max-width: 768px)'][0]};
      line-height: ${style.lineHeight[1]['@media (max-width: 768px)'][0]};
    }
    
    @media (max-width: 375px) {
      font-size: ${style.fontSize[1]['@media (max-width: 375px)'][0]};
      line-height: ${style.lineHeight[1]['@media (max-width: 375px)'][0]};
    }
  `;
};

// 각 스타일별로 간단한 CSS 문자열 제공 (동적: document.lang 기준)

const typographyCSS = {
  get display1() {
    return typography(undefined, 'display1');
  },
  get display2() {
    return typography(undefined, 'display2');
  },
  get display3() {
    return typography(undefined, 'display3');
  },
  get display4() {
    return typography(undefined, 'display4');
  },
  get display5() {
    return typography(undefined, 'display5');
  },
  get title1() {
    return typography(undefined, 'title1');
  },
  get title2() {
    return typography(undefined, 'title2');
  },
  get title3() {
    return typography(undefined, 'title3');
  },
  get title4() {
    return typography(undefined, 'title4');
  },
  get heading1() {
    return typography(undefined, 'heading1');
  },
  get heading2() {
    return typography(undefined, 'heading2');
  },
  get heading3() {
    return typography(undefined, 'heading3');
  },
  get body1() {
    return typography(undefined, 'body1');
  },
  get body2() {
    return typography(undefined, 'body2');
  },
  get body3() {
    return typography(undefined, 'body3');
  },
  get caption1() {
    return typography(undefined, 'caption1');
  },
  get caption2() {
    return typography(undefined, 'caption2');
  },
};

// fontFamily를 신경 쓰지 않는 헬퍼 함수
export const typo = (
  variant: keyof typeof typographyStyles,
  weight: 'regular' | 'medium' | 'semibold' | 'bold' = 'medium'
) => {
  const style = typographyStyles[variant];

  return `
    font-size: ${style.fontSize[0]};
    font-weight: ${style.weights[weight]};
    letter-spacing: ${style.letterSpacing};
    line-height: ${style.lineHeight[0]};

    @media (max-width: 768px) {
      font-size: ${style.fontSize[1]['@media (max-width: 768px)'][0]};
      line-height: ${style.lineHeight[1]['@media (max-width: 768px)'][0]};
    }

    @media (max-width: 375px) {
      font-size: ${style.fontSize[1]['@media (max-width: 375px)'][0]};
      line-height: ${style.lineHeight[1]['@media (max-width: 375px)'][0]};
    }
  `;
};

export default typography;
export { typographyStyles, typographyCSS };
