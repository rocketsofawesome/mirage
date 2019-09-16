import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  transition: transform .2s ease-in, background-color 0.2s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const Filler = styled.div`
  background-color: ${props => props.theme.colors.lightBlue2};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 2px 2px rgba(0,0,0, 0.2);
  z-index: 2;
  border-radius: 50px;
  transform: ${props => `translateX(-${props.percentage}%)`};
`


export class BaseProgressBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      percentage: 100
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
        <Overlay />
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
  overflow: hidden;
  margin-top: 12px;
  position: relative;
`

BaseProgressBar.propTypes = {
  percentage: PropTypes.number,
  className: PropTypes.string
}

/** @component */
export default ProgressBar
