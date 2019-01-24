import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { Ruler } from 'SRC'
import { BaseRuler } from './Ruler'

const { shallowWithTheme } = global

describe('(Styled Component) Ruler', () => {
  const createRuler = (props) => {
    return shallowWithTheme(<Ruler {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createRuler())
    .toMatchSnapshot()
  })

  test('setting the width', () => {
    const width = '6rem'
    expect(createRuler({width: width}))
    .toHaveStyleRule({
      width: width
    })
  })
})

describe('(Component) BaseRuler', () => {
  const createBaseRuler = (props) => {
    return shallowWithTheme(<BaseRuler {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBaseRuler())
    .toMatchSnapshot()
  })

  test('setting the className', () => {
    const className = 'example-class'
    expect(
      createBaseRuler({className: className}).prop('className')
    ).toEqual(className)
  })
})
