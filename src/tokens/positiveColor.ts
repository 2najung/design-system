import color from './color';

export const positiveColor = {
  light: {
    'fg-positive-primary': color.green[500],
    'fg-positive-strong': color.green[900],
    'bg-positive-primary-default': color.green[600],
    'bg-positive-primary-pressed': color.green[400],
  },
  dark: {
    'fg-positive-primary': color.green[500],
    'fg-positive-strong': color.green[50],
    'bg-positive-primary-default': color.green[600],
    'bg-positive-primary-pressed': color.green[400],
  },
} as const;

export default positiveColor;
