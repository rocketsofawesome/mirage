import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { H1, H3, FadeInOut } from 'SRC'
import defaultProps from './data.json'


class BaseCustomerQuotes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      quote: undefined
    }
  }

  componentDidMount () {
    const { quotes } = this.props
    this.setState({quote: quotes[0]})
    this.quoteTimer()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    const { className, header } = this.props
    const { index, quote } = this.state
    return (
      <section className={className}>
        <H1>{header}</H1>
        <FadeInOut animate={!!index}><H3 lowercase>{quote}</H3></FadeInOut>
      </section>
    )
  }

  quoteTimer = () => {
    this.timer = setInterval(() => {
      const { index } = this.state
      const { quotes } = this.props
      if ( index === quotes.length - 1) {
        this.setState({
          index: 0,
          quote: quotes[0]
        })
      } else {
        this.setState({
          index: index + 1,
          quote: quotes[index + 1]
        })
      }
    }, 5000)
  }
}

const CustomerQuotes = styled(BaseCustomerQuotes)`
  ${H1}, ${H3} {
    text-align: center;
  }
  ${H3} {
    color: ${props => props.theme.colors.rocketBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
  }
`

CustomerQuotes.propTypes = {

}

CustomerQuotes.defaultProps = {
  ...defaultProps
}

/** @component */
export default CustomerQuotes
