import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { ROASlider, InlineImage, Chevron } from 'SRC'

import BaseROASlider from './slider.base'

const { mountWithTheme } = global

const defaultProps = {
  images: [
    {
      src: 'https://res.cloudinary.com/roa-canon/image/upload/v1559169387/production/catalog/ed46u1mcjvubzjiahzjh.png',
      alt: 'Front'
    },
    {
      src: 'https://res.cloudinary.com/roa-canon/image/upload/v1559169409/production/catalog/zppjvgtqx0ddndibimdr.png',
      alt: 'Back'
    }
  ]
}
describe('(Styled Component) ROASlider', () => {
  const createROASlider = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<ROASlider {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createROASlider())
    .toMatchSnapshot()
  })

  test('renders the proper number of slides', () => {
    expect(
      createROASlider()
      .find(InlineImage)
      .length
    ).toEqual(
      defaultProps
      .images
      .length
    )
  })

  test('clicking chevrons fire slider functions',  () => {
    const component = createROASlider()

    component
    .find(BaseROASlider)
    .instance()
    .prevSlide = jest.fn()

    component
    .find(BaseROASlider)
    .instance()
    .nextSlide = jest.fn()

    const prevSlide = component
    .find(BaseROASlider)
    .instance()
    .prevSlide

    const nextSlide = component
    .find(BaseROASlider)
    .instance()
    .nextSlide
    component.instance().forceUpdate()

    expect(
      prevSlide
    ).not.toHaveBeenCalled()

    expect(
      nextSlide
    ).not.toHaveBeenCalled()

    const leftChevron = component
      .find(Chevron)
      .find({left: true})
      .first()

      const rightChevron = component
        .find(Chevron)
        .find({right: true})
        .first()

    leftChevron.simulate('click')

    expect(
      prevSlide
    ).toHaveBeenCalled()

    rightChevron.simulate('click')

    expect(
      nextSlide
    ).toHaveBeenCalled()
  })
})
