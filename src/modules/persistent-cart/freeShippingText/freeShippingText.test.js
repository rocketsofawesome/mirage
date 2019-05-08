import React from 'react'
import 'jest-styled-components'

import { FreeShippingText } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) FreeShippingText', () => {
  const createFreeShippingText = (props) => {
    return shallowWithTheme(<FreeShippingText {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createFreeShippingText({subTotal: 10}))
    .toMatchSnapshot()
  })
})

