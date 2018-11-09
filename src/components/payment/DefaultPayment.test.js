import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import DefaultPayment, { BaseDefaultPayment, cardData } from './DefaultPayment'
import { LowercaseLabel } from 'SRC/core/typography/Label'
import CardIcon from 'SRC/core/icons/cards/CardIcon'

const { mountWithTheme } = global

const card = {
  brand: 'jcb',
  exp_month: '08',
  exp_year: '2020',
  last_4_digits: '1234'
}

describe('(Styled Component) DefaultPayment', () => {
  const createDefaultPayment = (props) => {
    return mountWithTheme(<DefaultPayment card={card} {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createDefaultPayment())
    .toMatchSnapshot()
  })
})

describe('(Component) BaseDefaultPayment', () => {
  const createBaseDefaultPayment = (props) => {
    return mountWithTheme(<BaseDefaultPayment card={card} {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBaseDefaultPayment())
    .toMatchSnapshot()
  })

  test('rendering the card icon', () => {
    expect(
      createBaseDefaultPayment()
      .find(CardIcon).prop('brand')
    ).toEqual(card.brand)
  })

  test('rendering out the card data', () => {
    expect(
      createBaseDefaultPayment()
      .find(LowercaseLabel).first().text()
    ).toEqual(
      cardData(card.brand, card.last_4_digits)
    )
  })

  test('rendering out the expiration data', () => {
    expect(
      createBaseDefaultPayment()
      .find(LowercaseLabel).last().text()
    ).toEqual(`expires ${card.exp_month}/${card.exp_year}`)
  })
})
