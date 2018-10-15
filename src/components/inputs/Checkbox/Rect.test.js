import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import StyledRect, { checked, unchecked } from './Rect.base'

describe('(Base Component) Rect', () => {
  test('matching the snapshot', () => {
    const component = shallow(<StyledRect theme={theme} />)
    expect(component).toMatchSnapshot()
  })

  test('adding "checked" styles when checked is passed', () => {
    const component = shallow(<StyledRect theme={theme} checked />)
    expect(component).toHaveStyleRule({
      modifier: css`${checked}`,
    })
  })

  test('adding "unchecked" styles when checked is not passed', () => {
    const component = shallow(<StyledRect theme={theme} />)
    expect(component).toHaveStyleRule({
      modifier: css`${unchecked}`,
    })
  })
})
