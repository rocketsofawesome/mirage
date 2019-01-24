import React from 'react'
import 'jest-styled-components'

import { YellowButton } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) YellowButton', () => {
  const createYellowButton = (props) => {
    return mountWithTheme(<YellowButton {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createYellowButton())
    .toMatchSnapshot()
  })
})
