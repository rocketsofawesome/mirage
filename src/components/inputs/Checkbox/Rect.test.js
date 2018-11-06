import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import StyledRect, { checked, Rect, unchecked } from './Rect.base'

const { shallowWithTheme } = global

describe('(Base Component) StyledRect', () => {
  const createBaseStyledRect = (props) => {
    return shallowWithTheme(<StyledRect {...props} />)
  }
  test('matching the snapshot', () => {
    const component = createBaseStyledRect()
    expect(component).toMatchSnapshot()
  })

  test('adding "checked" styles when checked is passed', () => {
    const component = createBaseStyledRect({checked: true})
    expect(component).toHaveStyleRule({
      modifier: css`${checked}`,
    })
  })

  test('adding "unchecked" styles when checked is not passed', () => {
    const component = createBaseStyledRect()
    expect(component).toHaveStyleRule({
      modifier: css`${unchecked}`,
    })
  })
})

describe('(Base Component) Rect', () => {
  const createBaseRect = (props) => {
    return shallowWithTheme(<Rect {...props} />)
  }

  test('matching the snapshot', () => {
    const component = createBaseRect()
    expect(component).toMatchSnapshot()
  })

  test('setting the classname', () => {
    const className = 'example'
    const component = createBaseRect({className: className})
    expect(component.prop('className')).toEqual(className)
  })
})
