import React from 'react'
import 'jest-styled-components'

import MarkedText from './MarkedText'

const { shallowWithTheme } = global

describe('(Styled Component) MarkedText', () => {
  const createMarkedText = (props) => {
    return shallowWithTheme(<MarkedText {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createMarkedText())
    .toMatchSnapshot()
  })

  test('setting the bold prop', () => {
    expect(createMarkedText({bold: true}))
    .toHaveStyleRule({
      'font-weight': 'bold'
    })
  })

  test('setting the underlined prop', () => {
    expect(createMarkedText({underline: true}))
    .toHaveStyleRule({
      'text-decoration': 'underline'
    })
  })

  test('setting the italic prop', () => {
    expect(createMarkedText({italic: true}))
    .toHaveStyleRule({
      'font-style': 'italic'
    })
  })
})
