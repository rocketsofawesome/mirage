import React from 'react'
import 'jest-styled-components'

import { ReferralSection } from 'SRC'

const { shallowWithTheme } = global

describe('(Styled Component) ReferralSection', () => {
  const createReferralSection = (props) => {
    return shallowWithTheme(<ReferralSection {...props} />)
  }

  test('matching the snapshot', () => {
    expect(createReferralSection({
      referralValue: '20',
      homepageUrl: 'https://localhost:3001',
      referralClicked: () => {},
      referralCode: 'referral1234',
      name: 'John Doe'
    }))
    .toMatchSnapshot()
  })
})
