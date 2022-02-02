import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  Accordion,
  MobileLinkTop,
  MobileLinkSecondary,
  UL
} from 'SRC'

const BaseAccountLinks = ({ className, renderLink, showSubscriptionLinks, signOut }) => {
  return (
    <div>
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
          {showSubscriptionLinks &&
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
          {showSubscriptionLinks &&
            <div>
              <li>
                <MobileLinkSecondary
                  target='/add-kid'
                  renderLink={renderLink}>
                  Add a Child
                </MobileLinkSecondary>
              </li>
              <li>
                <MobileLinkSecondary
                  target='/invite'
                  renderLink={renderLink}>
                  Free Clothes
                </MobileLinkSecondary>
              </li>
            </div>
          }
        </UL>
      </Accordion>
      <MobileLinkTop
        className='roa-logout-link'
        onClick={signOut}>
        Log out
      </MobileLinkTop>
    </div>
  )
}

const MobileAccountLinks = styled(BaseAccountLinks)`
  margin-bottom: 3rem;
`

MobileAccountLinks.propTypes = {
  renderLink: PropTypes.func,
  showSubscriptionLinks: PropTypes.bool,
  signOut: PropTypes.func
}

MobileAccountLinks.defaultProps = {
  showSubscriptionLinks: false,
  signOut: () => alert('Signing out')
}
/** @component */
export default MobileAccountLinks
