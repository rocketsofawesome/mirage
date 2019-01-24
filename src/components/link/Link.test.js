import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { Link } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) Link', () => {
  const createLink = (props) => {
    return mountWithTheme(<Link {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createLink())
    .toMatchSnapshot()
  })

  test('not passing the underline prop', () => {
    expect(createLink({underline: false}))
    .toHaveStyleRule({'border-bottom-color': undefined})
  })
})
