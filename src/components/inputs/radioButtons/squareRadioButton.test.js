import React from 'react'
import 'jest-styled-components'
import { SquareRadioButton } from 'SRC'

const { mountWithTheme } = global

const defaultProps = { children: "4", input: { onChange: () => {} } }

describe('() SquareRadioButton', () => {
  const createSquareRadioButton = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<SquareRadioButton {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createSquareRadioButton())
    .toMatchSnapshot()
  })

  test('children should always render', () => {
    expect(createSquareRadioButton().contains(defaultProps.children)).toBeTruthy()
  })

  test('selected should apply proper class', () => {
    expect(createSquareRadioButton({ selected: true }).find('.selected').length).toEqual(1)
  })

  test('disabled should apply proper class', () => {
    expect(createSquareRadioButton({ disabled: true }).find('.disabled').length).toEqual(1)
  })

  test('onClick is fired when input is clicked', () => {
    const onClick = jest.fn()
    expect(onClick).not.toHaveBeenCalled()
    const component = createSquareRadioButton({ input: { onClick: onClick } })
    component.find('input').simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
