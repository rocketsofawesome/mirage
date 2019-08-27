import React from 'react'
import styled, { withTheme } from 'styled-components'

import {
  P,
  FlexRow,
  FlexCol,
  Chevron
} from 'SRC'

import defaultProps from './defaultProps.js'
import { CSSTransitionGroup } from 'react-transition-group'

class BaseTextCarousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  onClickChevronLeft = () => {
    const { quotes } = this.props
    const { index } = this.state
    if (index === 0) {
      this.setState({index: (quotes.length - 1) })
      clearInterval(this.timer)
      this.quoteTimer((quotes.length - 1))
    } else {
      this.setState({index: index - 1 })
      clearInterval(this.timer)
      this.quoteTimer()
    }
  }

  onClickChevronRight = () => {
    const { index } = this.state
    const { quotes } = this.props

    if (index === (quotes.length - 1)) {
      this.setState({index: 0})
      clearInterval(this.timer)
      this.quoteTimer()
    } else {
      this.setState({index: index + 1})
      clearInterval(this.timer)
      this.quoteTimer()
    }
  }

  updateIndex = () => {
    const { quotes } = this.props
    const { index } = this.state

    if (index === quotes.length - 1) {
      this.setState({index: 0})
    } else {
      this.setState({index: index + 1})
    }
  }

  quoteTimer = () => {
    this.timer = setInterval(this.updateIndex, 5000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  componentWillMount () {
    this.setState({index: 0})
    this.quoteTimer()
  }

  render () {
    const { className, quotes } = this.props

    const { index } = this.state
    return (
      <FlexRow
        constrained
        element='section'
        className={className}>
        <FlexCol
          className="quote_controller"
          mobile={{width: 4}}
          desktop={{span: 1, width: 10}}>
            <Chevron left onClick={this.onClickChevronLeft} />
            <CSSTransitionGroup
              aria-hidden
              transitionName="quote"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={1}>
              <P key={index}>{quotes[index].quote}</P>
            </CSSTransitionGroup>
            <Chevron right onClick={this.onClickChevronRight} />
        </FlexCol>
      </FlexRow>
    )
  }
}

const TextCarousel = styled(BaseTextCarousel)`
  margin-top: 4rem;
  margin-bottom: 2rem;
  ${props => props.theme.media.tablet`
    margin-top: 6rem;
  `}
  ${P} {
    text-align: center;
    margin: 0 0 1rem 0;
  }
  ${P} {
    color: ${props => props.theme.colors.navy};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 0;
    margin-bottom: 0;
    min-height: 12rem;
    max-height: 45rem;
    font-style: italic;
    font-weight: normal;
    letter-spacing: normal;
    font-stretch: normal;
    font-size: ${props => props.fontSizes.mobile};
    ${props => props.theme.breakpointsVerbose.aboveTablet`
      font-size: ${props => props.fontSizes.desktop};
    `}
  }
  ${Chevron} {
    flex-basis: 2.4rem;
    min-width: 2.4rem;
    height: 2.4rem;
    stroke-width: .7rem;
  }
  .quote_controller {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 14rem;
    max-height: 45rem;
    position: relative
    width: 100%;
  }
  .quote_controller span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 12rem;
    max-height: 45rem;
  }
  .quote-enter {
    opacity: 0.01;
  }
  .quote-enter.quote-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  .quote-leave {
    opacity: 0;
  }
  .quote-leave.quote-leave-active {
    opacity: 0;
  }
`

TextCarousel.defaultProps = {
  ...defaultProps,
  fontSizes: {
    desktop: '2.0rem',
    mobile: '1.6rem'
  },
  padding: true,
  constrained: true
}

/** @component */
export default withTheme(TextCarousel)
