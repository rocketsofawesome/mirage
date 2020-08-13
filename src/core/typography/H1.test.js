import React from 'react'
import 'jest-styled-components'

import { H1 } from 'SRC'

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
    expect(createH1({ lowercase: true }))
    .toHaveStyleRule(
      'text-transform', 'inherit'
    )
  })

  test('setting center prop', () => {
    expect(createH1({ center: true }))
    .toHaveStyleRule(
      'text-align', 'center'
    )
  })

  test('center prop not set', () => {
    expect(createH1({ center: false }))
    .toHaveStyleRule(
      'text-align', undefined
    )
  })

  test('setting letter spacing prop', () => {
    expect(createH1({ letterSpacing: '0.05rem' }))
    .toHaveStyleRule(
      'letter-spacing', '0.05rem'
    )
  })

  test('setting fontSizes prop', () => {
    expect(createH1({ fontSizes: { desktop: '3.2rem', mobile: '2.4rem' } }))
    .toHaveStyleRule(
      'font-size', '3.2rem', {
        media: '(min-width: 769px)'
      }
    )
  })

  test('setting lineHeights prop', () => {
    expect(createH1({ lineHeights: { desktop: 2, mobile: 1.5 } }))
    .toHaveStyleRule(
      'line-height', `${2}`, {
        media: '(min-width: 769px)'
      }
    )
  })
})
