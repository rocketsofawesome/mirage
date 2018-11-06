import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import BaseButton from './Button.base'

describe('(Base Component) BaseButton', () => {
  test('matching the snapshot', () => {
    const component = shallow(<BaseButton theme={theme} />)
    console.log(component.debug())
    expect(component).toMatchSnapshot()
  })
})
