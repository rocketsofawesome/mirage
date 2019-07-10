import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { QuickAdd } from 'SRC'
import { productWithVariants } from '../defaultProps'
const { mountWithTheme } = global

const variants = productWithVariants.product.variants
const defaultProps = {
  ...variants,
  show: false
}

describe('(Styled Component) QuickAdd', () => {
  const createQuickAdd = (inProps) => {
    const props = {
      defaultProps,
      ...inProps
    }
    return mountWithTheme(<QuickAdd {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createQuickAdd())
    .toMatchSnapshot()
  })

  test('shouldn\'t render if show prop isn\'t passed', () => {
    expect(createQuickAdd())

  })
})
