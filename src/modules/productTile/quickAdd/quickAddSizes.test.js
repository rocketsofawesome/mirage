import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { QuickAddSize } from 'SRC'
import { BaseQuickAddSizes } from './quickAddSizes.base'
import { productWithVariants } from './defaultProps'
const { mountWithTheme } = global

const defaultProps = {
  variants: [...productWithVariants.product.skus],
  quickAdd: productWithVariants.quickAdd
}

describe('(Styled Component) QuickAddSizes', () => {
  const createQuickAddSizes = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<BaseQuickAddSizes {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createQuickAddSizes())
    .toMatchSnapshot()
  })

  test('renders the proper number of  variants', () => {
    expect(
      createQuickAddSizes()
      .find(QuickAddSize)
      .length
    ).toEqual(
      productWithVariants
      .product
      .skus
      .length
    )
  })
})
