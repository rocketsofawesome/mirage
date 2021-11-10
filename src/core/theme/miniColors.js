import { colors } from './colors'

const themeColors = {
  textPrimary: colors.rocketBlue,
  textSecondary: colors.navy,
  borderPrimary: colors.lightPink,
  buttonTextPrimary: colors.rocketBlue,
  buttonPrimary: colors.white,
  buttonPrimaryHover: colors.lightPink,
  buttonSelected: colors.lightPink,
  // Add button hover color!
  bgUnselected: colors.white,
  bgSelected: colors.lightPink
}

export default {
  ...colors,
  ...themeColors
}
