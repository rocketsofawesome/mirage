import React from 'react'
import 'jest-styled-components'

import BaseLink from './Link.base'

const { shallowWithTheme } = global

describe('(Styled Component) BaseLink', () => {
  const createBaseLink = (props) => {
    return shallowWithTheme(<BaseLink {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBaseLink())
    .toMatchSnapshot()
  })
})
