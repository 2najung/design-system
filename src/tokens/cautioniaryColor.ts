import color from './color';

const cautioniaryColor = {
  light: {
    'fg-cautionary-primary': color.yellow[400],
    'fg-cautionary-strong': color.yellow[900],
    'bg-cautionary-primary-default': color.yellow[400],
    'bg-cautionary-primary-pressed': color.yellow[500],
  },
  dark: {
    'fg-cautionary-primary': color.yellow[400],
    'fg-cautionary-strong': color.yellow[50],
    'bg-cautionary-primary-default': color.yellow[400],
    'bg-cautionary-primary-pressed': color.yellow[300],
  },
} as const;

export default cautioniaryColor;
