import React from 'react'
import 'jest-styled-components'

import { BlueCheckmark } from 'SRC'

const { mountWithTheme } = global

describe('(Component) BlueCheckmark', () => {
  const createBlueCheckmark = (props) => {
    return mountWithTheme(<BlueCheckmark {...props} />)
  }
  test('matching the snapshot', () => {
    const component = createBlueCheckmark()
    expect(component).toMatchSnapshot()
  })
})
