import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CouponCodeInput from './couponCodeInput'
import RemoveCouponCode from './removeCouponCode'

const RemoveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
  margin: 0 auto;
`

const RemoveWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`

const PromoLabel = styled.div`
  color: ${props => props.theme.colors.navy};
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: 14px;
  display: inline-block;
  max-width: 30rem;
  margin: 0 auto;
`

class BaseCouponCodeWrapper extends React.Component {
  constructor (props) {
    super(props)

    this.state = { couponCode: '' }
  }

  handleCouponCodeChange = (e) => {
    this.setState({ couponCode: e.target.value })
  }

  componentDidMount () {
    const { appliedPromotion, applyPromotion } = this.props
    if (appliedPromotion && !appliedPromotion.expired) {
      this.setState({
        couponCode: appliedPromotion.value
      })
      applyPromotion(appliedPromotion.value)
    }
  }

  render () {
    const {
      loading,
      promotion,
      applyPromotion,
      removePromotion,
      errorMessage,
      promoHasBeenApplied,
      showToggle,
      className,
    } = this.props
    const { couponCode } = this.state

    return (
      <div className={className}>
        {!promoHasBeenApplied
          ? <div>
            <CouponCodeInput
              couponCode={couponCode}
              onChange={this.handleCouponCodeChange}
              applyPromotion={applyPromotion}
              removePromotion={removePromotion}
              loading={loading}
              errorMessage={errorMessage}
              showToggle={showToggle}
            />
          </div>
          : <RemoveContainer>
            <RemoveWrapper>
              <PromoLabel>Promotion Applied</PromoLabel>
            </RemoveWrapper>
            <RemoveCouponCode removePromotion={removePromotion} promoHasBeenApplied={promoHasBeenApplied}
              loading={loading} promotion={promotion.promotion_code_id} />
          </RemoveContainer>
        }
      </div>
    )
  }
}

BaseCouponCodeWrapper.propTypes = {
  promotion: PropTypes.object,
  loading: PropTypes.bool,
  promoHasBeenApplied: PropTypes.bool,
  errorMessage: PropTypes.string,
  applyPromotion: PropTypes.func,
  removePromotion: PropTypes.func,
  appliedPromotion: PropTypes.object,
  showToggle: PropTypes.bool,
  showBorder: PropTypes.bool
}

const CouponCodeWrapper = styled(BaseCouponCodeWrapper)`
  width: 100%;
  padding-bottom: ${props => props.errorMessage ? '30px' : '20px'};
  border-bottom: ${props => props.showBorder ? '1px solid #d5d5d5' : 'none'};
`

export default CouponCodeWrapper
