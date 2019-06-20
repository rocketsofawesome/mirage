import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  Accordion,
  MobileLinkTop,
  MobileLinkSecondary,
  UL
} from 'SRC'

const BaseAccountLinks = ({className, renderLink, isSubscriptionMember}) => {
  return (
    <Accordion
      className={className}
      toggleElement={
        <MobileLinkTop>
          Your Account
        </MobileLinkTop>
      }>
      <UL type='none' leftPad='1rem'>
        <li>
          <MobileLinkSecondary
            target='/account'
            renderLink={renderLink}>
            Account Information
          </MobileLinkSecondary>
          </li>
        <li>
          <MobileLinkSecondary
            target='/account/shipping-address'
            renderLink={renderLink}>
            Shipping Address
          </MobileLinkSecondary>
        </li>
        {isSubscriptionMember &&
          <li>
            <MobileLinkSecondary
              target='/deliveries'
              renderLink={renderLink}>
              Manage Deliveries
            </MobileLinkSecondary>
          </li>
        }
        <li>
          <MobileLinkSecondary
            target='/account/payment-method'
            renderLink={renderLink}>
            Payment Method
          </MobileLinkSecondary>
        </li>
        <li>
          <MobileLinkSecondary
          target='/account/store-credit'
          renderLink={renderLink}>
          Store Credit
          </MobileLinkSecondary>
        </li>
        {isSubscriptionMember &&
          <li>
            <MobileLinkSecondary
              target='/add-kid'
              renderLink={renderLink}>
              Add a Child
            </MobileLinkSecondary>
          </li>
        }
      </UL>
    </Accordion>
  )
}

const MobileAccountLinks = styled(BaseAccountLinks)`

`

MobileAccountLinks.propTypes = {
  renderLink: PropTypes.func,
  isSubscriptionMember: PropTypes.bool
}

MobileAccountLinks.defaultProps = {
  isSubscriptionMember: false
}
/** @component */
export default MobileAccountLinks
