import React from 'react'
import 'jest-styled-components'

import NavyCheckmark from './NavyCheckmark'

const { mountWithTheme } = global

describe('(Component) NavyCheckmark', () => {
  const createNavyCheckmark = (props) => {
    return mountWithTheme(<NavyCheckmark {...props} />)
  }
  test('matching the snapshot', () => {
    const component = createNavyCheckmark()
    expect(component).toMatchSnapshot()
  })
})
