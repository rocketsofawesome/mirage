import React from 'react'
import { css } from 'styled-components'
import 'jest-styled-components'

import { SubscriptionSection } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) SubscriptionSection', () => {
  const createSubscriptionSection = (props) => {
    return shallowWithTheme(<SubscriptionSection />)
  }

  test('matching the snapshot', () => {
    expect(createSubscriptionSection())
    .toMatchSnapshot()
  })

})
