import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { ProductTile, QuickAdd, P, formatPrice } from 'SRC'
import BaseProductTile from './productTile.base'
import { productWithVariants } from './defaultProps'

const { mountWithTheme } = global

const defaultProps = {
  ...productWithVariants
}
describe('(Styled Component) ProductTile', () => {
  const createProductTile = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<ProductTile {...props} />)
  }

  test('matching the snapshot', () => {
    expect(
      createProductTile()
    ).toMatchSnapshot()
  })

  test('rendering product title', () => {
    expect(
     createProductTile()
      .find(P)
      .first()
      .text()
    ).toEqual(productWithVariants.product.name)
  })

  test('rendering product price', () => {
    expect(
     createProductTile()
      .find(P)
      .at(1)
      .text()
    ).toEqual(formatPrice(productWithVariants.product.colorways[0].skus[0].price))
  })
})
