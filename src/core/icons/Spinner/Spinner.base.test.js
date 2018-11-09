import React from 'react'
import { shallow } from 'enzyme'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import Spinner, { SpinnerSVG } from './Spinner.base'
const { shallowWithTheme } = global

describe('(Component) Spinner', () => {
  const createBaseSpinner = (props) => {
    return shallowWithTheme(
      <Spinner {...props}/>
    )
  }
  test('matching the snapshot', () => {
    expect(createBaseSpinner())
    .toMatchSnapshot()
  })

  test('changing the size of the spinner', () => {
    const size = '10rem'
    expect(createBaseSpinner({size: size}))
    .toHaveStyleRule({
      width: size,
      height: size
    })
  })
})

describe('(Base Component) SpinnerSVG', () => {
  const createSpinnerSVG = (props) => {
    return shallowWithTheme(<SpinnerSVG {...props} />)
  }
  test('matching the snapsot', () => {
    expect(createSpinnerSVG())
    .toMatchSnapshot()
  })

  test('setting the className', () => {
    const className = 'example-class'
    expect(
      createSpinnerSVG({className: className}).prop('className')
    ).toEqual(className)
  })
})
