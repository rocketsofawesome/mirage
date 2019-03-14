import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import PressIcon from 'SRC/core/icons/press/PressIcon'

const IconRow = styled(({className, onClick, quotes, selected}) => {
  return (
    <div className={className}>
      {quotes.map((icon, index) => {
        const iconSelected = (index === selected)
        return (
          <PressIcon
            key={index}
            brand={quotes[index].id}
            onClick={onClick(index)}
            selected={iconSelected} />
          )
      })}
    </div>
  )
})`
  display: flex;
  flex-wrap: wrap;
  ${PressIcon} {
    width: 25%;
  }
`

IconRow.propTypes = {
  iconsPerRow: PropTypes.number
}

/** @component */
export default IconRow
