import React from 'react'
import { klarnaEnabled } from '../klarnaEnabled'

class KlarnaExpressCheckoutButton extends React.Component {
  componentDidMount () {
    const {
      klarnaExpressCheckoutScriptSource,
      klarnaMerchantId,
      klarnaEnvironment,
      onKlarnaExpressCheckout
    } = this.props
  
    // In order for the klarna-express-button markup to be hydrated properly,
    // this script has to be loaded each time this component renders
    this.script = document.createElement('script')
    this.script.src = klarnaExpressCheckoutScriptSource
    this.script.setAttribute('data-id', klarnaMerchantId)
    this.script.setAttribute('data-environment', klarnaEnvironment)
    this.script.async = true
    document.head.appendChild(this.script)

    window.klarnaExpressButtonAsyncCallback = () => {
      // eslint-disable-next-line no-undef
      Klarna.ExpressButton.on('user-authenticated', onKlarnaExpressCheckout)
    }
  }

  componentWillUnmount () {
    this.script.remove()
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

/** @component */
export default klarnaEnabled(KlarnaExpressCheckoutButton)
