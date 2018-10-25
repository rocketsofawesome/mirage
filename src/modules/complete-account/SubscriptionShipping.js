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
  align-items: center;
  padding: 1rem;
  margin-bottom: 3rem;
  ${props => props.theme.media.tablet`
    padding: 0;
    min-height: 8rem;
  `}
  min-height: 8rem;
  ${MailboxIcon} {
    margin-right: 1.5rem;
    flex: 0 0 5rem;
    ${props => props.theme.media.tablet`
      flex: 0 0 7rem;
      align-self: flex-end;
    `}
  }
  aside {
    ${P}:first-of-type {
      font-weight: 500;
    }
  }
`

SubscriptionShipping.propTypes = {
  theme: PropTypes.shape({
    media: PropTypes.shape({
      tablet: PropTypes.func
    })
  })
}

/** @component */
export default SubscriptionShipping
