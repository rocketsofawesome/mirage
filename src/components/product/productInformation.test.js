import React from 'react'
import 'jest-styled-components'
import { ProductInformation, H1, H2, H3, P } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  subheader: "The Trend: Sparkly Rainbow",
  header: "Weekends Are For Fun Outfit",
  price: "$55",
  description: "Cheesecake bocconcini red leicester. Melted cheese when the cheese comes out everybody's happy."
}

describe('() ProductInformation', () => {
  const createProductInformation = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<ProductInformation {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createProductInformation())
    .toMatchSnapshot()
  })

  test('header should always render', () => {
    expect(createProductInformation().find(H1).text()).toMatch(defaultProps.header)
  })

  test('price should always render', () => {
    expect(createProductInformation().find(H2).text()).toMatch(defaultProps.price)
  })

  describe('subheader', () => {
    test("shouldn't render if missing prop", () => {
      const props = {
        subheader: undefined
      }
      expect(createProductInformation(props).find(H3).length).toEqual(0)
    })

    test('should render if provided', () => {
      expect(createProductInformation().find(H3).text()).toMatch(defaultProps.subheader)
    })
  })

  describe('description', () => {
    test("shouldn't render if missing prop", () => {
      const props = {
        description: undefined
      }
      expect(createProductInformation(props).find(P).length).toEqual(0)
    })

    test('should render if provided', () => {
      expect(createProductInformation().find(P).text()).toMatch(defaultProps.description)
    })
  })
})