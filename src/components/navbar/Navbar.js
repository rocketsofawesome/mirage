import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseNavbar = ({className}) => (
  <header className={className}>
  </header>
)

const Navbar = styled(BaseNavbar)`
`

Navbar.propTypes = {
  className: PropTypes.string
}

/** @component */
export default Navbar
