import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H1, P, Link } from 'SRC'

const TitlePink = styled.span`
  color: ${props => props.theme.colors.pink};
`

const BaseHeader = ({ className, referralValue, homepageUrl }) => {
  return (
    <div className={className}>
      <H1>
        Tell a <TitlePink>friend</TitlePink>, get ${referralValue}
      </H1>
      <P>
        Get ${referralValue} when your friend makes their first purchase—they’ll get ${referralValue} too!
      </P>
      <Link
        target='_blank'
        rel='noopener noreferrer'
        href={`${homepageUrl}/referral-program`}>
        View details
      </Link>
    </div>
  )
}

BaseHeader.propTypes = {
  className: PropTypes.string,
  referralValue: PropTypes.string,
  homepageUrl: PropTypes.string
}

const ReferralHeader = styled(BaseHeader)`
  text-align: center;
  font-family: ${props => props.theme.fonts.primaryFont};
  font-weight: 300;
`
export default ReferralHeader
