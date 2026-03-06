import color from './color';

const infoColor = {
  light: {
    'fg-info-primary': color.blue[500],
    'fg-info-strong': color.blue[900],
    'bg-info-primary-assistive': color.blue[50],
    'bg-info-primary-default': color.blue[500],
    'bg-info-primary-pressed': color.blue[600],
  },
  dark: {
    'fg-info-primary': color.blue[500],
    'fg-info-strong': color.blue[50],
    'bg-info-primary-assistive': color.blue[900],
    'bg-info-primary-default': color.blue[500],
    'bg-info-primary-pressed': color.blue[400],
  },
} as const;

export default infoColor;
