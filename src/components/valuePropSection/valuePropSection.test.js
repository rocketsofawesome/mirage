import React from 'react'
import 'jest-styled-components'

import { ValuePropSection } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) ValuePropSection', () => {
  const createValuePropSection = (props) => {
    return shallowWithTheme(<ValuePropSection evergreenPromoItemCount='6' evergreenPromoPercent='15' {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createValuePropSection())
    .toMatchSnapshot()
  })
})
