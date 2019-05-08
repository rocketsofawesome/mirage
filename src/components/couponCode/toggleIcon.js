import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconLinePlus = styled.line`
  stroke-width: 20;
  stroke-dasharray: 120;
  stroke-dashoffset: ${props => props.show ? 120 : 0};
  transition: stroke-dashoffset 0.25s ease-in-out;
  stroke: ${props => props.stroke};
`

const IconLine = styled.line`
  stroke-width: 20;
  stroke: ${props => props.stroke};
`

class BaseToggleIcon extends React.Component {
  render () {
    const {show, className, onClick, stroke = '#0073d1'} = this.props
    return (
      <svg
        onClick={onClick}
        className={className}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 120 120'>
        <IconLinePlus
          show={show}
          stroke={stroke}
          x1='60'
          x2='60'
          y1='60' />
        <IconLinePlus
          show={show}
          stroke={stroke}
          x1='60'
          y1='60'
          x2='60'
          y2='120' />
        <IconLine
          stroke={stroke}
          y1='60'
          x2='120'
          y2='60' />
      </svg>
    )
  }
}

BaseToggleIcon.propTypes = {
  show: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
}

const ToggleIcon = styled(BaseToggleIcon)`
  height: 12px;
  min-width: 12px;
  margin-left: 20px;
  box-sizing: border-box;
  cursor: pointer;
`

export default ToggleIcon
