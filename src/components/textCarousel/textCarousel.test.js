import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { TextCarousel } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) TextCarousel', () => {
  const createTextCarousel = (props) => {
    return shallowWithTheme(<TextCarousel {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createTextCarousel())
    .toMatchSnapshot()
  })
})
