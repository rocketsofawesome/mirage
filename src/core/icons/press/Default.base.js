import React from 'react'
import PropTypes from 'prop-types'

import BasePressIcon from './PressIcon.base'

const Default = ({className}) => (
  <BasePressIcon className={className} box='0 0 750 472'>
    <path d='M0,462a10,10,0,0,0,10,10H740a10,10,0,0,0,10-10V144H0Z'/>
    <path d='M750,10A10,10,0,0,0,740,0H10A10,10,0,0,0,0,10V73H750Z'/>
  </BasePressIcon>
)

Default.propTypes = {
  className: PropTypes.string
}

export default Default
