import React from 'react'
import 'jest-styled-components'

import { CircleChevron } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) CircleChevron', () => {
  const createCircleChevron = (props) => {
    return mountWithTheme(<CircleChevron left {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createCircleChevron())
    .toMatchSnapshot()
  })
})
