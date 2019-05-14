import React from 'react'
import PropTypes from 'prop-types'

import { ButtonLink } from 'SRC'

const SmsButton = ({ className, referralClicked, referralCode, referralValue, homepageUrl }) => {
  const body =
      'Sign up for Rockets of Awesome with my link and ' +
      `get $${referralValue} off your first purchase of supercool kids clothes! ` +
      `${homepageUrl}?r=${referralCode}`

    const sms_link = `sms:?&body=${encodeURIComponent(body)}`
  return <ButtonLink className={className} href={sms_link} onClick={() => referralClicked('share_via_sms', 'Click Refer via SMS button')}>
    Invite Via Text
  </ButtonLink>
}

SmsButton.propTypes = {
  className: PropTypes.string,
  referralClicked: PropTypes.func,
  referralCode: PropTypes.string,
  referralValue: PropTypes.string,
  homepageUrl: PropTypes.string
}

export default SmsButton
