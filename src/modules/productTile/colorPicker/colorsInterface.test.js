import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { ColorsInterface, ColorPicker } from 'SRC'
import BaseColorsInterface from './colorsInterface.base'

import { default as defaultProps } from './defaultProps'

const { mountWithTheme } = global

describe('(Styled Component) ColorsInterface', () => {
  const createColorsInterface = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<ColorsInterface {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createColorsInterface())
    .toMatchSnapshot()
  })
})

describe('(Base Component) BaseColorsInterface', () => {
  const createBaseColorsInterface = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<BaseColorsInterface {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBaseColorsInterface())
    .toMatchSnapshot()
  })

  describe('colorways', () => {
    test('renders out multiple color pickers if multiple colorways ', () => {
      expect(
        createBaseColorsInterface().find(ColorPicker).length
      ).toEqual(defaultProps.colorways.length)
    })

    test('doesn\'t render if only one colorway', () => {
      expect(createBaseColorsInterface({colorways: [{}]}).html()).toEqual(null)
    })
  })
})
