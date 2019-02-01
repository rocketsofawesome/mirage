import React from 'react'
import 'jest-styled-components'

import { InlineImage } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) InlineImage', () => {
  const defaultProps = {
    src: 'https://dummyInlineImage.com/100x100/CCC/333.png&text=small'
  }
  const createInlineImage = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return shallowWithTheme(<InlineImage  {...props} />)
  }

  describe('When no props are provided', () => {
    test('matching the snapshot', () => {
      expect(createInlineImage())
      .toMatchSnapshot()
    })
  })
  describe('When props are provided', () => {
    test('setting the src', () => {
      const srcString = 'https://dummyInlineImage.com/350x350/CCC/333.png&text=medium'
      const InlineImageComponent = createInlineImage({
        src: srcString
      })
      expect(InlineImageComponent.find('img').prop('src')).toEqual(srcString)
    })

    describe('setting the alt prop', () => {
      test('when the alt tag is unset alt should be empty string', () => {
        const InlineImageComponent = createInlineImage()
        expect(InlineImageComponent.find('img').prop('alt')).toEqual('')
      })

      test('when the alt tag is set', () => {
        const altString = 'Filler InlineImage with the text "small".'
        const InlineImageComponent = createInlineImage({alt: altString})
        expect(InlineImageComponent.find('img').prop('alt')).toEqual(altString)
      })
    })

    test('Setting the srcSet', () => {
      const srcSetString =
      `https://dummyInlineImage.com/800x800/CCC/333.png&text=large 800w,
https://dummyInlineImage.com/350x350/CCC/333.png&text=medium 350w,
https://dummyInlineImage.com/100x100/CCC/333.png&text=small 100w`
const sizesString = `800px (min-width: 500px),
350px (min-width: 300px),
100px (min-width: 200px)`
      const InlineImageComponent = createInlineImage({
        sizes: {
          '800px': '(min-width: 500px)',
          '350px': '(min-width: 300px)',
          '100px': '(min-width: 200px)'
        },
        srcSet: {
          '800w': 'https://dummyInlineImage.com/800x800/CCC/333.png&text=large',
          '350w': 'https://dummyInlineImage.com/350x350/CCC/333.png&text=medium',
          '100w': 'https://dummyInlineImage.com/100x100/CCC/333.png&text=small'
        }
      })
      expect(InlineImageComponent.find('img').prop('srcSet')).toEqual(srcSetString)
      expect(InlineImageComponent.find('img').prop('sizes')).toContain(sizesString)
    })
  })
})
