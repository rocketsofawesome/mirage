import React from 'react'
import 'jest-styled-components'

import { MainLayout, Header } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  children: <h1>Example</h1>,
  headerProps: {
    desktopProps: {
      highlightable: false
    }
  }
}

describe('(Styled Component) MainLayout', () => {
  const createMainLayout = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<MainLayout {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createMainLayout())
    .toMatchSnapshot()
  })

  test('renders children', () => {
    expect(createMainLayout().prop('children')).toEqual(defaultProps.children)

  })

  test('passes props to the header', () => {
    console.log(createMainLayout().find(Header).prop('desktopProps').highlightable)
    expect(
      createMainLayout()
      .find(Header)
      .prop('desktopProps')
      .highlightable
    ).toBeFalsy()
  })
})
