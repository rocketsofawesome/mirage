import React from 'react'
import 'jest-styled-components'
import { Padding } from 'SRC'
import { spacers } from 'utils/spacing'

const { shallowWithTheme } = global

const createPadding = props => {
  return shallowWithTheme(<Padding {...props} />)
}

describe('(StyledComponent) Padding', () => {
  test('matches the snapshot', () => {
    expect(createPadding()).toMatchSnapshot()
  })

  test('has no padding if props are not provided', () => {
    const component = createPadding()
    expect(component).toHaveStyleRule({ 'padding-top': 0 })
    expect(component).toHaveStyleRule({ 'padding-bottom': 0 })
    expect(component).toHaveStyleRule({ 'padding-right': 0 })
    expect(component).toHaveStyleRule({ 'padding-left': 0 })
  })

  test('applies appropriate padding with qualitative values', () => {
    const component = createPadding({ t: 'lg', b: 'md', r: 'sm', l: 'xl' })
    expect(component).toHaveStyleRule({ 'padding-top': spacers.lg })
    expect(component).toHaveStyleRule({ 'padding-bottom': spacers.md })
    expect(component).toHaveStyleRule({ 'padding-right': spacers.sm })
    expect(component).toHaveStyleRule({ 'padding-left': spacers.xl })
  })

  test('applies appropriate padding with quantitative values', () => {
    const component = createPadding({
      t: '6rem',
      b: '2rem',
      r: '10rem',
      l: '5rem'
    })
    expect(component).toHaveStyleRule({
      'padding-top': '6rem'
    })
    expect(component).toHaveStyleRule({
      'padding-bottom': '2rem'
    })
    expect(component).toHaveStyleRule({
      'padding-right': '10rem'
    })
    expect(component).toHaveStyleRule({
      'padding-feft': '5rem'
    })
  })
})
