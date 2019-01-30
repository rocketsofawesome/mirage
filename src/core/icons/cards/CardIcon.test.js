import React from 'react'
import 'jest-styled-components'

import { CardIcon } from 'SRC'
import { CardIconBase } from './CardIcon'

import Amex from './Amex.base'
import Default from './Default.base'
import Diners from './Diners.base'
import Discover from './Discover.base'
import JCB from './JCB.base'
import Mastercard from './Mastercard.base'
import Maestro from './Maestro.base'
import Paypal from './Paypal.base'
import Visa  from './Visa.base'

const { mountWithTheme } = global

describe('(Styled Component) CardIcon', () => {
  const createCardIcon = (props) => {
    let brand = ''
    if (props && props.brand) {
      brand = props.brand
    }
    return mountWithTheme(<CardIcon {...props} brand={brand} />)
  }

  test('matching the snapshot', () => {
    expect(createCardIcon())
    .toMatchSnapshot()
  })
})


describe('(Component) CardIconBase', () => {
  const createCardIconBase = (props) => {
    let brand = ''
    if (props && props.brand) {
      brand = props.brand
    }
    return mountWithTheme(<CardIconBase {...props} brand={brand} />)
  }

  test('setting the className', () => {
    const className = 'example-class'
    expect(
      createCardIconBase({className: className}).prop('className')
    ).toEqual(className)
  })

  test('setting the brand to amex', () => {
    expect(createCardIconBase({brand: 'amex'}).find(Amex).length)
    .toEqual(1)
  })

  test('setting the brand to diners', () => {
    expect(createCardIconBase({brand: 'diners'}).find(Diners).length)
    .toEqual(1)
  })

  test('setting the brand to discover', () => {
    expect(createCardIconBase({brand: 'discover'}).find(Discover).length)
    .toEqual(1)
  })

  test('setting the brand to jcb', () => {
    expect(createCardIconBase({brand: 'jcb'}).find(JCB).length)
    .toEqual(1)
  })

  test('setting the brand to mastercard', () => {
    expect(createCardIconBase({brand: 'mastercard'}).find(Mastercard).length)
    .toEqual(1)
  })

  test('setting the brand to maestro', () => {
    expect(createCardIconBase({brand: 'maestro'}).find(Maestro).length)
    .toEqual(1)
  })

  test('setting the brand to paypal', () => {
    expect(createCardIconBase({brand: 'paypal'}).find(Paypal).length)
    .toEqual(1)
  })

  test('setting the brand to visa', () => {
    expect(createCardIconBase({brand: 'visa'}).find(Visa).length)
    .toEqual(1)
  })

  test('not setting the brand', () => {
    expect(createCardIconBase({brand: ''}).find(Default).length)
    .toEqual(1)
  })
})
