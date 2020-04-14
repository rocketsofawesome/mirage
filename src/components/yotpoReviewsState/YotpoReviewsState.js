import React from 'react'
import PropTypes from 'prop-types'

class YotpoReviewsState extends React.Component {
  constructor (props) {
    super(props)
    this.state = { displayReviews: false }
    this.refreshWidgets = this.refreshWidgets.bind(this)
  }

  componentDidMount () {
    this.refresh()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.colorwayCode !== this.props.colorwayCode) {
      this.refresh()
    }
  }

  async refresh () {
    const { colorwayCode, appKey } = this.props
    const url = `https://api.yotpo.com/v1/widget/${appKey}/products/${colorwayCode}/reviews.json`
    try {
      const response = await fetch(url)
      const data = await response.json()
      const displayReviews = data.response.bottomline.total_review > 0 &&
        data.response.bottomline.average_score >= 3
      this.setState({ displayReviews }, this.refreshWidgets)
    } catch (error) {
      console.error('Failed to fetch reviews', error)
    }
  }

  refreshWidgets () {
    setTimeout(() => window.yotpo.refreshWidgets(), 500)
  }

  render () {
    return this.props.children({ ...this.state })
  }
}

YotpoReviewsState.propTypes = {
  colorwayCode: PropTypes.string.isRequired,
  appKey: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
}

/** @component */
export default YotpoReviewsState
