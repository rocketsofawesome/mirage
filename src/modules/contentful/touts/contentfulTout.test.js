import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { toutDefaultProps as defaultProps } from './defaultProps'

import { ContentfulTout, MirageMarkdown } from 'SRC'

import { setBackgroundColor } from './contentfulTout'

const { mountWithTheme } = global

describe('(Styled Component) ContentfulTout', () => {
  const createContentfulTout = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<ContentfulTout {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createContentfulTout())
    .toMatchSnapshot()
  })

  test('markdown gets rendered', () => {
    expect(
      createContentfulTout()
      .find('h1').length
    ).toEqual(1)
  })

  test('MirageMarkdown text color gets set', () => {
    expect(createContentfulTout())
    .toHaveStyleRule('color', defaultProps.fields.textColor, {
      modifier: css`${MirageMarkdown} > *`,
    })
  })

  test('MirageMarkdown position gets set', () => {
    expect(createContentfulTout())
    .toHaveStyleRule('justify-content', 'center', {
      modifier: '.roa-tout-overlay',
    })
    expect(createContentfulTout())
    .toHaveStyleRule('align-items', 'flex-end', {
      modifier: '.roa-tout-overlay',
    })
  })

  test('MirageMarkdown background-color gets set', () => {
    expect(createContentfulTout())
    .toHaveStyleRule('background-color', setBackgroundColor(defaultProps), {
      modifier: '.roa-tout-overlay',
    })
  })
})
