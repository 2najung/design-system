import color from './color';

const textColor = {
  light: {
    'fg-neutral-strong': color.gray['1000'],
    'fg-neutral-primary': color.gray['990'],
    'fg-neutral-alternative': color.gray['800'],
    'fg-neutral-assistive': color.gray['400'],
    'fg-neutral-disable': color.gray['300'],
  },
  dark: {
    'fg-neutral-strong': color.gray['25'],
    'fg-neutral-primary': color.gray['300'],
    'fg-neutral-alternative': color.gray['600'],
    'fg-neutral-assistive': color.gray['800'],
    'fg-neutral-disable': color.gray['900'],
  },
} as const;

export default textColor;
