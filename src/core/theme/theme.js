import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'
import media, { breakpoints } from './breakpoints'
import fontFamilies from './fontFamilies'
import gridSettings from './gridSettings'

export const BaseFontSize = createGlobalStyle`
  html {
    font-size: 10px;
  }
`

export default {
  breakpoints: breakpoints,
  colors: colors,
  fonts: fontFamilies,
  grid: gridSettings,
  fixedPosition: 'relative',
  media: media,
}
