import React from 'react'
import 'jest-styled-components'

import H1 from './H1'

const { shallowWithTheme } = global

describe('(Styled Component) H1', () => {
  const createH1 = (props) => {
    return shallowWithTheme(<H1 {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createH1())
    .toMatchSnapshot()
  })

  test('setting lowercase prop', () => {
    expect(createH1({lowercase: true}))
    .toHaveStyleRule({
      'text-transform': 'inherit'
    })
  })

  test('setting center prop', () => {
    expect(createH1({center: true}))
    .toHaveStyleRule({
      'text-align': 'center'
    })
  })

  test('center prop not set', () => {
    expect(createH1({center: false}))
    .toHaveStyleRule({
      'text-align': undefined
    })
  })
})
