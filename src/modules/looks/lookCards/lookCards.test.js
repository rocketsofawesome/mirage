import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { Label, LookCards, Card } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  element: 'a',
  looks: [
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
describe('(Module) LookCards', () => {
  const createLookCards = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<LookCards {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createLookCards())
    .toMatchSnapshot()
  })

  test('Should render out the appropriate ', () => {
    const component = createLookCards()
    expect(component.find(Card).length).toEqual(defaultProps.looks.length)
  })

  test('Should pass the element to the card', () => {
    expect(
      createLookCards()
      .find(defaultProps.element)
      .length
    ).toEqual(
      defaultProps.looks.length
    )
  })
})
