import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space
} from '@snowye-ui/tokens';
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
    height: 'space',
    width: 'space'
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    radii,
    lineHeights,
    space,
    fonts
  },
  utils: {
    m: (value: number) => ({
      margin: value
    }),
    mt: (value: number) => ({
      marginTop: value
    }),
    mr: (value: number) => ({
      marginRight: value
    }),
    mb: (value: number) => ({
      marginBottom: value
    }),
    ml: (value: number) => ({
      marginLeft: value
    }),
    mx: (value: number) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: number) => ({
      marginTop: value,
      marginBottom: value
    }),
    p: (value: number) => ({
      padding: value
    }),
    pt: (value: number) => ({
      paddingTop: value
    }),
    pr: (value: number) => ({
      paddingRight: value
    }),
    pb: (value: number) => ({
      paddingBottom: value
    }),
    pl: (value: number) => ({
      paddingLeft: value
    }),
    px: (value: number) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: number) => ({
      paddingTop: value,
      paddingBottom: value
    }),

    size: (value: number) => ({
      width: value,
      height: value
    })
  }
});
