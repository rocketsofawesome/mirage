import React from 'react'
import PropTypes from 'prop-types'

import { NavyLink } from 'SRC'

const MegaMenuLink = ({
  clearMenuImage,
  id,
  link,
  renderLink,
  setMenuImage
}) => {
  return (
    <NavyLink
      key={id}
      target={link.target}
      onMouseEnter={setMenuImage(link.src)}
      onMouseLeave={clearMenuImage}
      onFocus={setMenuImage(link.src)}
      onBlur={clearMenuImage}
      light
      underline={false}
      renderLink={renderLink}>
      {link.text}
    </NavyLink>
  )
}

MegaMenuLink.propTypes = {
  clearMenuImage: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  link: PropTypes.object.isRequired,
  renderLink: PropTypes.func,
  setMenuImage:PropTypes.func.isRequired
}

/** @component */
export default MegaMenuLink
