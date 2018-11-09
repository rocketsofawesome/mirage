import React from 'react'
import 'jest-styled-components'

import H3 from './H3'

const { shallowWithTheme } = global

describe('(Styled Component) H3', () => {
  const createH3 = (props) => {
    return shallowWithTheme(<H3 {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createH3())
    .toMatchSnapshot()
  })

  test('setting lowercase prop', () => {
    expect(createH3({lowercase: true}))
    .toHaveStyleRule({
      'text-transform': 'inherit'
    })
  })
})
