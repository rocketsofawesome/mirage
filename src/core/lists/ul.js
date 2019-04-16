import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { theme } from 'SRC/core/theme'

const inline = css`
flex-direction: row;
  > li {
    margin-left: 2rem;
    margin-right: 0.5rem;
    &:last-of-type {
      margin-right: 0;
    }
  }
`

const UL = styled(({className, children}) => {
  return (
    <ul className={className}>
      {children}
    </ul>
  )
})`
  display: flex;
  ${props => props.inline ? inline : `flex-direction: column;`}
  color: ${props => props.color};
  ${props => props.image ? `list-style-image:  url(${props.image});` : ''}
  ${props => props.leftPad ? `padding-left: ${props.leftPad}` : ''}
  list-style-type: ${props => props.type};
  list-style-position: ${props => props.outside ? 'outside' : 'inside'};
  font-size: ${props => props.fontSize};
  ${props => (props.direction === 'row') }
  > li {
    height: ${props => props.itemHeight};
  }
`

UL.propTypes = {
    color: PropTypes.string,
    itemHeight: PropTypes.string,
    inline: PropTypes.string,
    image: PropTypes.string,
    fontSize: PropTypes.string,
    leftPad: PropTypes.string,
    outside: PropTypes.bool,
    type: PropTypes.string
}

UL.defaultProps = {
  color: theme.colors.rocketBlue,
  itemHeight: 'auto',
  fontSize: '1.6rem',
  leftPad: '4rem',
  outside: true,
  type: 'disc'
}

/** @component */
export default UL
