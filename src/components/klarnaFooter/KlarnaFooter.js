import React from 'react'
import styled from 'styled-components'
import { klarnaEnabled } from '../klarnaEnabled'

const Wrapper = styled.div`
  padding: 0 20px;
`

const Container = styled.div`
  max-width: 450px;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.gray4};
  padding: 10px 0;
`

function KlarnaFooter () {
  return (
    <Wrapper>
      <Container>
        <klarna-placement
          data-key='footer-promotion-auto-size'
          data-locale='en-US'
        />
      </Container>
    </Wrapper>
  )
}

/** @component */
export default klarnaEnabled(KlarnaFooter)
