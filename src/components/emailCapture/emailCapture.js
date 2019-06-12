import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FlexCol, H3, P } from 'SRC'
import EmailCaptureForm from './emailCaptureForm'
import cloudinary from 'SRC/services/cloudinary'

const SubscriptionBox = styled.div`
  border: 2px solid ${props => props.theme.colors.electricBlue};
  background-color: ${props => props.theme.colors.white};
  max-width: 400px;
  padding: 0px 2rem;
`

const ConfirmationBox = styled.div`
  border: 2px solid ${props => props.theme.colors.electricBlue};
  background-color: ${props => props.theme.colors.yellow};
  padding: 0px 2rem;
  max-width: 400px;

  ${props => props.theme.breakpointsVerbose.belowTabletMax`
    padding: 0.5rem;
  `}
`

const PromoCodeBox = styled.div`
  display: flex;
  min-width: 175px;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${props => props.theme.colors.gray5};
  background-color: ${props => props.theme.colors.white};
  ${props => props.theme.breakpointsVerbose.aboveTabletMax`
    margin-bottom: 2rem;
  `}
  ${props => props.theme.breakpointsVerbose.belowTabletMax`
    margin: 0 2rem 2rem 2rem;
  `}
`

const DAYS_TIL_EXPIRATION = 30
const DATE_FORMAT_OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

class BaseEmailCapture extends React.Component {
  constructor (props) {
    super(props)
    this.state = { emailSubmitted: false }
  }

  dateDisplay = () => {
    var expireDate = new Date()
    expireDate.setDate(expireDate.getDate() + DAYS_TIL_EXPIRATION)
    return expireDate.toLocaleDateString('en-US', DATE_FORMAT_OPTIONS)
  }

  submitEmail = (event) => {
    event.preventDefault()

    const { emailSubmit } = this.props
    const email = event.target[0].value

    if (email && email !== "") {
      this.setState({ emailSubmitted: true }, emailSubmit(email))
    } else {
      this.setState({ errorMessage: 'Please enter your email address' })
    }
  }

  render () {
    const { emailSubmitted, errorMessage } = this.state
    const { className, promoCode } = this.props

    return (
      <div className={className}>
        {!emailSubmitted &&
          <SubscriptionBox>
            <H3 lowercase>
              Sign up for Awesome + get 10% off your first purchase
              <span role='img' aria-label='rocket'> 🚀</span>
            </H3>
            <EmailCaptureForm onEmailSubmit={this.submitEmail} errorMessage={errorMessage} />
          </SubscriptionBox>
        }
        {emailSubmitted &&
          <ConfirmationBox>
            <H3 lowercase>
              Thanks! Your code for 10% off your first purchase is:
            </H3>
            <FlexCol mobile={{width: 4}} desktop={{width: 8, span: 2}}>
              <PromoCodeBox>
                <H3>{promoCode}</H3>
              </PromoCodeBox>
              <P>For new customers only. Cannot be used on subscription orders.
              Offer expires on {this.dateDisplay()}.</P>
            </FlexCol>
          </ConfirmationBox>
        }
      </div>
    )
  }
}

const EmailCapture = styled(BaseEmailCapture)`
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 2em;

  background-image: url('${cloudinary.url('web/box/d_flat_rate_return_header')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  ${H3} {
    text-align: center;
  }

  ${P} {
    ${props => props.theme.breakpointsVerbose.aboveTabletMax`
      margin-bottom: 5.5rem;
    `}
    ${props => props.theme.breakpointsVerbose.belowTabletMax`
      margin: 0 2rem 5.5rem 2rem;
    `}
  }
`

EmailCapture.propTypes = {
  className: PropTypes.string
}

/** @component */
export default EmailCapture
