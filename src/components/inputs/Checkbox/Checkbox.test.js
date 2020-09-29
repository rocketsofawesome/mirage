import React from 'react'
import 'jest-styled-components'

import Label from 'SRC/core/typography/Label'
import Checkbox, { CheckboxBase } from './Checkbox'

const { mountWithTheme } = global

const defaultProps = {
  input: {
    value: false,
    onChange: jest.fn()
  },
  children: "Example Checkbox"
}

describe('(Component) Checkbox', () => {
  const createCheckbox = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(
      <Checkbox {...props} />
    )
  }

  test('matching the snapshot', () => {
    const component = createCheckbox()
    expect(component).toMatchSnapshot()
  })
})

describe('(Base Component) Checkbox', () => {
  const createBaseCheckbox = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(
      <CheckboxBase {...props} />
    )
  }

  test('matching the snapshot', () => {
    const component = createBaseCheckbox()
    expect(component).toMatchSnapshot()
  })
})
