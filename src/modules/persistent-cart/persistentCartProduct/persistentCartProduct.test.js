import React from 'react'
import 'jest-styled-components'

import { PersistentCartProduct } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) PersistentCartProduct', () => {
  const createPersistentCartProduct = (props) => {
    return shallowWithTheme(<PersistentCartProduct {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createPersistentCartProduct({item:{
  adjustments: [],
  amount: "24.5",
  category: ["Tops", "Graphic Tees"],
  color: "Black",
  colorway_slug: "black",
  cost_price: null,
  evergreenPromoItemCount: '6',
  evergreenPromoPercent: '15',
  id: 2295178,
  name: "Embellished Bolt Tee",
  order_id: 627140,
  price: "24.5",
  product_id: 1560,
  quantity: 1,
  shot: { cloudinary_key: "production/catalog/rlnrtg6z2e56zneqi9dl",
          id: 2257441,
          shot_type: "front"
  },
  size: "10",
  sku: "5601-007-N",
  slug: "embellished-bolt-tee",
  total: "24.5",
  variant_id:16975},
  onUpdateSize: () => {},
  onUpdateQuantity: () => {},
  onRemoveItem: () => {},
  hideCartSidebar: () => {}}))
    .toMatchSnapshot()
  })
})
