import React from 'react'
import PropTypes from 'prop-types'

import { Desktop, Default, DesktopNavigation, MobileNavigation } from 'SRC'

const Header = ({className, mobileProps, desktopProps}) => {
  return (
    <div className={className}>
      <Default>
        <MobileNavigation {...mobileProps} />
      </Default>
      <Desktop>
        <DesktopNavigation {...desktopProps} />
      </Desktop>
    </div>
  )
}

Header.propTypes = {

}

Header.defaultProps = {
  position: 'fixed'
}

/** @component */
export default Header
