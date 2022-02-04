import React from "react"
import PropTypes from 'prop-types'

const klarnaEnabled = WrappedComponent => {
  class KlarnaComponent extends React.Component {
    render () {
      const { enabled } = this.props

      if (!enabled) {
        return null
      }

      return (
        <WrappedComponent {...this.props} />
      )
    }
  }

  KlarnaComponent.propTypes = {
    enabled: PropTypes.bool
  }
  
  KlarnaComponent.defaultProps = {
    enabled: true
  }

  return KlarnaComponent
}

export default klarnaEnabled
