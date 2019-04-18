import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import RoundRadio, { checked } from './RoundRadio'

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
    return shallowWithTheme(<RoundRadio {...props} input={inputProp} />)
  }
  test('matching the snapshot', () => {
    expect(createRoundRadio())
    .toMatchSnapshot()
  })

  test('when a radio is checked', () => {
    expect(createRoundRadio())
    .toHaveStyleRule({
      modifier: css`${checked}`
    })
  })
})
