import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { ContentfulProductQuartet, H1 } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  loadProducts: jest.fn(),
  fields: {
    description: '# Styles that Wow',
    productTaxon: '/shop/interstellar'
  }
}
describe('(Styled Component) ContentfulProductQuartet', () => {
  const createContentfulProductQuartet = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<ContentfulProductQuartet {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createContentfulProductQuartet())
    .toMatchSnapshot()
  })

  test('rendering description in markdown', () => {
    expect(
      createContentfulProductQuartet().find(H1).length
    ).toEqual(1)
  })

  test('fires load products on componentDidMount', () => {
    createContentfulProductQuartet()
    expect(
      defaultProps.loadProducts.mock.calls[0][0]
    ).toBe(defaultProps.fields.productTaxon)
  })
})
