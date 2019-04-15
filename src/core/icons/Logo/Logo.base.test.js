import React from 'react'
import { shallow } from 'enzyme'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import BaseLogo, { UnstyledBaseLogo } from './Logo.base'
const { shallowWithTheme } = global

describe('(Component) BaseLogo', () => {
  const createBaseLogo = (props) => {
    return shallowWithTheme(
      <BaseLogo {...props}/>
    )
  }
  test('matching the snapshot', () => {
    expect(createBaseLogo())
    .toMatchSnapshot()
  })

  test('changing the size of the spinner', () => {
    const size = '10rem'
    expect(createBaseLogo({size: size}))
    .toHaveStyleRule({
      maxWidth: size,
      height: size
    })
  })
})

describe('(Base Component) UnstyledBaseLogo', () => {
  const createUnstyledBaseLogo = (props) => {
    return shallowWithTheme(<UnstyledBaseLogo {...props} />)
  }
  test('matching the snapsot', () => {
    expect(createUnstyledBaseLogo())
    .toMatchSnapshot()
  })

  test('setting the className', () => {
    const className = 'example-class'
    expect(
      createUnstyledBaseLogo({className: className}).prop('className')
    ).toEqual(className)
  })
})
