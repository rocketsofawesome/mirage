import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from '../theme'
import BlueHr from './BlueHr'

describe('(Component) BlueHr', () => {
  test('matching the snapshot', () => {
    const component = shallow(<BlueHr theme={theme} />)
    expect(component).toMatchSnapshot()
  })
})
