import React from 'react'
import 'jest-styled-components'

import { AboutUs } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) AboutUs', () => {
  const createAboutUs = (props) => {
    return shallowWithTheme(<AboutUs {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createAboutUs())
    .toMatchSnapshot()
  })
})
