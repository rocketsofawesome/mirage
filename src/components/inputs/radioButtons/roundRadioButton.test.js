import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { RoundRadioButton } from 'SRC'
import { checked } from './roundRadioButton'

const { shallowWithTheme } = global

const input = {
  defaultChecked: false,
  name: 'size',
  value: '1'
}

describe('(Styled Component) RoundRadio', () => {
  const createRoundRadio = (props) => {
    let inputProp = input
    if (props && props.input) {
      inputProp = {...input, ...props.input}
    }
    return shallowWithTheme(<RoundRadioButton {...props} input={inputProp} />)
  }
  test('matching the snapshot', () => {
    expect(createRoundRadio())
    .toMatchSnapshot()
  })
})
