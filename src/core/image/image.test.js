import React from 'react'
import 'jest-styled-components'

import Image from './Image'

const { shallowWithTheme } = global

describe('(Styled Component) Image', () => {
  const createImage = (props) => {
    return shallowWithTheme(<Image {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createImage())
    .toMatchSnapshot()
  })
})
