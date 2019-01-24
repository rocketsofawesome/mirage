import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { Chevron } from 'SRC'
import { animated, pulseDirection, validateDirection } from './Chevron'

const { mountWithTheme } = global

describe('(Styled Component) Chevron', () => {
  const createChevron = (props) => {
    return mountWithTheme(<Chevron {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createChevron({down: true}))
    .toMatchSnapshot()

    expect(createChevron({up: true}))
    .toMatchSnapshot()

    expect(createChevron({left: true}))
    .toMatchSnapshot()

    expect(createChevron({right: true}))
    .toMatchSnapshot()

    expect(createChevron({down: true, animated: true}))
    .toMatchSnapshot()

    expect(createChevron({up: true, animated: true}))
    .toMatchSnapshot()

    expect(createChevron({left: true, animated: true}))
    .toMatchSnapshot()

    expect(createChevron({right: true, animated: true}))
    .toMatchSnapshot()
  })

  test('animating the chevron', () => {
    expect(createChevron({down: true, animated: true}))
    .toHaveStyleRule({
      modifer: css`${animated}`
    })
  })

  describe('(Custome Style Function) pulseDirection', () => {
    test('setting the direction to the right', () => {
      expect(pulseDirection({right: true}))
      .toEqual('.2rem')
    })
    test('setting the direction to the left', () => {
      expect(pulseDirection({left: true}))
      .toEqual('-.2rem')
    })
  })

  describe('(Custom Prop Validation) validateDirection', () => {
    test('setting no directions should return an error', () => {
      expect(validateDirection({}, '', 'Chevron'))
      .toEqual(Error('No direction prop was supplied to Chevron, please select one.'))
    })

    test('setting more than one direction should return an error', () => {
      expect(validateDirection({up: true, down: true}, '', 'Chevron'))
      .toEqual(Error('More than one direction prop was supplied to Chevron, only use one.'))
    })

    test('setting only one direction should return null', () => {
      expect(validateDirection({up: true}, '', 'Chevron'))
      .toBeNull()
    })
  })
})
