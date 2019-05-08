import React from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'

const StripeWrapper = ({children}) => (
  <StripeProvider apiKey={process.env.REACT_APP_STRIPE_CLIENT_KEY}>
    <Elements>
      {children}
    </Elements>
  </StripeProvider>
)

export default StripeWrapper
