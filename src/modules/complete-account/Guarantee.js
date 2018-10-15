import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Label } from 'SRC/core/typography'
import { GuaranteeIcon } from 'SRC/core/icons'
import { InformationalSection } from 'SRC/components/sections'

const  UnstyledGuarantee = ({ className, children }) => {
  return (
    <InformationalSection className={className}>
      <header>
        <GuaranteeIcon animated />
        <Label>FIRST BOX GUARANTEE</Label>
      </header>
      <section>{children}</section>
    </InformationalSection>
  )
}

const Guarantee = styled(UnstyledGuarantee)`
  header {
    display: flex;
    align-items: center;
  }
  ${GuaranteeIcon} {
    margin-right: 10px;
  }
  section > *{
    margin-top: 10px;
    margin-bottom: 0;
  }
`

Guarantee.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object
  ])
}

/** @component */
export default Guarantee
