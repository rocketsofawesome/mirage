import React from 'react'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import StyledDefaultAddress, { DefaultAddress, DefaultLabel } from './DefaultAddress'

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
  const createStyledDefaultAddress = (props) => {
    let addressProp = address
    if (props && props.address) {
      addressProp = {...address, ...props.address}
    }
    return mountWithTheme(
      <StyledDefaultAddress {...props} address={addressProp} />
    )
  }

  test('matching the snapshot', () => {
    expect(createStyledDefaultAddress())
    .toMatchSnapshot()
  })
})

describe('(Component) DefaultAddress', () => {
  const createDefaultAddress = (props) => {
    let addressProp = address
    if (props && props.address) {
      addressProp = {...address, ...props.address}
    }
    return mountWithTheme(<DefaultAddress {...props} address={addressProp} />)
  }

  test('matching the snapshot', () => {
    expect(createDefaultAddress())
    .toMatchSnapshot()
  })

  test('rendering the name', () => {
    expect(
      createDefaultAddress()
      .contains(
        <DefaultLabel>
          {address.first_name} {address.last_name}
        </DefaultLabel>
      )
    ).toBeTruthy()
  })

  test('rendering the address', () => {
    expect(
      createDefaultAddress()
      .contains(
        <DefaultLabel>
          {address.address1}
        </DefaultLabel>
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
        createDefaultAddress()
        .contains(
          <DefaultLabel>
            {addressWithSecondLine.address2}
          </DefaultLabel>
        )
      ).toBeFalsy()
    })

    test('address line two should be renderedd if provided', () => {
      expect(
        createDefaultAddress({address: addressWithSecondLine})
        .contains(
          <DefaultLabel>
            {addressWithSecondLine.address2}
          </DefaultLabel>
        )
      ).toBeTruthy()
    })
  })

  test('rendering city, state, and zip', () => {
    expect(
      createDefaultAddress()
      .contains(
        <DefaultLabel>
          {address.city}, {address.state} {address.zipcode}
        </DefaultLabel>
      )
    ).toBeTruthy()
  })
})

describe('(Component) Default Label', () => {
  const createDefaultLabel = (props) => {
    return mountWithTheme(<DefaultLabel {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createDefaultLabel())
    .toMatchSnapshot()
  })

  test('setting the className', () => {
    const className = "example-classe"
    expect(createDefaultLabel({className: className}).prop('className'))
    .toContain(className)
  })

  test('setting the label text', () => {
    const text = "Example Label"
    expect(createDefaultLabel({children: text}).text())
    .toContain(text)
  })
})
