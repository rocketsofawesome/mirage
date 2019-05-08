import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ToggleIcon from './toggleIcon'
import { Button, Input } from '../inputs'

const AppliedInput = styled(Input)`
  max-width: 250px;
  width: 100%;
  height: 100%;
  margin-right: 10px;
  padding-left: 0;
`

const PromoButton = styled(Button)`
  max-width: 100px;
  height: 100%;
  ${props => props.theme.breakpointsVerbose.aboveTablet`
    max-width: 83px;
  `}
`

const StyledToggle = styled(ToggleIcon)`
  margin-left: 0;
`

const P = styled.p`
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;
  color: ${props => props.theme.colors.rocketBlue};
  text-transform: uppercase;
  margin-left: 15px;
  margin-bottom: 0;
  margin-top: 0;
`

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`

const ApplyContainer = styled.div`
  display: flex;
  max-width: 30rem;
  margin: 0 auto;
  height: 60px !important;
  margin-top: 20px;
`

export default class CouponCodeInput extends React.Component {
  state = { show: false }
  toggle = () => {
    this.setState({ show: !this.state.show })
  }

  _removePromotion = () => {
    this.setState({
      couponCode: '',
      show: false
    })
    this.props.removePromotion()
  }

  applyPromotion = () => {
    this.props.applyPromotion(this.props.couponCode)
  }

  render () {
    const { errorMessage, loading, couponCode, onChange, showToggle = true } = this.props
    const { show } = this.state

    return (
      <div>
        {showToggle && <ToggleContainer onClick={this.toggle}>
          <StyledToggle
            show={show} />
          <P role='link' aria-label='add promo code'>ADD PROMO CODE</P>
        </ToggleContainer>}
        {(show || !showToggle) &&
          <ApplyContainer aria-live='polite'>
            <AppliedInput
              type='text'
              label='PROMO CODE'
              value={couponCode}
              onChange={onChange}
              formError={!!errorMessage}
              errorMessage={errorMessage} />
            <PromoButton disabled={loading} onClick={this.applyPromotion}>
              APPLY
            </PromoButton>
          </ApplyContainer>
        }
      </div>
    )
  }
}

CouponCodeInput.propTypes = {
  couponCode: PropTypes.string,
  onChange: PropTypes.func,
  removePromotion: PropTypes.func,
  applyPromotion: PropTypes.func,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool,
  showToggle: PropTypes.bool
}
