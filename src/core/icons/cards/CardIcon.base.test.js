import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import BaseCardIcon from './CardIcon.base'

const { mountWithTheme } = global

describe('(Component) BaseCardIcon', () => {
  const createBaseCardIcon = (props) => {
    return mountWithTheme(<BaseCardIcon {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBaseCardIcon())
    .toMatchSnapshot()
  })

  test('setting the className', () => {
    const className = 'example-class'
    expect(
      createBaseCardIcon({className: className}).prop('className')
    ).toEqual(className)
  })

  test('setting the children', () => {
    const children = <line x1='24' y1='0.5' x2='24' y2='3.5' />
    expect(
      createBaseCardIcon({children: children}).prop('children')
    ).toEqual(children)
  })
})
