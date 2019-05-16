import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { Label, OutfitCards, Card } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  element: 'a',
  outfits: [
    {
      image: {
        src: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/t_plp_product_shot/v1/production/catalog/m44tim52vvuz4ofsb5te.jpg'
      },
      information: [
        <Label key='title'>Lacey & Lively</Label>,
        <Label key='price'>$50.00</Label>
      ]
    }
  ]
}
describe('(Module) OutfitCards', () => {
  const createOutfitCards = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<OutfitCards {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createOutfitCards())
    .toMatchSnapshot()
  })

  test('Should render out the appropriate ', () => {
    const component = createOutfitCards()
    expect(component.find(Card).length).toEqual(defaultProps.outfits.length)
  })

  test('Should pass the element to the card', () => {
    expect(
      createOutfitCards()
      .find(defaultProps.element)
      .length
    ).toEqual(
      defaultProps.outfits.length
    )
  })
})
