import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

function KlarnaFooter ({ enabled }) {
  if (!enabled) {
    return null
  }

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

KlarnaFooter.propTypes = {
  enabled: PropTypes.bool
}

KlarnaFooter.defaultProps = {
  enabled: true
}

/** @component */
export default KlarnaFooter
