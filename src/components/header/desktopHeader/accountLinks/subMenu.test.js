import React from 'react'
import 'jest-styled-components'

import { SubMenu, Link } from 'SRC'
import { BaseSubMenu } from './subMenu'

const { shallowWithTheme, mountWithTheme } = global

const loggedInNonSubscriber = {
  loggedIn: true
}

describe('(Styled) SubMenu', () => {
  const createSubMenu = (props) => {
    return shallowWithTheme(<SubMenu {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createSubMenu())
    .toMatchSnapshot()
  })
})

describe('(Base Component) BaseSubMenu', () => {
  const createBaseSubMenu = (inProps) => {
    const props = {
      childCount: 0,
      isSubscriptionMember: false,
      ...inProps
    }
    return mountWithTheme(<BaseSubMenu {...props} />)
  }

  test('rendering no links when not open', () => {
    expect(createBaseSubMenu().contains(Link)).toBeFalsy()
  })

  test('rendering links when open', () => {
    expect(createBaseSubMenu({open: true}).contains(Link)).toBeTruthy()
  })

  test('not rendering subscription links if not subscriber', () => {
    const nonSubscriptionMenu = createBaseSubMenu({open: true})
    expect(nonSubscriptionMenu.contains('Manage Deliveries')).toBeFalsy()
    expect(nonSubscriptionMenu.contains('Style File')).toBeFalsy()
    expect(nonSubscriptionMenu.contains('Add a Big Kid (2-14)')).toBeFalsy()
    expect(nonSubscriptionMenu.contains('Add a Baby (0-24M)')).toBeFalsy()
  })

  test('rendering subscription links if a subscriber', () => {
    const nonSubscriptionMenu = createBaseSubMenu({
      open: true,
      isSubscriptionMember: true
    })
    expect(nonSubscriptionMenu.contains('Manage Deliveries')).toBeTruthy()
    expect(nonSubscriptionMenu.contains('Style File')).toBeTruthy()
    expect(nonSubscriptionMenu.contains('Add a Big Kid (2-14)')).toBeTruthy()
    expect(nonSubscriptionMenu.contains('Add a Baby (0-24M)')).toBeTruthy()
  })

  test('not rendering add a child link if a subscriber but with 4 kids', () => {
    const nonSubscriptionMenu = createBaseSubMenu({
      childCount: 4,
      open: true,
      isSubscriptionMember: true
    })
    expect(nonSubscriptionMenu.contains('Manage Deliveries')).toBeTruthy()
    expect(nonSubscriptionMenu.contains('Style File')).toBeTruthy()
    expect(nonSubscriptionMenu.contains('Add a Big Kid (2-14)')).toBeFalsy()
    expect(nonSubscriptionMenu.contains('Add a Baby (0-24M)')).toBeFalsy()
  })
})
