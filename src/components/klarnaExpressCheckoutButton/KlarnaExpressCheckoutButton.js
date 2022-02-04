import React from 'react'

function refresh (props) {
  const {
    klarnaExpressCheckoutScriptSource,
    klarnaMerchantId,
    klarnaEnvironment
  } = props

  const script = document.createElement('script')
  script.src = klarnaExpressCheckoutScriptSource
  script.setAttribute('data-id', klarnaMerchantId)
  script.setAttribute('data-environment', klarnaEnvironment)
  script.async = true
  document.head.appendChild(script)
}

class KlarnaCreditPromotionBadge extends React.Component {
  componentDidMount () {
    refresh(this.props)
  }

  render () {
    return (
      <klarna-express-button
        style={{ width: '100%' }}
        data-locale="en-US"
        data-theme="default"
      />
    )
  }
}

export default KlarnaCreditPromotionBadge
