import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import classNames from 'classnames'
import { pointCollection } from './defaultProps'

export class Highlighter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {points: ''}
  }

  componentDidMount () {
    const { pointCollection } = this.props
    const index = Math.floor((Math.random() * 3))
    this.setState({ points: pointCollection[index].join(' ') })
  }

  render () {
    const  { className: highlighterClass, highlight } = this.props
    const className = classNames(highlighterClass, {
      'highlight': highlight,
    })
    return (
      <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 30'>
        <polyline
          points={this.state.points}
        />
      </svg>
    )
  }
}

Highlighter.defaultProps = {
  pointCollection: pointCollection,
  highlight: false
}

Highlighter.propTypes = {
  pointCollection: PropTypes.array,
  highlight: PropTypes.bool
}

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

export default styled(Highlighter)`
  fill: none;
  stroke: #f0ff02;
  stroke-width: 12;
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;

  &.highlight {
    animation: ${dash} 1.5s linear forwards;
  }

`
