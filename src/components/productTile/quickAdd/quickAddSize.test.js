import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { QuickAddSize } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  children: '5',
  input:{
    name: '5-default',
    onChange: () => { alert('Selecting a size!') }
  }
}
describe('(Styled Component) QuickAddSize', () => {
  const createQuickAddSize = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<QuickAddSize {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createQuickAddSize())
    .toMatchSnapshot()
  })

  describe('the label', () => {
    test('renders label normally if not OS', () => {
      expect(
        createQuickAddSize()
        .find('label')
        .text()
      ).toEqual(defaultProps.children)
    })

    test('renders text "One Size" if children is "OS"', () => {
      expect(
        createQuickAddSize({...defaultProps, children: 'OS'})
        .find('label')
        .text()
      ).toEqual('One Size')
    })
  })

  test('input props are passed properly', () => {
    expect(
      createQuickAddSize()
      .find('input')
      .prop('name')
    ).toEqual(defaultProps.input.name)
  })
})
