import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import InformationalSection from './InformationalSection'

const { shallowWithTheme } = global

describe('(Styled component) InformationalSection', () => {
  const createInformationalSection = (props) => {
    return shallowWithTheme(<InformationalSection {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createInformationalSection())
    .toMatchSnapshot()
  })
})
