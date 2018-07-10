import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const fills = {
  blue: css`
    fill: ${props => props.theme.colors.rocketBlue};
  `,
  navy: css`
    fill: ${props => props.theme.colors.navy};
  `,
  gray: css`
    fill: ${props => props.theme.colors.gray[2]};
  `,
  white: css`
    fill: ${props => props.theme.colors.white};
  `
}

const StyledAIcon = styled.svg`
  ${props => props.fill ? fills[props.fill] : fills.blue}
  max-height: ${props => props.size};
  max-width: ${props => props.size};
  width: 100%;
`

const AIcon = (props) => {
  return (
    <StyledAIcon viewBox='0 0 34.6 48.68' {...props}>
      <path d='M34.6,48.67V24.47c0-9.3.1-14.6-4.6-19.29a18,18,0,0,0-25.3,0C0,9.87,0,15.28,0,24.47V48.68H7.3V34.47h20v14.2ZM7.3,27.87v-3.5c0-9.7.5-12.4,2.8-14.9a10,10,0,0,1,14.3,0h0c2.4,2.6,2.8,5.3,2.8,14.9v3.5Z'/>
    </StyledAIcon>
  )
}

AIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string.isRequired
}

AIcon.defaultProps = {
  border: false,
  size: '80px'
}

/** @component */
export default AIcon
