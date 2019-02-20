import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import BoxUpright from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) BoxUpright', () => {
  const createBoxUpright = (props) => {
    return shallowWithTheme(<BoxUpright {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBoxUpright())
    .toMatchSnapshot()
  })
})
