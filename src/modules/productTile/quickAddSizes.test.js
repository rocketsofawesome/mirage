import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { QuickAddSizes, QuickAddSize } from 'SRC'
import { productWithVariants } from './defaultProps'
const { mountWithTheme } = global

const defaultProps = {
  ...productWithVariants.product,
  onClick: productWithVariants.onClick
}

describe('(Styled Component) QuickAddSizes', () => {
  const createQuickAddSizes = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<QuickAddSizes {...props} />)
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
      .variants
      .length
    )
  })
})
