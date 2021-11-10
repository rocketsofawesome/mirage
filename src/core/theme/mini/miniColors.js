import { colors } from '../colors'

const themeColors = {
  textPrimary: colors.rocketBlue,
  textSecondary: colors.navy,
  borderPrimary: colors.lightPink,
  buttonTextPrimary: colors.rocketBlue,
  buttonPrimary: colors.white,
  buttonPrimaryHover: colors.lightPink,
  buttonSelected: colors.lightPink,
  buttonUnselected: colors.white
}

export default {
  ...colors,
  ...themeColors
}
