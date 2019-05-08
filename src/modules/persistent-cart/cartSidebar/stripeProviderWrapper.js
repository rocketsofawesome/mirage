import React from 'react'
import { StripeProvider } from 'react-stripe-elements'

const StripeProviderWrapper = ({children}) => (
  <StripeProvider apiKey={process.env.REACT_APP_STRIPE_CLIENT_KEY}>
    {children}
  </StripeProvider>
)

export default StripeProviderWrapper
