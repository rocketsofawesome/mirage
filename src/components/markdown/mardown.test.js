import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { H1, Markdown } from 'SRC'

const { mountWithTheme } = global

describe('(Styled Component) markdown', () => {
  const defaultProps = {
    children: '# Heading 1'
  }
  const createmarkdown = (props = defaultProps) => {
    return mountWithTheme(<Markdown {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createmarkdown())
    .toMatchSnapshot()
  })

  test('Rendering the proper typography elements', () => {
    expect(createmarkdown().find('h1').length).toEqual(1)
  })
})
