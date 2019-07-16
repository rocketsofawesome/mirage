import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { BagIcon } from 'SRC'
import { BaseBagIcon } from './BagIcon'

const { shallowWithTheme } = global

describe('(Styled Component) BagIcon', () => {
  const createBagIcon = (props) => {
    return shallowWithTheme(<BagIcon {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBagIcon())
    .toMatchSnapshot()
  })

  test('setting the width', () => {
    const width = '6rem'
    expect(createBagIcon({width: width}))
    .toHaveStyleRule({
      width: width
    })
  })
})

describe('(Component) BaseBagIcon', () => {
  const createBaseBagIcon = (props) => {
    return shallowWithTheme(<BaseBagIcon {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBaseBagIcon())
    .toMatchSnapshot()
  })

  test('setting the count', () => {
    const count = 4
    expect(
      createBaseBagIcon({count: count})
      .find('.roa-item-count').last().text()
    ).toEqual(count.toString())
    expect(
      createBaseBagIcon({count: count})
      .find('.roa-item-count').first().text()
    ).toEqual(count.toString())
  })
})
