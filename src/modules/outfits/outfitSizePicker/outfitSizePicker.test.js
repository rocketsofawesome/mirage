import React from 'react'
import 'jest-styled-components'
import { OutfitSizePicker } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  products: [
    {
      image: {
        alt: 'Fuzzy Tiger Tee front',
        src: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/c_scale,w_122/v1548780269/production/catalog/rfxx1bcmwy7zych1pmof.png'
      },
      variants: [
        {sku: 'sku-1', size: 3, inStock: true},
        {sku: 'sku-2', size: 4, inStock: true},
        {sku: 'sku-3', size: 5, inStock: true},
        {sku: 'sku-4', size: 6, inStock: true},
        {sku: 'sku-5', size: 7, inStock: false},
        {sku: 'sku-6', size: 9, inStock: true},
        {sku: 'sku-7', size: 12, inStock: true},
      ],
      id: '12345'
    },
    {
      image: {
        alt: 'Cool Down Active Short front',
        src: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/c_scale,w_122/v1548780269/production/catalog/xrpiecxqwmiso3acxucc.png'
      },
      variants: [
        {sku: 'sku-20', size: 3, inStock: true},
        {sku: 'sku-21', size: 4, inStock: true},
        {sku: 'sku-22', size: 5, inStock: true},
        {sku: 'sku-23', size: 6, inStock: true},
        {sku: 'sku-24', size: 7, inStock: false},
        {sku: 'sku-25', size: 9, inStock: true},
        {sku: 'sku-26', size: 12, inStock: true},
      ],
      id: '12346'
    }
  ],
  onSizeSelect: () => {}
}

describe('() OutfitSizePicker', () => {
  const createOutfitSizePicker = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<OutfitSizePicker {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createOutfitSizePicker())
    .toMatchSnapshot()
  })

  test('renders proper amount of products', () => {
    expect(createOutfitSizePicker().find('.roa-product').length).toEqual(defaultProps.products.length)
  })

  test('fires onSizeSelect on render, setting the product id', () => {
    const onSizeSelect = jest.fn()
    createOutfitSizePicker({onSizeSelect: onSizeSelect})
    expect(onSizeSelect.mock.calls.length).toEqual(defaultProps.products.length)
    expect(onSizeSelect.mock.calls[0][0]).toBe(defaultProps.products[0].id);
    expect(onSizeSelect.mock.calls[1][0]).toBe(defaultProps.products[1].id);
  })

  test('size should be selected when currentSizes are provided', () => {
    const component = createOutfitSizePicker({
      currentSizes: {
        12345: 'sku-1',
        12346: 'sku-26'
      }
    })

    const selectedInputs = component.find('.selected')
    expect(selectedInputs.length).toEqual(2)
    expect(selectedInputs.first().text()).toEqual('3')
    expect(selectedInputs.last().text()).toEqual('12')

  })
})
