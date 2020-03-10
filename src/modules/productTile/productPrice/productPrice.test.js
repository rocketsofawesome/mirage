import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { P, formatPrice } from 'SRC'
import ProductPrice from './productPrice'

const { mountWithTheme } = global

const saleProps = {
  "colorway": {
    "skus": [
      {
        "price": 8.0,
        "original_price": 22.5
      }
    ]
  }
}

const noSaleProps = {
  "colorway": {
    "skus": [
      {
        "price": 22.5,
        "original_price": 22.5
      }
    ]
  }
}


describe('(Styled Component) ProductPrice', () => {
  test('renders original price when there is a sale', () => {
    let component = mountWithTheme(<ProductPrice {...saleProps} />)

    expect(
     component
      .find(P)
      .first()
      .text()
    ).toContain(formatPrice(saleProps.colorway.skus[0].original_price))
  })

  test('does not render original price when there is not a sale', () => {
    let component = mountWithTheme(<ProductPrice {...noSaleProps} />)

    expect(
     component
      .find(P)
      .first()
      .text()
    ).toEqual(formatPrice(noSaleProps.colorway.skus[0].original_price))
  })

  test('renders price when there is not a sale', () => {
    let component = mountWithTheme(<ProductPrice {...noSaleProps} />)

    expect(
     component
      .find(P)
      .first()
      .text()
    ).toContain(formatPrice(noSaleProps.colorway.skus[0].price))
  })
})
