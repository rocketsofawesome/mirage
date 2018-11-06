import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import Button, { disabledOrLoading } from './Button'

describe('(Componenet) Button', () => {
  test('matching the snapshot', () => {
    const component = shallow(<Button theme={theme} />)
    expect(component).toMatchSnapshot()
  })

  test('disabling the button', () => {
    const tree = renderer.create(<Button theme={theme} disabled />).toJSON()
    expect(tree).toHaveStyleRule('background-color', theme.colors.loading)
  })
})
