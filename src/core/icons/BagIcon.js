import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseBagIcon = ({ className, count}) => {
  return (
    <svg className={className} version='1.1' viewBox='0 0 20 17'>
      <polygon points='10.5 14.69 10.6 8.79 0.5 8.79 0.5 14.69 2.6 16.49 8.7 16.49 10.5 14.69'/>
      <path d='M3.1,8.39v-1A2.43,2.43,0,0,1,5.5,5a2.43,2.43,0,0,1,2.4,2.4v1Z' />
      {count &&
        <g>
          <circle cx='12.5' cy='7.5' r='7.5'/>
          <text x='0' y='0' className='screenReader'>{`${count} items currently added`}</text>
          <text x='12.3' y='8.5' alignmentBaseline='middle' textAnchor='middle' aria-hidden>{count}</text>
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
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0;
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
