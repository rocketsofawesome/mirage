import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import {
  Default,
  DesktopNavigation,
  MobileNavigation
} from 'SRC'

class BaseHeader extends Component {
  constructor (props) {
    super(props)
    this.header = null
  }

  setMargin = () => {
    const { setMargin, theme: { basePxSize } } = this.props
    const remHeight = (this.header.clientHeight / basePxSize)
    setMargin(remHeight)
  }

  componentDidMount () {
    this.setMargin()
  }

  componentDidUpdate () {
    this.setMargin()
  }

  render () {
    const {
      above,
      below,
      className,
      desktopProps,
      mobileProps,
      setMargin,
      ...props
    } = this.props

    return (
      <div className={className} ref={(element) => { this.header = element }} {...props}>
        {above}
        <Default displayTarget={'belowMobileNav'}>
          <MobileNavigation {...mobileProps} />
        </Default>
        <Default displayTarget={'aboveMobileNav'}>
          <DesktopNavigation {...desktopProps} />
        </Default>
        {below}
      </div>
    )
  }
}

const Header = styled(BaseHeader)`
  position: ${props => props.position};
  z-index: 2;
  width: 100%;
`

Header.propTypes = {
  className: PropTypes.string,
  above: PropTypes.node,
  below: PropTypes.node,
  desktopProps: PropTypes.object,
  mobileProps: PropTypes.object
}

Header.defaultProps = {
  position: 'fixed',
  setMargin: () => {}
}

/** @component */
export default withTheme(Header)
