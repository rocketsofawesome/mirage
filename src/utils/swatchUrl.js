import cloudinary from 'SRC/services/cloudinary'

export const swatchUrl = (colorway, overrides = {}) => {
  let shot = colorway.shots.find((s) => {
      return s.shot_type === 'front'
    })
  if (!shot) {
    // Fall back to whatever is available if front shot is missing
    shot = colorway.shots[0]
  }

  const url = colorway.swatch_cloudinary_key || shot.cloudinary_key
  let defaults = { format: 'jpg' }

  if (!colorway.swatch_cloudinary_key) {
    defaults.transformation = 'swatch_v2'
  }

  return cloudinary.url(url, { ...defaults, ...overrides })
}
