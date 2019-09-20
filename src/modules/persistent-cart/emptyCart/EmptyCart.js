import React from 'react'
import styled from 'styled-components'

import { P, CloudGroup } from 'SRC'

const Container = styled.div`
  padding-top: 50px;
  text-align: center;
  border-top: 1px solid ${props => props.theme.colors.gray4};
`

const IconContainer = styled.div`
  padding: 20px 0;
`

const EmptyCart = () => (
  <Container>
    <P>Ah, shucks! Your bag is empty...</P>
    <IconContainer>
      <CloudGroup />
    </IconContainer>
  </Container>
)

export default EmptyCart
