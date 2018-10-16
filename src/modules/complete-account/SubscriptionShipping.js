import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { P } from 'SRC/core/typography/'
import { MailboxIcon } from 'SRC/core/icons/'
import { InformationalSection } from 'SRC/components/sections/'

const UnstyledSubscriptionShipping = ({className}) => {
  return (
    <InformationalSection className={className}>
      <MailboxIcon animate />
      <aside>
        <P>Seasonal Shipments</P>
        <P>A box every 3 months. So easy. Simple to cancel anytime.</P>
      </aside>
    </InformationalSection>
  )
}

const SubscriptionShipping = styled(UnstyledSubscriptionShipping)`
  display: flex;
  align-items: flex-start;
  padding: 0 1rem 1rem 1rem;
  ${MailboxIcon} {
    margin-right: 1.5rem;
    flex: 0 0 7rem;
  }
  aside {
    margin-top: 1rem;
    ${P}:first-of-type {
      font-weight: 500;
    }
  }
`

SubscriptionShipping.propTypes = {

}

/** @component */
export default SubscriptionShipping
