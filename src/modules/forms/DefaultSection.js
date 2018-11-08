import styled from 'styled-components'
import PropTypes from 'prop-types'

import Link from 'SRC/components/link/Link'
import { StyledDefaultPayment } from 'SRC/components/payment/DefaultPayment'
import StyledDefaultAddress from 'SRC/components/address/DefaultAddress'
import { styles } from 'SRC/core/typography/Label'

const DefaultSection = styled.section`
  border-radius: 0.3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  ${props => props.theme.media.tablet`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  `}
  background-color: ${props => props.theme.colors.gray[2]};
  position: relative;
  box-sizing: border-box;

  > ${Link} {
    ${styles}
    position: absolute;
    top: 1rem;
    line-height: 2rem;
    vertical-align: text-bottom;
    ${props => props.theme.media.tablet`
      top: 1.5rem;
    `}
    right: 2rem;
  }

  main {
    margin-top: 4rem;
  }

  ${StyledDefaultAddress}, ${StyledDefaultPayment} {
    ${props => props.theme.media.tablet`
      margin: 0 2rem;
    `}
  }
`

DefaultSection.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      gray: PropTypes.array
    })
  }),
}

/** @component */
export default DefaultSection
