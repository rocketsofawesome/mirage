import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  H1,
  H3,
  FadeInOut,
  FlexRow,
  FlexCol
} from 'SRC'

const defaultProps = require('./data.json')


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
        <FlexCol mobile={{width: 4}} desktop={{width: 12}}>
          <H1>{header}</H1>
        </FlexCol>
        <FlexCol mobile={{width: 4}} desktop={{width: 6, span: 3}}>
          <FadeInOut animate={!!index}><H3 lowercase>{quote}</H3></FadeInOut>
        </FlexCol>
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
  ${FlexRow}
  ${H1}, ${H3} {
    text-align: center;
  }
  ${H3} {
    color: ${props => props.theme.colors.rocketBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 0;
    margin-bottom: 0;
  }
`

CustomerQuotes.propTypes = {

}

CustomerQuotes.defaultProps = {
  ...defaultProps,
  padding: true,
  constrained: true
}

/** @component */
export default CustomerQuotes
