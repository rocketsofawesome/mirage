import React from 'react'
import 'jest-styled-components'

import Label from 'SRC/core/typography/Label'
import Checkbox, { CheckboxBase } from './Checkbox'

const { mountWithTheme } = global

describe('(Component) Checkbox', () => {
  const createCheckbox = (props) => {
    let input = {
      value: false,
      onChange: ()=>{}
    }
    if (props && props.input) {
      input = {...input, ...props.input}
    }
    return mountWithTheme(
      <Checkbox {...props} input={input}  />
    )
  }

  test('matching the snapshot', () => {
    const component = createCheckbox()
    expect(component).toMatchSnapshot()
  })
})

describe('(Base Component) Checkbox', () => {
  const createBaseCheckbox = (props) => {
    let input = {
      value: false,
      onChange: ()=> {}
    }
    if (props && props.input) {
      input = {...input, ...props.input}
    }
    return mountWithTheme(
      <CheckboxBase {...props} input={input} />
    )
  }

  test('matching the snapshot', () => {
    const component = createBaseCheckbox()
    expect(component).toMatchSnapshot()
  })

  test('rendering the children in the Label component', () => {
    const LabelText = 'Example'
    const component = createBaseCheckbox({label: LabelText})
    expect(component.find(Label).prop('children')).toContain(LabelText)
  })
  test('checking the input when input\'s value property is true', () => {
    const component = createBaseCheckbox({ input: { value: true } })
    expect(component.find('input').prop('checked')).toBe(true)
  })
})
