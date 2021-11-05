import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import colorFromProp from 'utils/colors'

const styles = css`
  text-align: ${props => props.alignRight ? 'right' : 'left'};
  margin-bottom: 0;
  letter-spacing: ${props => props.letterSpacing};
  text-transform: ${props => props.lowercase
    ? 'inherit'
    : 'uppercase'
  };
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
`

const Label = styled.label`
  ${styles}
  color: ${colorFromProp('color')};
`

const LowercaseLabel = ({ className, children }) => {
  return (
    <Label
      className={className}
      fontSize='2rem'
      letterSpacing='normal'
      fontWeight='normal'
      lowercase
    >
      {children}
    </Label>
  )
}

Label.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.shape({
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string
    })
  }),
  lowercase: PropTypes.bool,
  color: PropTypes.string
}

Label.defaultProps = {
  color: 'navy',
  letterSpacing: '.1rem',
  fontSize: '1.4rem',
  fontWeight: '500'
}

/** @component */
export default Label

export { LowercaseLabel, styles }
