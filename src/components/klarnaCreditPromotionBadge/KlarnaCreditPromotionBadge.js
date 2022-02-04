import React from 'react'
import PropTypes from 'prop-types'

function refresh () {
  window.KlarnaOnsiteService = window.KlarnaOnsiteService || []
  window.KlarnaOnsiteService.push({ eventName: 'refresh-placements' })
}

class KlarnaCreditPromotionBadge extends React.Component {
  componentDidMount () {
    refresh()
  }

  componentDidUpdate ({ amount: oldAmount }) {
    const { amount } = this.props
    const diff = Math.abs(amount - oldAmount)

    if (diff > 0.01) {
      refresh()
    }
  }

  render () {
    const { amount, style } = this.props

    return (
      <klarna-placement
        data-key='credit-promotion-badge'
        data-locale='en-US'
        data-purchase-amount={amount * 100}
        style={style}
      />
    )
  }
}

KlarnaCreditPromotionBadge.propTypes = {
  amount: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default KlarnaCreditPromotionBadge
