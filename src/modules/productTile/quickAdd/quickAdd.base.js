import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { P, QuickAddSizes, Desktop } from 'SRC'

export default class QuickAdd extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showSizes: false,
      selectedVariant: undefined
    }
  }

  onMouseEnter = () => {
    const { showSizes } = this.state
    !showSizes && this.setState({showSizes: true})
  }

  onMouseLeave = () => {
    const { showSizes } = this.state
    showSizes && this.setState({showSizes: false})
  }


  render () {
    const {
      className,
      children,
      show,
      onMouseEnter,
      onMouseLeave,
      ...props
    } = this.props
    const { showSizes } = this.state

    if (show) {
      return (
        <div
          className={className}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          {children}
          <Desktop
            laptopDisplay='block'
            className='roa-quick-add'
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}>
            {!showSizes &&
              <P>Add to Bag</P>
            }
            {showSizes &&
              <QuickAddSizes {...props}/>
            }
          </Desktop>
        </div>
      )
    } else {
      return (
        <div
          className={className}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          {children}
        </div>
      )
    }
  }
}

QuickAdd.defaultProps = {
  className: PropTypes.string,
  children: PropTypes.node,
  show: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
}
