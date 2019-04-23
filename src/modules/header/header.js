import React from 'react'
import PropTypes from 'prop-types'

import { Desktop, Default, DesktopNavigation, MobileNavigation } from 'SRC'

const Header = ({
  above,
  below,
  className,
  desktopProps,
  mobileProps
}) => {
  return (
    <div className={className}>
      {above}
      <Default>
        <MobileNavigation {...mobileProps} />
      </Default>
      <Desktop>
        <DesktopNavigation {...desktopProps} />
      </Desktop>
      {below}
    </div>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  above: PropTypes.node,
  below: PropTypes.node,
  desktopProps: PropTypes.object,
  mobileProps: PropTypes.object
}

Header.defaultProps = {
  position: 'fixed'
}

/** @component */
export default Header
