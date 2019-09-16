import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { PersistantPricing } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {

}
describe('(Styled Component) PersistantPricing', () => {
  const createPersistantPricing = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<PersistantPricing {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createPersistantPricing())
    .toMatchSnapshot()
  })

  test('renders the children', () => {
    const child = <span key="message1">Example</span>
    expect(createPersistantPricing({children: [child]}).find('span').length).toEqual(1)
  })
})
