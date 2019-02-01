import React from 'react'
import 'jest-styled-components'

import {BackgroundImage, SplitTout} from 'SRC'
import {default as defaultProps} from './defaultProps.base'


const { mountWithTheme } = global

describe('(Styled Components) SplitTout', () => {
  const createSplitTout = (props = defaultProps) => {
    return mountWithTheme(<SplitTout {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createSplitTout())
    .toMatchSnapshot()
  })

  test('rendering the images', () => {
    expect(createSplitTout().find(BackgroundImage).length).toEqual(2)
  })

  test('rendering the footer links', () => {
    expect(createSplitTout().find(`article a`).length).toEqual(2)
  })
})
