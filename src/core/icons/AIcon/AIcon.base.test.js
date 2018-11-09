import React from 'react'
import 'jest-styled-components'

import BaseAIcon, { AIcon } from './AIcon.base'

const { shallowWithTheme } = global

describe('(Styled component) BaseAIcon', () => {
  const createBaseAIcon = (props) => {
    return shallowWithTheme(<BaseAIcon {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBaseAIcon())
    .toMatchSnapshot()
  })

  test('setting the width', () => {
    const width = '4rem'
    expect(createBaseAIcon({width: width}))
    .toHaveStyleRule({
      width: width
    })
  })
})

describe('(Component) AIcon', () => {
  const createAIcon = (props) => {
    return shallowWithTheme(<AIcon {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createAIcon())
    .toMatchSnapshot()
  })

  test('setting the className', () => {
    const className = 'example-class'
    expect(
      createAIcon({className: className}).prop('className')
    ).toEqual(className)
  })
})
