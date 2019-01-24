import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { XIcon } from 'SRC'
import { BaseXIcon } from './XIcon'

const { shallowWithTheme } = global

describe('(Styled Component) XIcon', () => {
  const createXIcon = (props) => {
    return shallowWithTheme(<XIcon {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createXIcon())
    .toMatchSnapshot()
  })

  test('setting the width', () => {
    const width = '6rem'
    expect(createXIcon({width: width}))
    .toHaveStyleRule({
      width: width
    })
  })
})

describe('(Component) BaseXIcon', () => {
  const createBaseXIcon = (props) => {
    return shallowWithTheme(<BaseXIcon {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBaseXIcon())
    .toMatchSnapshot()
  })

  test('setting the className', () => {
    const className = 'example-class'
    expect(
      createBaseXIcon({className: className}).prop('className')
    ).toEqual(className)
  })
})
