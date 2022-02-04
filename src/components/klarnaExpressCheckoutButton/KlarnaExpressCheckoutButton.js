import React from 'react'

class KlarnaCreditPromotionBadge extends React.Component {
  componentDidMount () {
    const {
      klarnaExpressCheckoutScriptSource,
      klarnaMerchantId,
      klarnaEnvironment
    } = this.props
  
    const script = document.createElement('script')
    script.src = klarnaExpressCheckoutScriptSource
    script.id = 'klarnaCheckoutButtonScript'
    script.setAttribute('data-id', klarnaMerchantId)
    script.setAttribute('data-environment', klarnaEnvironment)
    script.async = true
    document.head.appendChild(script)
  }

  componentWillUnmount () {
    document.querySelector('#klarnaCheckoutButtonScript').remove()
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
