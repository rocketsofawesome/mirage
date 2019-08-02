import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Default, Laptop } from 'SRC'

const BaseSearchIcon = ({ className }) => {
  return (
    <div className={className}>
      <Default displayTarget='belowLaptop'>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
          <g fill="none" fill-rule="evenodd" stroke="#0073D1" stroke-width="1.5" transform="translate(1 1)">
            <circle cx="6" cy="6" r="6"/>
            <path stroke-linecap="round" d="M10.761 11.01l4.121 3.893"/>
          </g>
        </svg>
      </Default>
      <Laptop>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
          <g fill="none" fill-rule="evenodd" stroke="#0073D1" stroke-width="1.5" transform="translate(1 1)">
            <circle cx="6.75" cy="6.75" r="6.75"/>
            <path stroke-linecap="round" d="M12.106 12.387l4.637 4.379"/>
          </g>
        </svg>
      </Laptop>
    </div>
  )
}

const SearchIcon = styled(BaseSearchIcon)`
position: relative;
display: inline-block;
  svg {
    width: ${props => props.width.mobile};
    > polygon, path {
      fill: none;
      stroke: ${props => props.theme.colors.rocketBlue};
      stroke-linecap:round;
      stroke-linejoin:round;
      stroke-width: 1.5;
    }
  }
  > g circle {
    fill: ${props => props.theme.colors.rocketBlue};
  }
  > g text {
    fill: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.primaryFont};
    font-size: .8rem;
    font-weight: 500;
  }

  .screenReader {
    font-size: 0;
  }

  ${props => props.theme.breakpointsVerbose.aboveLaptop`
    svg {
      width: ${props => props.width.desktop};
      > g text {
        font-size: .7rem;
      }
    }
  `}
`

SearchIcon.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string,
      white: PropTypes.string
    }),
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string
    })
  }),
  width: PropTypes.shape({
    desktop: PropTypes.string,
    mobile: PropTypes.string
  })
}

SearchIcon.propTypes = {
  width: PropTypes.string.isRequired
}

SearchIcon.defaultProps = {
  width: {
    desktop: '2.1rem',
    mobile: '1.8rem'
  }
}

/** @component */
export default SearchIcon
export { SearchIcon }
