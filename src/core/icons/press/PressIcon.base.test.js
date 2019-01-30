import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import PressIconBase from './PressIcon.base'

const { mountWithTheme } = global

describe('(Component) PressIconBase', () => {
  const createPressIconBase = (props) => {
    return mountWithTheme(<PressIconBase {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createPressIconBase())
    .toMatchSnapshot()
  })

  test('setting the className', () => {
    const className = 'example-class'
    expect(
      createPressIconBase({className: className}).prop('className')
    ).toEqual(className)
  })

  test('setting the children', () => {
    const children = <line x1='24' y1='0.5' x2='24' y2='3.5' />
    expect(
      createPressIconBase({children: children}).prop('children')
    ).toEqual(children)
  })
})
