import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { P, QuickAddSizes, withSortedSizes } from 'SRC'

export default class QuickAdd extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showSizes: false,
      selectedVariant: undefined
    }
  }

  onMouseEnter = () => {
    this.setState({showSizes: true})
  }

  onMouseLeave = () => {
    this.setState({showSizes: false})
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
    const SortedQuickAddSizes = withSortedSizes(QuickAddSizes)
    if (show) {
      return (
        <div
          className={className}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          {children}
          <div
            className='roa-quick-add'
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}>
            {!showSizes &&
              <P>Add to Bag</P>
            }
            {showSizes &&
              <SortedQuickAddSizes {...props}/>
            }
          </div>
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
