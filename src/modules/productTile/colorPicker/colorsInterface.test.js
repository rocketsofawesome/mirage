import React from 'react'
import 'jest-styled-components'

import { ColorsInterface, ColorPicker } from 'SRC'
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

describe('(Base Component) ColorsInterface', () => {
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

  describe('colorways', () => {
    test('renders out multiple color pickers if multiple colorways ', () => {
      expect(
        createColorsInterface().find(ColorPicker).length
      ).toEqual(defaultProps.colorways.length)
    })

    test('doesn\'t render if only one colorway', () => {
      expect(createColorsInterface({colorways: [{}]}).html()).toEqual(null)
    })
  })
})
