import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { P, H3, Close } from 'SRC'

const Container = styled.div`
  border: 3px solid ${props => props.theme.colors.rocketBlue};
  background-color: ${props => props.theme.colors.lightBlue0};
  padding: 10px;
  width: 320px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  text-align: center;
`

const CloseLink = styled.a`
  float: right;
  cursor: pointer;
`

const Text = styled(P)`
  margin-bottom: 15px;
`

const GiftModal = ({ onClose }) => (
  <Container>
    <CloseLink onClick={onClose}>
      <Close width='1.2rem' />
    </CloseLink>

    <H3>Sending a Gift?</H3>
    <Text>
      At checkout, leave a sweet note that'll show
      on the packing slip. Need an exchange? It's
      free and easy via our friendly customer support
      team.
    </Text>
    <Text>
      And don't forget, buy 4+ items to get 2% off your
      order!
    </Text>
    <Text>
      * excludes FINAL SALE
    </Text>
  </Container>
)

GiftModal.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default GiftModal
