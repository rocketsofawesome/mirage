import React from 'react'
import 'jest-styled-components'

import WhiteCheckmark from './WhiteCheckmark'

const { mountWithTheme } = global

describe('(Component) WhiteCheckmark', () => {
  const createWhiteCheckmark = (props) => {
    return mountWithTheme(<WhiteCheckmark {...props} />)
  }
  test('matching the snapshot', () => {
    const component = createWhiteCheckmark()
    expect(component).toMatchSnapshot()
  })
})
