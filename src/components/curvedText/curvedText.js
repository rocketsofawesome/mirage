import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colorFromProp from 'utils/colors'

const CurvedText = (props) => {
  const {
    text,
    fontSize,
    letterSpacing,
    overlap
  } = props

  const Container = styled.div`
    margin-bottom: ${overlap ? '-100px' : '0'};
    max-height: 100px;
    color: ${colorFromProp('color')};
    
    path {
      fill: transparent;
    }
    text {
      fill: currentColor;
      text-anchor: middle;
      letter-spacing: ${letterSpacing};
      line-height: normal;
      font-family: ${props => props.theme.fonts.headerFont};
      font-size: ${fontSize};
    }
  `

  return (
    <Container className='curved-text'>
      <svg viewBox='0 0 250 200'>
        <path id='curve' d='M50 40 Q125 0, 200 40' />
        <text width='250'>
          <textPath xlinkHref='#curve' startOffset='50%'>
            {text}
          </textPath>
        </text>
      </svg>
    </Container>
  )
}

CurvedText.propTypes = {
  fontSize: PropTypes.string,
  letterSpacing: PropTypes.string,
  text: PropTypes.string.isRequired,
  overlap: PropTypes.bool,
  color: PropTypes.string
}

CurvedText.defaultProps = {
  fontSize: '1.6rem',
  letterSpacing: 'normal',
  overlap: true,
  color: 'navy'
}

/** @component */
export default CurvedText
