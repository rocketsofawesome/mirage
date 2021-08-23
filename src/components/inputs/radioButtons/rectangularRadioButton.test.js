import React from 'react'
import 'jest-styled-components'

import { RectangularRadioButton } from 'SRC'

const { shallowWithTheme } = global

const input = {
  defaultChecked: false,
  name: 'gender',
  labels: 'BOYS',
  value: 'boys',
  input: { onChange: () => {} }
}

describe('(Styled Component) RectangularRadio', () => {
  const createRectangularRadio = (props) => {
    let inputProp = input
    if (props && props.input) {
      inputProp = {...input, ...props.input}
    }
    return shallowWithTheme(<RectangularRadioButton {...props} input={inputProp} />)
  }
  test('matching the snapshot', () => {
    expect(createRectangularRadio())
    .toMatchSnapshot()
  })
})
