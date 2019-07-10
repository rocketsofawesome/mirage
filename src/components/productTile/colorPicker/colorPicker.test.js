import React from 'react'
import 'jest-styled-components'

import { ColorPicker } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {

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
    // expect(createColorPicker())

  })
})
