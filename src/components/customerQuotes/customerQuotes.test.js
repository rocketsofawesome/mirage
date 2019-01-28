import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { CustomerQuotes } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) CustomerQuotes', () => {
  const createCustomerQuotes = (props) => {
    return shallowWithTheme(<CustomerQuotes {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createCustomerQuotes())
    .toMatchSnapshot()
  })
})
