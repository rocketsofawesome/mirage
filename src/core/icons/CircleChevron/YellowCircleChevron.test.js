import React from 'react'
import 'jest-styled-components'

import YellowCircleChevron from './YellowCircleChevron'

const { mountWithTheme } = global

describe('(Styled Component) YellowCircleChevron', () => {
  const createYellowCircleChevron = (props) => {
    return mountWithTheme(<YellowCircleChevron left {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createYellowCircleChevron())
    .toMatchSnapshot()
  })
})
