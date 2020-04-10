import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import classNames from 'classnames'
import { Close } from 'SRC'

const overlayFadeIn = keyframes`
  0% {
    background-color: rgba(255, 255, 255, 0.0);
  }
  75% {
    background-color: rgba(255, 255, 255, 0.0);
  }
  100% {
    background-color: rgba(255, 255, 255, 0.6);
  }
`

const overlayFadeOut = keyframes`
  0% {
    background-color: rgba(255, 255, 255, 0.6);
  }
  100% {
    background-color: rgba(255, 255, 255, 0.0);
  }
`

export class BaseMenuDrawer extends React.Component {
  render() {
    const {
      className,
      children,
      closeDrawer,
      open,
      ...props
    } = this.props
    const classes = classNames(className, {
      open: open
    })
    return (
      <div className={classes}>
        <nav  {...props}>
          <Close onClick={closeDrawer} />
          {children}
        </nav>
        <div className='overlay' onClick={closeDrawer} />
      </div>
    )
  }
}

const MenuDrawer = styled(BaseMenuDrawer)`
  position: ${props => props.position};
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  z-index: 4;
  transform: translateX(-200%);
  transition: transform 0.6s ease-in-out;
  &.open {
    transform: translateX(0%);
    transition: transform 0.6s ease-in-out;
    .overlay {
      background-color: rgba(255,255,255, 0.6);
      animation: ${overlayFadeIn} 0.85s ease-in-out;
    }
  }
  nav {
    padding: 0;
    padding-bottom: 80px;
    list-style: none;
    border-top: 1px solid ${props => props.theme.colors.rocketBlue};
    border-right: 1px solid ${props => props.theme.colors.rocketBlue};
    border-left: 1px solid ${props => props.theme.colors.rocketBlue};
    background-color: ${props => props.theme.colors.white};
    width: 75%;
    height: 100%;
    flex-wrap: wrap;
    align-content: flex-start;
    display: flex;
    overflow-x: scroll;
  }
  ul {
    width: 100%;
    box-sizing: border-box;
  }
  .overlay {
    background-color: rgba(255, 255, 255, 0.0);
    animation: ${overlayFadeOut} 0.1s ease-in-out;
    width: 25%;
  }
  ${Close} {
    display: inline-flex;
    flex: 0 0 auto;
    align-self: flex-end;
    margin-top: 1.75rem;
    margin-right: 1.5rem;
    margin-left: auto;
  }
`

MenuDrawer.propTypes = {
  open: PropTypes.bool,
  position: PropTypes.string
}

MenuDrawer.defaultProps = {
  open: false,
  position: 'fixed'
}

/** @component */
export default MenuDrawer
