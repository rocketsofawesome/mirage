import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { P, QuickAddSizes, withSortedSizes } from 'SRC'

console.log(QuickAddSizes)

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
    const { className, variants, loading } = this.props
    const { showSizes, selectedVariant } = this.state
    const SortedQuickAddSizes = withSortedSizes(QuickAddSizes)
    return (
      <div
        className={className}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>
        {!showSizes &&
          <P>Add to Bag</P>
        }
        {showSizes &&
          <SortedQuickAddSizes loading={loading} variants={variants} />
        }
      </div>
    )
  }
}
