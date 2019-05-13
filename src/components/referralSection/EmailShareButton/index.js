import React from 'react'
import PropTypes from 'prop-types'

import BrowserDetection from 'services/browserDetection'
import { ButtonLink } from 'SRC'

const label = 'Invite Via Email'

const toParams = (params) =>
  Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&')

const getShareUrl = (email, params) => {
  if (!BrowserDetection.isMobile() && email && email.match(/@gmail\.com$/)) {
    return gmailShareUrl(params)
  }
  return mailToShareUrl(params)
}

const mailToShareUrl = (message) => `mailto:?${toParams(message)}`

const gmailShareUrl = (message) => {
  const params = {
    view: 'cm',
    fs: 1,
    su: message.subject,
    body: message.body
  }
  return `https://mail.google.com/mail/?${toParams(params)}`
}

const EmailShareButton = ({ className, referralClicked, referralCode, referralValue, homepageUrl, email }) => {
  const body =
      'Hey!\n\n' +
      'I think you’d really enjoy Rockets of Awesome. ' +
      'They make it easy and fun to get a personalized box ' +
      'of awesome kids clothes delivered to your door every season. ' +
      'Use my personal link to sign up and you’ll get ' +
      `$${referralValue} off your first purchase.\n\n ` +
      `My link: ${homepageUrl}?r=${referralCode}\n\n` +
      'xo'

    const message = {
      subject: ' You’ve got to try Rockets of Awesome!',
      body
    }
    const url = getShareUrl(email, message)
  return <ButtonLink className={className} href={url} onClick={() => referralClicked('share_via_email', label)}>
    Invite Via Email
  </ButtonLink>
}

EmailShareButton.propTypes = {
  className: PropTypes.string,
  referralClicked: PropTypes.func,
  referralCode: PropTypes.string,
  referralValue: PropTypes.string,
  homepageUrl: PropTypes.string,
  email: PropTypes.string
}

export default EmailShareButton
