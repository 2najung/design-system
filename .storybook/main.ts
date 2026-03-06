import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.@(ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  // GitHub Pages를 위한 설정
  viteFinal: async (config) => {
    // GitHub Pages 환경에서는 base path 설정
    if (process.env.NODE_ENV === 'production') {
      config.base = '/design-system-template/';
    }
    return config;
  },
};
export default config;
