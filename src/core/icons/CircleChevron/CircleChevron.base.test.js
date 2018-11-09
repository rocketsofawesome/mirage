import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import BaseChevron, { CircleChev, validateDirection } from './CircleChevron.base'

const { shallowWithTheme } = global

describe('(Styled Component) BaseChevron', () => {
  const createBaseChevron = (props) => {
    return shallowWithTheme(<BaseChevron {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createBaseChevron({left: true}))
    .toMatchSnapshot()
  })

  test('setting the width', () => {
    const width = '6rem'
    expect(createBaseChevron({left: true, width: width}))
    .toHaveStyleRule({
      width: width
    })
  })
})

describe('(Component) CircleChev', () => {
  const createCircleChev = (props) => {
    return shallowWithTheme(<CircleChev {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createCircleChev({left: true}))
    .toMatchSnapshot()
  })

  describe('setting the direction', () => {
    test('setting direction to the left', () => {
      expect(
        createCircleChev({left: true})
        .find('.left').length
      ).toEqual(1)
      expect(
        createCircleChev({left: true})
        .find('.right').length
      ).toEqual(0)
    })

    test('setting direction to the right', () => {
      expect(
        createCircleChev({right: true})
        .find('.right').length
      ).toEqual(1)
      expect(
        createCircleChev({right: true})
        .find('.left').length
      ).toEqual(0)
    })
  })
})

describe('(Custom Prop Validation) validateDirection', () => {
  test('not setting the direction should return an error', () => {
    expect(validateDirection({}, '', 'CircleChev'))
    .toEqual(Error('Either the left or right prop must be supplied to CircleChev.'))
  })
  test('not setting both the left and right directions should return an error', () => {
    expect(validateDirection({left: true, right: true}, '', 'CircleChev'))
    .toEqual(Error('Both the left and right prop were supplied to CircleChev, only select one.'))
  })
  test('setting one direction should return null', () => {
    expect(validateDirection({left: true}, '', 'CircleChev'))
    .toBeNull()
  })
})
