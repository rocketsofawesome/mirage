import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { Card, InlineImage, H1 } from 'SRC'

const { mountWithTheme } = global

const defaultProps = {
  children: [
    <InlineImage key='img' src='https://www.fillmurray.com/g/300/300' />,
    <H1 key='title'>Example</H1>
  ]
}

describe('(Component) Card', () => {
  const createCard = (inProps) => {
    const props = {
      ...defaultProps,
      ...inProps
    }
    return mountWithTheme(<Card {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createCard())
    .toMatchSnapshot()
  })

  test('children should be rendered out', () => {
    const component = createCard()
    expect(component.find('h1').length).toEqual(1)
  })

  test('element prop wraps the card component', () => {
    expect(
      createCard({element: 'article'})
      .find('article')
      .length
    ).toEqual(1)
  })
})
