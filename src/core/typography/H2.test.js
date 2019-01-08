import React from 'react'
import 'jest-styled-components'

import H2 from './H2'

const { shallowWithTheme } = global

describe('(Styled Component) H2', () => {
  const createH2 = (props) => {
    return shallowWithTheme(<H2 {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createH2())
    .toMatchSnapshot()
  })

  test('setting lowercase prop', () => {
    expect(createH2({lowercase: true}))
    .toHaveStyleRule({
      'text-transform': 'inherit'
    })
  })

  test('setting center prop', () => {
    expect(createH2({center: true}))
    .toHaveStyleRule({
      'text-align': 'center'
    })
  })

  test('center prop not set', () => {
    expect(createH2({center: false}))
    .toHaveStyleRule({
      'text-align': undefined
    })
  })
})
