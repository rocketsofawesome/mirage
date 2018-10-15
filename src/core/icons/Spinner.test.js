import React from 'react'
import { shallow } from 'enzyme'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from '../theme'
import Spinner, { SpinnerSVG, fill, blueFill, navyFill, grayFill, whiteFill } from './Spinner'

describe('(Component) Spinner', () => {
  test('matching the snapshot', () => {
    const component = shallow(<Spinner theme={theme} />)
    expect(component).toMatchSnapshot()
  })

  test('changing the size of the spinner', () => {
    const size = '10rem'
    const component = shallow(<Spinner theme={theme} size={size} />)
    expect(component).toHaveStyleRule({
      width: size,
      height: size
    })
  })

  test('changing fill to white', () => {
    const component = shallow(<Spinner theme={theme} fill='white'/>)
    expect(component).toHaveStyleRule({
      modifier: css`${whiteFill}`
    })
  })

  test('changing fill to navy', () => {
    const component = shallow(<Spinner theme={theme} fill='navy' />)
    expect(component).toHaveStyleRule({
      modifier: css`${navyFill}`
    })
  })

  test('changing fill to gray', () => {
    const component = shallow(<Spinner theme={theme} fill='gray'/>)
    expect(component).toHaveStyleRule({
      modifier: css`${grayFill}`
    })
  })
})

describe('(Base Component) SpinnerSVG', () => {
  const component = shallow(<SpinnerSVG />)
  expect(component).toMatchSnapshot()
})
