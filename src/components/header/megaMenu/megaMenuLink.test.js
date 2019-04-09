import React from 'react'
import 'jest-styled-components'

import { MegaMenuLink, NavyLink } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  clearMenuImage: jest.fn(),
  id: 'example-link',
  link: {
    text: 'Example',
    target: '/example',
    src: 'https://www.fillmurray.com/g/300/300'
  },
  renderLink: jest.fn((props) => <a {...props} />),
  setMenuImage: () => jest.fn()
}

describe('(Styled Component) MegaMenuLink', () => {
  const createMegaMenuLink = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<MegaMenuLink {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createMegaMenuLink())
    .toMatchSnapshot()
  })

  test('rendering out children', () => {
    expect(
      createMegaMenuLink()
      .contains('Example')
    ).toBeTruthy()
  })

  test('firing renderLink function', () => {
    createMegaMenuLink()
    expect(defaultProps.renderLink).toBeCalled()
  })

  test('firing setMenuImage function', () => {
    const settingImage = jest.fn()
    const setMenuImage = jest.fn(() => settingImage)
    const component = createMegaMenuLink({setMenuImage: setMenuImage})

    expect(settingImage).not.toBeCalled()

    expect(
      setMenuImage.mock.calls[1][0]
    ).toEqual(defaultProps.link.src)

    component
    .find(NavyLink)
    .simulate('focus')

    expect(settingImage).toBeCalled()
  })

  test('firing clearMenuImage function', () => {
    const component = createMegaMenuLink()
    expect(defaultProps.clearMenuImage).not.toBeCalled()

    component
    .find(NavyLink)
    .simulate('blur')

    expect(defaultProps.clearMenuImage).toBeCalled()
  })
})
