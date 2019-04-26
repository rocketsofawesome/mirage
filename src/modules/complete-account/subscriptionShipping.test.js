import React from 'react'
import 'jest-styled-components'

import SubscriptionShipping from 'SRC'

import { UnstyledSubscriptionShipping } from './subscriptionShipping'

const { mountWithTheme } = global

describe('(Styled component) SubscriptionShipping', () => {
  const createSubscriptionShipping = (props) => {
    return mountWithTheme(<SubscriptionShipping {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createSubscriptionShipping())
    .toMatchSnapshot()
  })
})

describe('(Component) UnstyledSubscriptionShipping', () => {
  const createUnstyledSubscriptionShipping = (props) => {
    return mountWithTheme(<UnstyledSubscriptionShipping {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createUnstyledSubscriptionShipping())
    .toMatchSnapshot()
  })

  test('setting the className', () => {
    const className = 'example-class'
    expect(
      createUnstyledSubscriptionShipping({className: className}).prop('className')
    ).toEqual(className)
  })
})
