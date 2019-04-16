import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { MobileAccountLinks } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) MobileAccountLink', () => {
  const createMobileAccountLink = (props) => {
    return shallowWithTheme(<MobileAccountLinks {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createMobileAccountLink())
    .toMatchSnapshot()
  })

  test('When a user is logged out', () => {
    expect(createMobileAccountLink())
  })
})
