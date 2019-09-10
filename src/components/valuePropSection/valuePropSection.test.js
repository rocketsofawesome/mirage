import React from 'react'
import 'jest-styled-components'

import { ValuePropSection } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) ValuePropSection', () => {
  const createValuePropSection = (props) => {
    return shallowWithTheme(<ValuePropSection {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createValuePropSection())
    .toMatchSnapshot()
  })
})
