import React from 'react'
import { shallow } from 'enzyme'
import { css, keyframes } from 'styled-components'
import 'jest-styled-components'

import { theme } from 'SRC/core/theme'
import Checkmark, { UnstyledCheckmark, animateCheckmarkIn } from './Checkmark.base'

describe('(Component) Checkmark', () => {
  test('matching the snapshot', () => {
    const component = shallow(<Checkmark theme={theme} />)
    expect(component).toMatchSnapshot()
  })

  test('setting the width', () => {
    const width = '3rem'
    const component = shallow(<Checkmark theme={theme} width={width} />)
    expect(component).toHaveStyleRule({
      width: width
    })
  })

  test('setting the stroke', () => {
    const stroke = 'red'
    const component = shallow(<Checkmark theme={theme} stroke={stroke} />)
    expect(component).toHaveStyleRule({
      stroke: stroke
    })
  })
})

describe('(Keyframe) animateCheckmarkIn', () => {
  test('passing props to the animation', () => {
    expect(animateCheckmarkIn(Checkmark.defaultProps))
    .not.toEqual(animateCheckmarkIn({width: '100px', stroke: 'red'}))
  })
})

describe('(Base Component) UnstyledCheckmark', () => {
  test('matching the snapshot', () => {
    const component = shallow(<UnstyledCheckmark />)
    expect(component).toMatchSnapshot()
  })
  test('passing props to component', () => {
    const className = 'exampleClass'
    const component = shallow(<UnstyledCheckmark className={className} />)
    expect(component.prop('className')).toEqual(className)
  })
})
