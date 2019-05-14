import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { P } from 'SRC'
import BrowserDetection from 'services/browserDetection'
import ReferralHeader from './ReferralHeader'
import EmailShareButton from './EmailShareButton'
import SmsButton from './SmsButton'
import ShareOptions from './ShareOptions'

const Container = styled.div`
  padding-bottom: 50px;
  padding-top: 50px;
  text-align: center;
`

const HorizontalRule = styled.div`
  margin: 35px auto 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 330px;
  width: 100%;
  height: 10px;
  ${props => props.theme.media.phone`
    max-width: 290px;
  `}
`

const HRule = styled.div`
  height: 1px;
  width: 50px;
  border-bottom: solid #d5d5d5 1px;
`

const StyledP = styled(P)`
  font-weight: 100;
  padding: 0 7px;
  font-size: 16px;
  line-height: 1.31;
  text-align: center;
`

const StyledSmsButton = styled(SmsButton)`
  margin-top: 30px;
`

const StyledEmailButton = styled(EmailShareButton)`
  margin-top: 30px;
`

const StyledShareOptions = styled(ShareOptions)`
  margin-top: 20px;
`

const BaseReferralSection = ({className, referralValue, homepageUrl, referralClicked, referralCode, email, name}) => {
  return (
    <div className={className}>
      <Container>
        <ReferralHeader referralValue={referralValue} homepageUrl={homepageUrl} />
        { BrowserDetection.isMobile() &&
          <StyledSmsButton
            referralValue={referralValue}
            homepageUrl={homepageUrl}
            referralClicked={referralClicked}
            referralCode={referralCode}/>
        }
        <StyledEmailButton
          email={email}
          referralValue={referralValue}
          homepageUrl={homepageUrl}
          referralClicked={referralClicked}
          referralCode={referralCode}/>
        <HorizontalRule>
          <HRule />
          <StyledP>or</StyledP>
          <HRule />
        </HorizontalRule>
        <StyledP>Share your personal link!</StyledP>
        <StyledShareOptions
            name={name}
            homepageUrl={homepageUrl}
            referralValue={referralValue}
            referralClicked={referralClicked}
            referralCode={referralCode}/>
      </Container>
    </div>
  )
}

BaseReferralSection.propTypes = {
  className: PropTypes.string,
  referralValue: PropTypes.string,
  homepageUrl: PropTypes.string,
  referralClicked: PropTypes.func,
  referralCode: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string
}

const ReferralSection = styled(BaseReferralSection)`
  background-color: ${props => props.theme.colors.white};
  border: 15px solid ${props => props.theme.colors.lightPink};
  margin-top: 30px;
  ${props => props.theme.media.tablet`
    padding-top: 14px;
    max-width: 600px;
    margin: 30px auto 0;
  `}

  ${props => props.theme.media.tabletMax`
    border-width: 30px;
  `}
`

export default ReferralSection
