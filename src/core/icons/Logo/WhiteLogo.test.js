import React from 'react'
import 'jest-styled-components'

import WhiteLogo from './WhiteLogo'

const { mountWithTheme } = global

describe('(Styled Component) WhiteLogo', () => {
  const createWhiteLogo = (props) => {
    return mountWithTheme(<WhiteLogo {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createWhiteLogo())
    .toMatchSnapshot()
  })
})
