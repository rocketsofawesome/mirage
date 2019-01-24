import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import { Checkbox, Label } from 'SRC'
import { CheckboxBase, CheckboxSVG, StyledCheckboxSVG } from './Checkbox'

const LabelText = 'Example Checkbox'

describe('(Component) Checkbox', () => {
  test('matching the snapshot', () => {
    const tree = renderer
   .create(<Checkbox theme={theme} input={{value: false}} label={LabelText}/>)
   .toJSON()
   expect(tree).toMatchSnapshot()
  })
})

describe('(Base Component) Checkbox', () => {
  test('rendering the children in the Label component', () => {
    const component = shallow(
    <CheckboxBase theme={theme} input={{value: false}} label={LabelText}/>
    )
    expect(component.find(Label).prop('children')).toContain(LabelText)
  })
  test('checking the input when input\'s value property is true', () => {
    const component = shallow(
      <CheckboxBase theme={theme} input={{value: true}} label={LabelText}/>
    )
    expect(component.find('input').prop('checked')).toBe(true)
  })
})
