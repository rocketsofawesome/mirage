import React from 'react'
import 'jest-styled-components'
import { regions } from './defaultProps'

import { MegaMenuSection, MegaMenuLink } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) MegaMenuSection', () => {
  const createMegaMenuSection = (inProps) => {
    const props = {
      clearMenuImage: () => {},
      section: regions.left[0],
      setMenuImage: () => {},
      ...inProps
    }
    return mountWithTheme(<MegaMenuSection {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createMegaMenuSection())
    .toMatchSnapshot()
  })

  test('rendering out links from section', () => {
    expect(
      createMegaMenuSection()
      .find(MegaMenuLink)
      .length
    ).toEqual(regions.left[0].links.length)

  })
})
