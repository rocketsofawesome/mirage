import React from 'react'
import 'jest-styled-components'

import { PersistentCartProductList } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) PersistentCartProductList', () => {
  const createPersistentCartProductList = (props) => {
    return shallowWithTheme(<PersistentCartProductList {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createPersistentCartProductList({lineItems:[{
  adjustments: [],
  amount: "24.5",
  category: ["Tops", "Graphic Tees"],
  color: "Black",
  colorway_slug: "black",
  cost_price: null,
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
  variant_id:16975}],
  updateBag: () => {},
  removeItem: () => {},
  hideCartSidebar: () => {},
  segmentCartViewed: () =>{}}
  ))
    .toMatchSnapshot()
  })
})
