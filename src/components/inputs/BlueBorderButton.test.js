import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import BlueBorderButton from './BlueBorderButton'

describe('(Component) BlueBorderButton', () => {
  test('matching the snapshot', () => {
    const component = shallow(<BlueBorderButton theme={theme} />)
    expect(component).toMatchSnapshot()
  })
})
