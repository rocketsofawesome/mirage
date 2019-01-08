import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import WhiteLink from './WhiteLink'

const { mountWithTheme } = global

describe('(Styled Component) WhiteLink', () => {
  const createWhiteLink = (props) => {
    return mountWithTheme(<WhiteLink {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createWhiteLink())
    .toMatchSnapshot()
  })

  test('not passing the underline prop', () => {
    expect(createWhiteLink({underline: false}))
    .toHaveStyleRule({'border-bottom-color': undefined})
  })
})
