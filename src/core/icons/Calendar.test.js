import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { Calendar } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) Calendar', () => {
  const createCalendar = (props) => {
    return shallowWithTheme(<Calendar {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createCalendar())
    .toMatchSnapshot()
  })
})
