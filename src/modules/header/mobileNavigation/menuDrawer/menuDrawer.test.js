import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { MenuDrawer } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) MenuDrawer', () => {
  const createMenuDrawer = (props) => {
    return shallowWithTheme(<MenuDrawer {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createMenuDrawer())
    .toMatchSnapshot()
  })
})
