import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import StyledCheckboxSVG, { CheckboxSVG } from './CheckboxSVG.base'
import Check from './Check.base'
import Rect from './Rect.base'

describe('(Component) Checkbox', () => {
  test('matching the snapshot', () => {
    const component = shallow(<StyledCheckboxSVG theme={theme} />)
    expect(component).toMatchSnapshot()
  })
})

describe('(Base Component) CheckboxSVG', () => {
  test('passing the checked prop', () => {
    const checked = true
    const component = shallow(<CheckboxSVG checked={checked} />)
    expect(component.find(Check).prop('checked')).toBe(checked)
    expect(component.find(Rect).prop('checked')).toBe(checked)
  })
})
