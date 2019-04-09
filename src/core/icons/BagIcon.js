import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseBagIcon = ({ className, count}) => {
  return (
    <svg className={className} version='1.1' viewBox='0 0 19 15'>
      <polygon points='10.5,12.7 10.6,6.8 0.5,6.8 0.5,12.7 2.6,14.5 8.7,14.5'/>
      <path d='M3.1,6.4v-1C3.1,4.1,4.2,3,5.5,3s2.4,1.1,2.4,2.4v1H3.1z'/>
      {count &&
        <g>
          <circle cx='13' cy='6' r='6'/>
          <text x='0' y='0' className='screenReader'>{`${count} items currently added`}</text>
          <text x='12.75' y='7' alignmentBaseline='middle' textAnchor='middle' aria-hidden>{count}</text>
        </g>
      }
    </svg>
  )
}

const BagIcon = styled(BaseBagIcon)`
  width: ${props => props.width};
  > polygon, path {
    fill: none;
    stroke: ${props => props.theme.colors.rocketBlue};
    stroke-linecap:round;
    stroke-linejoin:round;
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
  .screenReader{
    font-size: 0;
  }
`

BagIcon.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string,
      white: PropTypes.string
    }),
    fonts: PropTypes.shape({
      primaryFont: PropTypes.string
    })
  }),
  width: PropTypes.string
}

BagIcon.propTypes = {
  count: PropTypes.number,
  width: PropTypes.string.isRequired
}

BagIcon.defaultProps = {
  width: '2rem'
}

/** @component */
export default BagIcon
export { BaseBagIcon }
