import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import BaseHamburger, {
  animated,
  closed,
  open,
  UnstyledHamburger
} from './Hamburger.base'

const { shallowWithTheme } = global

describe('() BaseHamburger', () => {
  const createBaseHamburger = (props) => {
    return shallowWithTheme(<BaseHamburger {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBaseHamburger())
    .toMatchSnapshot()
  })

  test('opening the hamburger', () => {
    expect(createBaseHamburger({open: true}))
    .toHaveStyleRule({
      modifier: css`${open}`
    })
  })

  test('opening the hamburger', () => {
    expect(createBaseHamburger({open: false}))
    .toHaveStyleRule({
      modifier: css`${closed}`
    })
  })

  test('setting the animated prop', () => {
    expect(createBaseHamburger({animated: true}))
    .toHaveStyleRule({
      modifier: css`${animated}`
    })
  })
})

describe('(Component), UnstyledHamburger', () => {
  const createUnstyledHamburger = (props) => {
    return shallowWithTheme(<UnstyledHamburger {...props} />)
  }

  test('mathing the snapshot', () => {
    expect(createUnstyledHamburger())
    .toMatchSnapshot()
  })

  test('setting the className', () => {
    const className = 'example-class'
    expect(
      createUnstyledHamburger({className: className}).prop('className')
    ).toEqual(className)
  })
})
