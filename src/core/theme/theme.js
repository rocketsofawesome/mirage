import { injectGlobal } from 'styled-components'
import { colors } from './colors'
import media, { sizes, breakpoints, breakpointsVerbose } from './mediaQueries'
import fontFamilies from './fontFamilies'
import gridSettings from './gridSettings'

const basePxSize = 10

const base = injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box; // 1
  }

  html {
    font-size: ${basePxSize}px;
  }
`

export default {
  base: base,
  basePxSize: basePxSize,
  breakpoints: breakpoints,
  breakpointsVerbose: breakpointsVerbose,
  colors: colors,
  fixedPosition: 'relative',
  fonts: fontFamilies,
  grid: gridSettings,
  media: media,
  sizes: sizes
}
