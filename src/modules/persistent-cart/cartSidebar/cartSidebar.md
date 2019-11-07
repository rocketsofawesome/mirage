```js
  <StripeProviderWrapper>
    <CartSidebar
      shouldShowCartSidebar={true}
      giftFeatureOn={true}
      hideCartSidebar={() => {}}
      submitBag={() => { console.log('submit bag') }}
      subTotal={22.5}
      itemsInBag={4}
      order={{
        applied_coupon_codes: [],
        email: null,
        id: 627960,
        line_items:[2301163],
        number: "P710883835",
        payment_method: null,
        payment_methods: [],
        promotion_adjustments: [],
        selected_shipping_rate_id: null,
        shipping_address: null,
        shipping_cost: "0.0",
        shipping_methods: [],
        store_credits_total: "0.0",
        subtotal: "22.5",
        tax_total: "0.0",
        total: "22.5",
        waitlist_items:[]
      }}
      currentUser={null}
      submitBagCheckoutStripe={() => {}}
      loadBag={() => {}}
      setShippingAddress={() => {}}
      lineItems={[

      ]}
      updateBag={() => { console.log('update bag') }}
      removeItem={() => { console.log('remove item') }}
      segmentCartViewed={() => { console.log('segment cart viewed') }}
      pricingTestOn={true}
      promotion={null}
      promotionLoading={false}
      promoHasBeenApplied={null}
      promoErrorMessage={null}
      applyPromotion={() => { console.log('apply promotion') }}
      removePromotion={() => { console.log('remove promotion') }}
      appliedPromotion={null}
      onClickCheckout={() => { console.log('onClick checkout') }}
      onClickPaymentRequestButton={() => { console.log('onClick payment request button') }}
    />
  </StripeProviderWrapper>
```
