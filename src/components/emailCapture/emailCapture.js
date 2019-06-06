import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FlexCol, H1, H2, P } from 'SRC'
import EmailCaptureForm from './emailCaptureForm'
import cloudinary from 'SRC/services/cloudinary'

const SubscriptionBox = styled.div`
  border: 2px solid ${props => props.theme.colors.rocketBlue};
  background-color: ${props => props.theme.colors.white};
`

const ConfirmationBox = styled.div`
  border: 2px solid ${props => props.theme.colors.rocketBlue};
  background-color: ${props => props.theme.colors.yellow};
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
    const { emailSubmit } = this.props
    this.setState({ emailSubmitted: true }, emailSubmit(event.target[0].value))
  }

  render () {
    const { emailSubmitted } = this.state
    const { className, promoCode } = this.props

    return (
      <div className={className}>
        {!emailSubmitted &&
          <FlexCol mobile={{width: 10}} desktop={{width: 6, span: 3}}>
            <SubscriptionBox>
              <H1>
                Sign up for Awesome + Get 10% off your first purchase 
                <span role='img' aria-label='rocket'> 🚀</span>
              </H1>
              <EmailCaptureForm onEmailSubmit={this.submitEmail} />
            </SubscriptionBox>
          </FlexCol>
        }
        {emailSubmitted &&
          <FlexCol mobile={{width: 4}} desktop={{width: 6, span: 3}}>
            <ConfirmationBox>
              <H1>
                Thanks! Your code for 10% off your first purchase is:
              </H1>
              <FlexCol mobile={{width: 4}} desktop={{width: 8, span: 2}}>
                <PromoCodeBox>
                  <H2>{promoCode}</H2>
                </PromoCodeBox>
                <P>For new customers only. Cannot be used on subscription orders.
                Offer expires on {this.dateDisplay()}.</P>
              </FlexCol>
            </ConfirmationBox>
          </FlexCol>
        }
      </div>
    )
  }
}

const EmailCapture = styled(BaseEmailCapture)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 2em;

  background-image: url('${cloudinary.url('Lightning_Bolt_nkv7ua')}');
  background-repeat: repeat;

  ${H1} {
    text-align: center;
    margin: 5.5rem 2rem;
  }

  ${H2} {
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

export default EmailCapture
