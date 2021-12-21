import React from 'react'
import 'jest-styled-components'

import { ProgressBarText } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) ProgressBarText', () => {
  const createProgressBarText = (props) => {
    return shallowWithTheme(<ProgressBarText evergreenPromoItemCount='6' evergreenPromoPercent='15' order={{}} {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createProgressBarText({ itemsInBag: 3 }))
    .toMatchSnapshot()
  })
})

