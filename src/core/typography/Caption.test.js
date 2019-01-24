import React from 'react'
import 'jest-styled-components'

import { Caption } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) Caption', () => {
  const createCaption = (props) => {
    return shallowWithTheme(<Caption {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createCaption())
    .toMatchSnapshot()
  })
})
