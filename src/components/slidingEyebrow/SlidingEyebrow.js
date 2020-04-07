import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  height: ${props => props.height}rem;
  overflow: hidden;
`

const Track = styled.div`
  transform: translate(0, ${props => props.offset}rem);
  transition: transform 300ms ease-out;
  * {
    min-height: ${props => props.height}rem;
    line-height: ${props => props.height}rem;
  }
`

class SlidingEyebrow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentMessage: 0 }
    this.updateMessage = this.updateMessage.bind(this)
  }

  componentDidMount() {
    const { speed, children } = this.props

    if (React.Children.count(children) > 1) {
      this.interval = setInterval(this.updateMessage, speed)
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  updateMessage() {
    const { currentMessage } = this.state
    const { children } = this.props
    const count = React.Children.count(children)
    const nextMessage = (currentMessage + 1) % count
    this.setState({ currentMessage: nextMessage })
  }

  render () {
    const { children, height } = this.props
    const { currentMessage } = this.state
    const offset = currentMessage * height * -1

    return (
      <Container height={height}>
        <Track height={height} offset={offset}>
          {children}
        </Track>
      </Container>
    )
  }
}

SlidingEyebrow.propTypes = {
  height: PropTypes.number,
  speed: PropTypes.number,
  children: PropTypes.node.isRequired
}

SlidingEyebrow.defaultProps = {
  height: 2,
  speed: 5000
}

/** @component */
export default SlidingEyebrow
