import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export class BaseRemoveCouponCode extends React.Component {
  removePromoCode = () => {
    const {removePromotion, promotion} = this.props
    removePromotion(promotion)
  }
  render () {
    const { className, promoHasBeenApplied, loading } = this.props
    return promoHasBeenApplied
      ? <div className={className} loading={loading} onClick={this.removePromoCode}>REMOVE</div>
      : null
  }
}

BaseRemoveCouponCode.propTypes = {
  removePromotion: PropTypes.func,
  promoHasBeenApplied: PropTypes.bool,
  loading: PropTypes.bool,
  promotion: PropTypes.number,
  className: PropTypes.string
}

const RemoveCouponCode = styled.div`
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${props => props.theme.colors.rocketBlue};
  cursor: pointer;
  opacity: ${props => props.loading ? .5 : 1}
`

export default RemoveCouponCode
