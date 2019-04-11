import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Highlighter, Link } from 'SRC'

export class BaseHeaderLink extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: false,
      active: false
    }
  }

  enter = () => {
    const { onMouseEnter } = this.props
    this.setState({ hover: true })
    onMouseEnter && onMouseEnter()
  }

  leave = () => {
    const { onMouseLeave } = this.props
    this.setState({ hover: false })
    onMouseLeave && onMouseLeave()
  }

  render () {
    const { className, children, highlightable, highlightOn, ...props} = this.props
    const highlight = this.state[highlightOn]
    delete props.spacing
    return (
      <Link
        {...props}
        className={className}
        onMouseEnter={this.enter}
        onMouseLeave={this.leave}
        light
        underline={false}
        uppercase>
        {highlightable && <Highlighter highlight={highlight}/>}
        <span>{children}</span>
      </Link>
    )
  }
}


/** @component */
const HeaderLink = styled(BaseHeaderLink)`
  position: relative;
  ${props => props.spacing ? `margin: 0 1rem;`: ''}
  display: flex;
  cursor: pointer;
  height: 6rem;
  align-items: center;
  text-decoration: none;
  &:active, &:visited {
    color: ${props => props.theme.colors.rocketBlue};
  }
  > span {
    z-index: 1;
    ${props => props.spacing ? `padding: 0.5rem 1.5rem;`: ''}
  }
  .screenReader{
    font-size: 0;
    height: 0;
  }
  ${Highlighter} {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: auto;
    max-height: 100%;
    max-width: 12rem;
    transform: translateX(-50%) translateY(-50%);
  }
`

HeaderLink.defaultProps = {
  highlightable: true,
  highlightOn: 'hover',
  spacing: true
}

HeaderLink.propTypes = {
  highlightable: PropTypes.bool,
  highlightOn: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ])
}

export default HeaderLink
