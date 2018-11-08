import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import StyledCheckboxSVG, { CheckboxSVG } from './CheckboxSVG.base'
import Check from './Check.base'
import Rect from './Rect.base'

const { mountWithTheme } = global

describe('(Component) StyledCheckboxSVG', () => {
  const createBaseStyledCheckboxSVG = (props) => {
    return mountWithTheme(<StyledCheckboxSVG {...props} />)
  }

  test('matching the snapshot', () => {
    const component = createBaseStyledCheckboxSVG()
    expect(component).toMatchSnapshot()
  })
})

describe('(Base Component) CheckboxSVG', () => {
  const createBaseCheckboxSVG = (props) => {
    return mountWithTheme(<CheckboxSVG {...props} />)
  }

  test('matching the snapshot', () => {
    const component = createBaseCheckboxSVG()
    expect(component).toMatchSnapshot()
  })
  test('passing the checked prop', () => {
    const checked = true
    const component = createBaseCheckboxSVG({checked: true})
    expect(component.find(Check).prop('checked')).toBe(checked)
    expect(component.find(Rect).prop('checked')).toBe(checked)
  })
})
