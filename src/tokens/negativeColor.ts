import color from './color';

const negativeColor = {
  light: {
    'fg-negative-primary': color.red[500],
    'fg-negative-strong': color.red[900],
    'bg-negative-primary-default': color.red[500],
    'bg-negative-primary-pressed': color.red[600],
  },
  dark: {
    'fg-negative-primary': color.red[500],
    'fg-negative-strong': color.red[50],
    'bg-negative-primary-default': color.red[500],
    'bg-negative-primary-pressed': color.red[400],
  },
} as const;

export default negativeColor;
