import React from 'react'
import { shallow } from 'enzyme'
import { css } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import StyledCheck, { checked } from './Check.base'

describe('(Base Component) Check', () => {

  test('matching the snapshot', () => {
    const component = shallow(<StyledCheck theme={theme} />)
    expect(component).toMatchSnapshot()
  })

  test('adding "checked" styles when checked is passes', () => {
    const component = shallow(<StyledCheck theme={theme} checked />)
    expect(component).toHaveStyleRule({
      modifier: css`${checked}`,
    })
  })
})
