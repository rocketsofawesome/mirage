import React from 'react'
import 'jest-styled-components'

import { Thumbnails, InlineImage } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  thumbnails: [
    {
      alt: 'Fuzzy Tiger Tee front',
      src: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/c_scale,w_122/v1548780269/production/catalog/rfxx1bcmwy7zych1pmof.png'
    },
    {
      alt: 'Fuzzy Tiger Tee detail',
      src: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/c_scale,w_122/v1548888910/production/catalog/jhpde0cdhl11lu9fa41o.png'
    },
    {
      alt: 'Fuzzy Tiger Tee on model',
      src: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/c_scale,w_122/v1548897102/production/catalog/q5l42uiqm8orjia4j14m.jpg'
    }
  ],
  onClick: () => {}
}

describe('(Styled Component) Thumbnail', () => {
  const createThumbnail = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<Thumbnails {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createThumbnail())
    .toMatchSnapshot()
  })

  test('render out the number of thumbnails passed in', () => {
    expect(createThumbnail().find(InlineImage).length).toEqual(defaultProps.thumbnails.length)
  })

  test('onClick is fired when clicked', () => {
    const selectImage = jest.fn()
    const component = createThumbnail({onClick: () => selectImage })
    expect(selectImage).not.toBeCalled()
    component.find(InlineImage).first().simulate('click')
    expect(selectImage).toBeCalled()
  })
})
