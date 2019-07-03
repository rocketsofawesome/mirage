import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { ProductTile, QuickAdd, Label, formatPrice } from 'SRC'
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
      .find(Label)
      .first()
      .text()
    ).toEqual(productWithVariants.product.title)
  })

  test('rendering product title', () => {
    expect(
     createProductTile()
      .find(Label)
      .last()
      .text()
    ).toEqual(formatPrice(productWithVariants.product.price))
  })

  describe('mouse interations', () => {

    test('rendering the QuickAdd on onMouseEnter', () => {
      const styledProductTile = createProductTile()

      expect(
        styledProductTile
          .find(BaseProductTile)
          .state().show
      ).toBeFalsy()

      styledProductTile
        .find(QuickAdd)
        .simulate('mouseenter')

      expect(
        styledProductTile
          .find(BaseProductTile)
          .state().show
      ).toBeTruthy()
    })

    test('hiding the QuickAdd onMouseLeave', () => {
      const styledProductTile = createProductTile()

      expect(
        styledProductTile
          .find(BaseProductTile)
          .state()
          .show
      ).toBeFalsy()

      styledProductTile
        .find(QuickAdd)
        .simulate('mouseenter')

      expect(
        styledProductTile
          .find(BaseProductTile)
          .state()
          .show
      ).toBeTruthy()

      styledProductTile
        .find(QuickAdd)
        .simulate('mouseleave')
      expect(
        styledProductTile
          .find(BaseProductTile)
          .state()
          .show
      ).toBeFalsy()
    })
  })
})
