import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import SizeRadio, { checked } from './SizeRadio'

const { shallowWithTheme } = global

const input = {
  defaultChecked: false,
  name: 'size',
  value: '1'
}

describe('(Styled Component) SizeRadio', () => {
  const createSizeRadio = (props) => {
    let inputProp = input
    if (props && props.input) {
      inputProp = {...input, ...props.input}
    }
    return shallowWithTheme(<SizeRadio {...props} input={inputProp} />)
  }
  test('matching the snapshot', () => {
    expect(createSizeRadio())
    .toMatchSnapshot()
  })

  test('when a radio is checked', () => {
    expect(createSizeRadio())
    .toHaveStyleRule({
      modifier: css`${checked}`
    })
  })
})
