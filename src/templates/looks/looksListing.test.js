import React from 'react'
import 'jest-styled-components'
import { H1, H2, Label, LooksListing } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  headerContent: [
    <H1 key='header'>Header 1</H1>,
    <H2 key='subheader'>Header 2</H2>
  ],
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

describe('(Template) LooksListing', () => {
  const createLooksListing = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<LooksListing {...props} />)
  }
  test('matching the snapshot', () => {
    expect(createLooksListing())
    .toMatchSnapshot()
  })

  test('renders our header if headerContent prop is passed', () => {
    expect(createLooksListing().find('header').length).toEqual(1)
  })
})
