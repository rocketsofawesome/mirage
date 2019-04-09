import React from 'react'
import 'jest-styled-components'

import { HeaderLink, Highlighter, Link } from 'SRC'
import { BaseHeaderLink } from './headerLink'

const { shallowWithTheme, mountWithTheme } = global

describe('(Styled Component) HeaderLink', () => {
  const createHeaderLink = (props) => {
    return shallowWithTheme(<HeaderLink {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createHeaderLink())
    .toMatchSnapshot()
  })
})

describe('(Component) BaseHeaderLink', () => {
  const createBaseHeaderLink = (inProps) => {
    const props = {
      highlightable: true,
      highlightOn: 'hover',
      spacing: true,
      ...inProps
    }
    return mountWithTheme(<BaseHeaderLink {...props}/>)
  }

  test('rendering the link text', () => {
    const text = 'Example Link'
    expect(createBaseHeaderLink({children: text}).contains(text)).toBeTruthy()
  })

  test('rendering the Highlighter component by default', () => {
    expect(
      createBaseHeaderLink()
      .find(Highlighter).length
    ).toBeTruthy()
  })

  test('rendering the Highlighter component by default', () => {
    expect(
      createBaseHeaderLink({highlightable: false})
      .find(Highlighter).length
    ).toBeFalsy()
  })
})
