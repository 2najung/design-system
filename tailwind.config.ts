import plugin from 'tailwindcss/plugin';

import color from './src/tokens/color';
import fontFamily from './src/tokens/fontFamily';
import fontSize from './src/tokens/fontSize';
import fontWeight from './src/tokens/fontWeight';
import letterSpacing from './src/tokens/letterSpacing';
import lineHeight from './src/tokens/lineHeight';

type FontSizeToken = typeof fontSize;
type LineHeightToken = typeof lineHeight;

type TokenGroups = {
  fontSize: FontSizeToken;
  lineHeight: LineHeightToken;
  fontWeight: typeof fontWeight;
  letterSpacing: typeof letterSpacing;
  fontFamily: typeof fontFamily;
  colors: typeof color;
};

const tokens: TokenGroups = {
  fontSize,
  lineHeight,
  fontWeight,
  letterSpacing,
  fontFamily,
  colors: color,
};

const tailwindConfig = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/stories/**/*.{ts,tsx}',
  ],
  safelist: [
    // 모든 색상의 배경, 텍스트, 보더 클래스를 safelist에 추가
    {
      pattern:
        /^(bg|text|border)-(common|gray|neutral|red|orange|yellow|lime|green|emerald|teal|cyan|blue|purple|deeppurple|pink)-(25|50|100|200|300|400|500|600|700|800|850|900|925|950|975|990|1000|0|dimmer)$/,
    },
  ],
  theme: {
    extend: {
      // colors는 별도로 처리 (중첩된 객체 구조)
      colors: color,

      // 나머지 토큰들은 기존 방식으로 처리
      ...Object.fromEntries(
        Object.entries(tokens)
          .filter(([groupName]) => groupName !== 'colors') // colors 제외
          .map(([groupName, groupTokens]) => [
            groupName,
            Object.fromEntries(
              Object.entries(groupTokens as Record<string, unknown>).map(([key, raw]) => [
                key,
                typeof raw === 'string'
                  ? raw // static token
                  : `var(--${groupName}-${key})`, // responsive token
              ])
            ),
          ])
      ),

      // 반응형 브레이크포인트 정의
      screens: {
        sm: '375px', // mobile 이하
        md: '768px', // tablet 이하
        lg: '1920px', // desktop 이하
      },
    },
  },
  plugins: [
    // 토큰 기반 CSS 변수를 :root와 미디어쿼리에 추가하는 플러그인
    plugin(({ addBase }) => {
      const desktopVars: Record<string, string> = {};
      const tabletVars: Record<string, string> = {};
      const mobileVars: Record<string, string> = {};

      const groupNames = Object.keys(tokens).filter((name) => name !== 'colors') as Array<
        keyof Omit<TokenGroups, 'colors'>
      >;
      for (const groupName of groupNames) {
        const groupTokens = tokens[groupName];
        for (const key in groupTokens) {
          const raw = (groupTokens as Record<string, unknown>)[key];
          const varName = `--${groupName}-${key}`;

          if (typeof raw === 'string') {
            desktopVars[varName] = raw;
          } else {
            const [desktopValue, opts] = raw as [string, Record<string, string[]>];
            desktopVars[varName] = desktopValue;

            const tabletVal = opts['@media (max-width: 768px)']?.[0];
            if (tabletVal) tabletVars[varName] = tabletVal;

            const mobileVal = opts['@media (max-width: 375px)']?.[0];
            if (mobileVal) mobileVars[varName] = mobileVal;
          }
        }
      }

      addBase({
        ':root': desktopVars,
        '@media (max-width: 768px)': { ':root': tabletVars },
        '@media (max-width: 375px)': { ':root': mobileVars },
      });
    }),
  ],
};

export default tailwindConfig;
