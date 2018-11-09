import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import NavyLink from './NavyLink'

const { mountWithTheme } = global

describe('(Styled Component) NavyLink', () => {
  const createNavyLink = (props) => {
    return mountWithTheme(<NavyLink {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createNavyLink())
    .toMatchSnapshot()
  })

  test('not passing the underline prop', () => {
    expect(createNavyLink({underline: false}))
    .toHaveStyleRule({'border-bottom-color': undefined})
  })
})
