import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { PaymentRequestButtonElement, injectStripe } from 'react-stripe-elements'

import { P } from 'SRC'

const buildDisplayItems = (order, pending) => {
  let displayItems = [
    {
      label: 'Tax',
      amount: Math.round(parseFloat(order.tax_total) * 100),
      pending: pending
    },
    {
      label: 'Shipping',
      amount: pending ? Math.round(parseFloat(order.subtotal) >= 50 ? 0 : 500) : Math.round(parseFloat(order.shipping_cost) * 100),
      pending: pending
    },
    {
      label: 'Subtotal',
      amount: Math.round(parseFloat(order.subtotal) * 100),
      pending: pending
    }
  ]

  order.promotion_adjustments.forEach((adjustment) => {
    displayItems.push({label: adjustment.label, amount: Math.round(parseFloat(adjustment.amount) * 100), pending: pending})
  })

  return displayItems
}

const buildShippingOptions = (order) => {
  let shippingMethods = order.shipping_methods
  if (order.selected_shipping_rate_id) {
    const selectedId = order.selected_shipping_rate_id
    shippingMethods = shippingMethods.sort((x,y) => x.id === selectedId ? -1 : y.id === selectedId ? 1 : 0 )
  }

  return shippingMethods.map((method) => ({
    id: method.id.toString(),
    label: method.name,
    amount: Math.round(parseFloat(method.cost) * 100),
    detail: `Delivered in ${method.lower_bound}-${method.upper_bound} business days`
  }))
}

const OrContainer = styled(P)`
  margin: 0 10px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 55%;
`

export class PaymentRequestForm extends React.Component {
  constructor (props) {
    super(props)
    // For full documentation of the available paymentRequest options, see:
    // https://stripe.com/docs/stripe.js#the-payment-request-object
    const paymentRequest = props.stripe ? this.createPaymentRequest() : null

    this.state = {
      canMakePayment: false,
      paymentRequest
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if ((this.props.stripe !== null && prevProps.stripe === null) || (this.props.order.total !== prevProps.order.total)) {
      const paymentRequest = this.createPaymentRequest()
      this.setState({
        canMakePayment: false,
        paymentRequest
      })
    }
  }

  createPaymentRequest = () => {
    const { order, stripe, submitCheckout, setShippingAddress, setShippingMethod } = this.props
    const paymentRequest = stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Total',
        amount: Math.round(parseFloat(order.total) * 100),
        pending: true
      },
      displayItems: buildDisplayItems(order, true),
      requestPayerName: true,
      requestPayerEmail: true,
      requestPayerPhone: true,
      requestShipping: true
    })

    paymentRequest.on('token', async ({complete, token, ...data}) => {
      try {
        await submitCheckout({ token, ...data })
      } catch (error) {}

      complete('success')
    })

    paymentRequest.on('shippingaddresschange', async ({shippingAddress, updateWith}) => {
      const names = shippingAddress.recipient.split(' ')
      const address = {
        first_name: names[0],
        last_name: names.pop(),
        address1: shippingAddress.addressLine[0],
        address2: shippingAddress.addressLine.length > 1 ? shippingAddress.addressLine[1] : null,
        city: shippingAddress.city,
        zipcode: shippingAddress.postalCode,
        state: shippingAddress.region,
        phone: shippingAddress.phone,
        default: false,
        email: this.props.currentUserEmail || 'guest@example.com'
      }
      if (shippingAddress.country !== 'US') {
        updateWith({status: 'invalid_shipping_address'})
      } else {
        try {
          const response = await setShippingAddress(address)
          updateWith({
            status: 'success',
            total: {
              label: 'Total',
              amount: Math.round(parseFloat(response.total) * 100),
              pending: false
            },
            displayItems: buildDisplayItems(response, false),
            shippingOptions: buildShippingOptions(response)
          })
        } catch (error) {
          updateWith({status: 'fail'})
        }
      }
    })

    paymentRequest.on('shippingoptionchange', async ({shippingOption, updateWith}) => {
      try {
        const response = await setShippingMethod(order.id, shippingOption.id)
        updateWith({
          status: 'success',
          total: {
            label: 'Total',
            amount: Math.round(parseFloat(response.total) * 100),
            pending: false
          },
          displayItems: buildDisplayItems(response, false)
        })
      } catch (error) {
        updateWith({status: 'fail'})
      }
    })

    paymentRequest.canMakePayment().then((result) => {
      this.setState({canMakePayment: !!result})
    })
    return paymentRequest
  }

  render () {
    if (!this.state.canMakePayment) {
      return null
    }

    return (
      <Wrapper>
        <OrContainer>OR</OrContainer>
        <PaymentRequestButtonElement
          paymentRequest={this.state.paymentRequest}
          className={this.props.className}
          onClick={this.props.onClickPaymentRequestButton}
          style={{
            // For more details on how to style the Payment Request Button, see:
            // https://stripe.com/docs/elements/payment-request-button#styling-the-element
            paymentRequestButton: {
              theme: 'dark',
              height: '50px'
            }
          }}
        />
      </Wrapper>
    )
  }
}

PaymentRequestForm.propTypes = {
  stripe: PropTypes.object,
  order: PropTypes.object,
  setShippingAddress: PropTypes.func.isRequired,
  setShippingMethod: PropTypes.func.isRequired,
  submitCheckout: PropTypes.func.isRequired,
  className: PropTypes.string,
  currentUserEmail: PropTypes.string,
  onClickPaymentRequestButton: PropTypes.func
}

export default injectStripe(PaymentRequestForm)
