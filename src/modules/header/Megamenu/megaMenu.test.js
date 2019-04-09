import React from 'react'
import 'jest-styled-components'

import { MegaMenu, MegaMenuSection } from 'SRC'

import { BaseMegaMenu } from './megaMenu'

import { regions } from './defaultProps'

const { mountWithTheme, shallowWithTheme } = global

describe('(Styled Component) MegaMenu', () => {
  const createMegaMenu = (inProps) => {
    const props = {
      regions: regions,
      ...inProps
    }
    return shallowWithTheme(<MegaMenu {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createMegaMenu())
    .toMatchSnapshot()
  })
})

describe('(Base Component) BaseMegaMenu', () => {
  const createBaseMegaMenu = (inProps) => {
    const props = {
      regions: regions,
      ...inProps
    }
    return mountWithTheme(<BaseMegaMenu {...props} />)
  }

  test('rendering the left and right regions ', () => {
    expect(createBaseMegaMenu().find(MegaMenuSection).length).toEqual(2)
  })

  test('setting the mega menu image on mouseenter', () => {
    const component = createBaseMegaMenu()
    expect(component.state().menuImage).toBeUndefined()
    component.find({children: regions.left[0].links[0].text}).first().simulate('mouseenter')
    expect(component.state().menuImage).toEqual(
      regions.left[0].links[0].src
    )
  })

  test('clearing the mega menu image on mouseenter', () => {
    const component = createBaseMegaMenu()
    expect(component.state().menuImage).toBeUndefined()
    component.find({children: regions.left[0].links[0].text}).first().simulate('mouseenter')
    expect(component.state().menuImage).toEqual(
      regions.left[0].links[0].src
    )
    component.find({children: regions.left[0].links[0].text}).first().simulate('mouseleave')
    expect(component.state().menuImage).toBeUndefined()
  })
})
