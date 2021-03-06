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

  test('count doesn\'t render if 0', () => {
    const count = 0
    expect(
      createBaseBagIcon({count: count})
      .find('.roa-item-count').length
    ).toEqual(0)
  })
})
