import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.base = '/design-system/';
      config.build = {
        ...config.build,
        minify: 'esbuild',
        rollupOptions: {
          ...config.build?.rollupOptions,
          output: {
            ...config.build?.rollupOptions?.output,
            manualChunks: {
              'react-vendor': ['react', 'react-dom'],
              'storybook-core': ['storybook'],
            },
          },
        },
      };
    }
    return config;
  },
};
export default config;
