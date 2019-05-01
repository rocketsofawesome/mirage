import React from 'react'
import 'jest-styled-components'

import { DefaultSection } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) DefaultSection', () => {
  const createDefaultSection = (props) => {
    return mountWithTheme(<DefaultSection {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createDefaultSection())
    .toMatchSnapshot()
  })
})
