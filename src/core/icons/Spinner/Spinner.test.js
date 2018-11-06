import React from 'react'
import { shallow } from 'enzyme'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import Spinner, { SpinnerSVG } from './Spinner.base'
const { shallowWithTheme } = global

describe('(Component) Spinner', () => {
  const createBaseSpinner = (props) => {
    return shallowWithTheme(
      <Spinner {...props}/>
    )
  }
  test('matching the snapshot', () => {
    const component = createBaseSpinner()
    expect(component).toMatchSnapshot()
  })

  test('changing the size of the spinner', () => {
    const size = '10rem'
    const component = createBaseSpinner({size: size})
    expect(component).toHaveStyleRule({
      width: size,
      height: size
    })
  })
})

describe('(Base Component) SpinnerSVG', () => {
  const component = shallow(<SpinnerSVG />)
  expect(component).toMatchSnapshot()
})
