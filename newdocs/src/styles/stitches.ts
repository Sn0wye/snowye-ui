import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space
} from '@snowye-ui/tokens';
import {
  createStitches,
  CSS as StitchesCSS,
  defaultThemeMap
} from '@stitches/react';

type PossibleValues = number | string;

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
    m: (value: PossibleValues) => ({
      margin: value
    }),
    mt: (value: PossibleValues) => ({
      marginTop: value
    }),
    mr: (value: PossibleValues) => ({
      marginRight: value
    }),
    mb: (value: PossibleValues) => ({
      marginBottom: value
    }),
    ml: (value: PossibleValues) => ({
      marginLeft: value
    }),
    mx: (value: PossibleValues) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: PossibleValues) => ({
      marginTop: value,
      marginBottom: value
    }),
    p: (value: PossibleValues) => ({
      padding: value
    }),
    pt: (value: PossibleValues) => ({
      paddingTop: value
    }),
    pr: (value: PossibleValues) => ({
      paddingRight: value
    }),
    pb: (value: PossibleValues) => ({
      paddingBottom: value
    }),
    pl: (value: PossibleValues) => ({
      paddingLeft: value
    }),
    px: (value: PossibleValues) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: PossibleValues) => ({
      paddingTop: value,
      paddingBottom: value
    }),

    size: (value: PossibleValues) => ({
      width: value,
      height: value
    })
  }
});

export type CSS = StitchesCSS<typeof config>;
