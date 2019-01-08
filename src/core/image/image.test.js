import React from 'react'
import 'jest-styled-components'

import Image from './Image'

const { shallowWithTheme } = global

describe('(Styled Component) Image', () => {
  const defaultProps = {
    src: 'https://dummyimage.com/100x100/CCC/333.png&text=small'
  }
  const createImage = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return shallowWithTheme(<Image  {...props} />)
  }

  describe('When no props are provided', () => {
    test('matching the snapshot', () => {
      expect(createImage())
      .toMatchSnapshot()
    })
  })
  describe('When props are provided', () => {
    test('setting the src', () => {
      const srcString = 'https://dummyimage.com/350x350/CCC/333.png&text=medium'
      const imageComponent = createImage({
        src: srcString
      })
      expect(imageComponent.find('img').prop('src')).toEqual(srcString)
    })

    describe('setting the alt prop', () => {
      test('when the alt tag is unset alt should be empty string', () => {
        const imageComponent = createImage()
        expect(imageComponent.find('img').prop('alt')).toEqual('')
      })

      test('when the alt tag is set', () => {
        const altString = 'Filler image with the text "small".'
        const imageComponent = createImage({alt: altString})
        expect(imageComponent.find('img').prop('alt')).toEqual(altString)
      })
    })

    test('Setting the srcSet', () => {
      const srcSetString =
      `https://dummyimage.com/800x800/CCC/333.png&text=large 800w,
https://dummyimage.com/350x350/CCC/333.png&text=medium 350w,
https://dummyimage.com/100x100/CCC/333.png&text=small 100w`
      const imageComponent = createImage({
        srcSet: {
          '800w': 'https://dummyimage.com/800x800/CCC/333.png&text=large',
          '350w': 'https://dummyimage.com/350x350/CCC/333.png&text=medium',
          '100w': 'https://dummyimage.com/100x100/CCC/333.png&text=small'
        }
      })
      expect(imageComponent.find('img').prop('srcSet')).toEqual(srcSetString)
    })

    test('setting the sizes', () => {
      const sizesString =
      `800px (min-width: 500px),
350px (min-width: 300px),
100px (min-width: 200px)`
      const imageComponent = createImage({
        sizes: {
          '800px': '(min-width: 500px)',
          '350px': '(min-width: 300px)',
          '100px': '(min-width: 200px)'
        }
      })
      expect(imageComponent.find('img').prop('sizes')).toEqual(sizesString)
    })
  })
})
