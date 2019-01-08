import React from 'react'
import 'jest-styled-components'

import DefaultAddress, { BaseDefaultAddress } from './DefaultAddress'
import { LowercaseLabel } from 'SRC/core/typography/Label'

const { mountWithTheme } = global

const address = {
  first_name: 'John',
  last_name: 'Doe',
  address1: '123 Test Road',
  city: 'New York',
  state: 'NY',
  zipcode: '12345'
}

describe('(Styled Component) DefaultAddress', () => {
  const createDefaultAddress = (props) => {
    let addressProp = address
    if (props && props.address) {
      addressProp = {...address, ...props.address}
    }
    return mountWithTheme(
      <DefaultAddress {...props} address={addressProp} />
    )
  }

  test('matching the snapshot', () => {
    expect(createDefaultAddress())
    .toMatchSnapshot()
  })
})

describe('(Component) DefaultAddress', () => {
  const createBaseDefaultAddress = (props) => {
    let addressProp = address
    if (props && props.address) {
      addressProp = {...address, ...props.address}
    }
    return mountWithTheme(<BaseDefaultAddress {...props} address={addressProp} />)
  }

  test('matching the snapshot', () => {
    expect(createBaseDefaultAddress())
    .toMatchSnapshot()
  })

  test('rendering the name', () => {
    expect(
      createBaseDefaultAddress()
      .contains(
        <LowercaseLabel>
          {address.first_name} {address.last_name}
        </LowercaseLabel>
      )
    ).toBeTruthy()
  })

  test('rendering the address', () => {
    expect(
      createBaseDefaultAddress()
      .contains(
        <LowercaseLabel>
          {address.address1}
        </LowercaseLabel>
      )
    ).toBeTruthy()
  })

  describe('rendering address line two', () => {
    const addressWithSecondLine = {
      ...address,
      address2: 'APT 1'
    }
    test('address line two shouldn’t be rendered if not provided', () => {
      expect(
        createBaseDefaultAddress()
        .contains(
          <LowercaseLabel>
            {addressWithSecondLine.address2}
          </LowercaseLabel>
        )
      ).toBeFalsy()
    })

    test('address line two should be renderedd if provided', () => {
      expect(
        createBaseDefaultAddress({address: addressWithSecondLine})
        .contains(
          <LowercaseLabel>
            {addressWithSecondLine.address2}
          </LowercaseLabel>
        )
      ).toBeTruthy()
    })
  })

  test('rendering city, state, and zip', () => {
    expect(
      createBaseDefaultAddress()
      .contains(
        <LowercaseLabel>
          {address.city}, {address.state} {address.zipcode}
        </LowercaseLabel>
      )
    ).toBeTruthy()
  })
})
