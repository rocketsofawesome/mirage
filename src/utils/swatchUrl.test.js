import { swatchUrl } from 'SRC'

describe('(Util) swatchUrl', () => {
  describe('when a custom swatch has been provided', () => {
    test('returns a cloudinary url for the custom swatch', () => {
      const colorway = buildColorway({
        swatch_cloudinary_key: 'test/custom_swatch'
      })

      const url = swatchUrl(colorway)

      expect(url).toMatch(/test\/custom_swatch.jpg$/)
    })
  })

  describe('when a custom swatch has not been provided', () => {
    test('returns a cloudinary url for the default swatch', () => {
      const colorway = buildColorway({
        swatch_cloudinary_key: null
      })

      const url = swatchUrl(colorway)

      expect(url).toMatch(/test\/front.jpg$/)
      expect(url).toMatch(/t_swatch_v2/)
    })
  })
})

function buildColorway(overrides = {}) {
  return {
    shots: [
      { shot_type: 'back', cloudinary_key: 'test/back' },
      { shot_type: 'front', cloudinary_key: 'test/front' }
    ],
    swatch_cloudinary_key: null,
    ...overrides
  }
}
