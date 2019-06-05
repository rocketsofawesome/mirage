import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { EmailCapture } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) EmailCapture', () => {
  const createEmailCapture = (props) => {
    return shallowWithTheme(<EmailCapture {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createEmailCapture())
    .toMatchSnapshot()
  })
})
