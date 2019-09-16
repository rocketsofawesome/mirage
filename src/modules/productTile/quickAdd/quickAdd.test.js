import React from 'react'
import 'jest-styled-components'

import { QuickAdd } from 'SRC'
import { productWithVariants } from '../defaultProps'
const { mountWithTheme } = global

const variants = productWithVariants.product.variants
const defaultProps = {
  ...variants,
  show: false
}

describe('(Styled Component) QuickAdd', () => {
  const createQuickAdd = (inProps) => {
    const props = {
      defaultProps,
      ...inProps
    }
    return mountWithTheme(<QuickAdd {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createQuickAdd()).toMatchSnapshot()
  })
})
