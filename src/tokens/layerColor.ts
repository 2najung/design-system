import color from './color';

export const layerColor = {
  light: {
    'bg-layer-basement': color.gray[50],
    'bg-layer-default': color.common['100'],
    'bg-layer-fill': color.gray[25],
    'bg-layer-floating': color.common['100'],
    'bg-overlay': color.common.dimmer,
  },
  dark: {
    'bg-layer-basement': color.gray[990],
    'bg-layer-default': color.gray[975],
    'bg-layer-fill': color.gray[950],
    'bg-layer-floating': color.gray[975],
    'bg-overlay': color.common.dimmer,
  },
} as const;
