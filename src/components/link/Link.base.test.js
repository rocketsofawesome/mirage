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

  test('setting the link to be upper case', () => {
    expect(createBaseLink({uppercase: true}))
    .toHaveStyleRule({'text-transform': 'uppercase'})
  })
})
