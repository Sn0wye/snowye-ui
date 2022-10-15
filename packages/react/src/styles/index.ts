import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space
} from '@sn0wye-ui/tokens';
import { createStitches, defaultThemeMap } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'spaces',
    width: 'spaces'
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    radii,
    lineHeights,
    space,
    fonts
  }
});
