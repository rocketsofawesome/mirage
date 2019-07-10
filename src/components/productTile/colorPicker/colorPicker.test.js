import React from 'react'
import 'jest-styled-components'

import { ColorPicker, InlineImage } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  alt: 'Multi',
  src: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/c_scale,q_100,t_swatch,w_40/v1/production/catalog/jbku3g2yunsmtxz1c8nc.jpg',
  input: {
    name: 'color-block',
    value: 'multi',
    checked: true,
    onChange: jest.fn()
  }
}
describe('(Styled Component) ColorPicker', () => {
  const createColorPicker = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<ColorPicker {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createColorPicker())
    .toMatchSnapshot()
  })

  test('rending out the image', () => {
    expect(
      createColorPicker().find(InlineImage).prop('src')
    ).toEqual(defaultProps.src)
    expect(
      createColorPicker().find(InlineImage).prop('alt')
    ).toEqual(defaultProps.alt)
  })

  test('setting the input to be checked', () => {
    expect(
      createColorPicker().find('input').prop('checked')
    ).toEqual(true)
    expect(
      createColorPicker({
        ...defaultProps,
        input: {
          ...defaultProps.input,
          checked: false
        }
      })
      .find('input').prop('checked')
    ).toEqual(false)
  })

  test('firing onChange', () => {
    createColorPicker().find('input').simulate('change')
    expect(defaultProps.input.onChange).toHaveBeenCalled()
  })
})
