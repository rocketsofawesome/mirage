import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Cloud } from 'SRC'

const Filler = styled.div`
  background: linear-gradient(90deg, #32c5ff 0%, #0073d1 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.percentage}%;
  height: 100%;
  z-index: 2;
  border-radius: 50px;
  transition: width 300ms ease-out;
`

const CloudContainer = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => props.percentage}%;
  transform: translate(-50%, -50%);
  z-index: 3;
  transition: all 300ms ease-out;
  opacity: ${props => (props.percentage === 0 || props.percentage === 100) ? 0 : 1};
`

export class BaseProgressBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      percentage: 0
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({percentage: this.props.percentage})
    }, 500)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({percentage: nextProps.percentage})
  }

  render () {
    const { className } = this.props
    const { percentage } = this.state
    return (
      <div className={className}>
        <Filler percentage={percentage} />
        <CloudContainer percentage={percentage}>
          <Cloud />
        </CloudContainer>
      </div>
    )
  }
}

const ProgressBar = styled(BaseProgressBar)`
  position: relative;
  height: 20px;
  width: 100%;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.05);
  margin-top: 12px;
  position: relative;
`

BaseProgressBar.propTypes = {
  percentage: PropTypes.number,
  className: PropTypes.string
}

/** @component */
export default ProgressBar
