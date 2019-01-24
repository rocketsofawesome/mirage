import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { Label } from 'SRC'
import { LowercaseLabel } from './Label'

const { mountWithTheme } = global

describe('(Styled Component) Label', () => {
  const createLabel = (props) => {
    return mountWithTheme(<Label {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createLabel())
    .toMatchSnapshot()
  })

  test('setting label to be lower case', () => {
    expect(createLabel({lowercase: true}))
    .toHaveStyleRule({
      'text-transform': 'inherit'
    })
  })
})

describe('(Component) Default Label', () => {
  const createLowercaseLabel = (props) => {
    return mountWithTheme(<LowercaseLabel {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createLowercaseLabel())
    .toMatchSnapshot()
  })

  test('setting the className', () => {
    const className = "example-class"
    expect(createLowercaseLabel({className: className}).prop('className'))
    .toContain(className)
  })

  test('setting the label text', () => {
    const text = "Example Label"
    expect(createLowercaseLabel({children: text}).text())
    .toContain(text)
  })

  test('setting alignRight prop', () => {
    expect(createLowercaseLabel({alignRight: true}))
    .toHaveStyleRule({
      'text-align': 'right'
    })
  })

  test('setting alignRight prop to false', () => {
    expect(createLowercaseLabel({alignRight: false}))
    .toHaveStyleRule({
      'text-align': 'left'
    })
  })
})
