import color from './color';

const brandColor = {
  light: {
    'fg-brand-primary': color.purple['500'],
    'fg-brand-strong': color.purple['800'],
    'bg-brand-primary-default': color.purple['800'],
    'bg-brand-primary-pressed': color.purple['900'],
  },
  dark: {
    'fg-brand-primary': color.purple['500'],
    'fg-brand-strong': color.purple['50'],
    'bg-brand-primary-default': color.purple['800'],
    'bg-brand-primary-pressed': color.purple['700'],
  },
} as const;

export default brandColor;
