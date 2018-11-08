import React from 'react'
import { shallow } from 'enzyme'
import { css } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import StyledCheck, { checked } from './Check.base'

const { shallowWithTheme } = global

describe('(Base Component) Check', () => {
  const createBaseCheck = (props) => {
    return shallowWithTheme(
      <StyledCheck {...props}/>
    )
  }

  test('matching the snapshot', () => {
    const component = createBaseCheck()
    expect(component).toMatchSnapshot()
  })

  test('adding "checked" styles when checked is passes', () => {
    const component = createBaseCheck({checked: true})
    expect(component).toHaveStyleRule({
      modifier: css`${checked}`,
    })
  })
})
