import React from 'react'
import 'jest-styled-components'

import { Video } from 'SRC'

const { shallowWithTheme } = global

describe('(Component) Video', () => {
  const createVideo = (props = {}) => {
    return shallowWithTheme(<Video {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createVideo())
    .toMatchSnapshot()
  })
})
