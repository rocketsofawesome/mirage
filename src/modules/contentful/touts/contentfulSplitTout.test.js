import React from 'react'
import 'jest-styled-components'

import { splitToutDefaultProps as defaultProps } from './defaultProps'

import {
  ContentfulSplitTout,
  ContentfulAssetLink,
  MirageMarkdown,
  H1
} from 'SRC'

const { mountWithTheme } = global


describe('(Styled Component) ContentfulSplitTout', () => {
  const createContentfulSplitTout = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<ContentfulSplitTout {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createContentfulSplitTout())
    .toMatchSnapshot()
  })

  test('renders two assetLink elements', () => {
    expect(
      createContentfulSplitTout()
      .find(ContentfulAssetLink)
      .length
    ).toEqual(2)
  })

  test('renders out markdown', () => {
    expect(
      createContentfulSplitTout()
      .find(MirageMarkdown)
      .length
    ).toEqual(1)
    expect(
      createContentfulSplitTout()
      .find(H1)
      .length
    ).toEqual(1)
  })

  test('renders two footer links', () => {
    expect(
      createContentfulSplitTout()
      .find('.roa-split-tout-link')
      .length
    ).toEqual(2)
  })
})
