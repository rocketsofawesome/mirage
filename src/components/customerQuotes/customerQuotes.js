import React from 'react'
import styled, { keyframes } from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'

import {
  FlexCol,
  FlexRow,
  H1,
  H2,
  H3
} from 'SRC'

import defaultProps from './defaultProps.js'

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const FadeOut = keyframes `
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

class CustomerQuote extends React.Component {
  render () {
    const { className, quote, index, left, right, height } = this.props
      return (
        <aside className={className}>
          <FlexCol mobile={{width: 2}} desktop={{width: 3}}>
            <img
              style={{height: height}}
              alt='confetti'
              className='confetti'
              src={left} />
          </FlexCol>
          <FlexCol mobile={{width: 4}} desktop={{width: 6}}>
              <CSSTransitionGroup
                className='quote'
                transitionName='fader'
                transitionEnterTimeout={3000}
                transitionLeaveTimeout={3000}>
                  {quote &&
                    <div key={index} className="quote_controller">
                      {(quote && quote.quote) && <H2 lowercase>{quote.quote}</H2>}
                      {(quote && quote.signature) && <H3 lowercase>{quote.signature}</H3>}
                    </div>
                  }
              </CSSTransitionGroup>
          </FlexCol>
          <FlexCol mobile={{width: 2}} desktop={{width: 3}}>
              <img
                style={{height: height}}
                alt='confetti'
                className='confetti'
                src={right} />
          </FlexCol>
        </aside>
      )
  }

}

const StyledCustomerQuote = styled(CustomerQuote)`
display: flex;
flex-wrap: wrap;
width: 100%;
${props => props.theme.media.tablet`
  height: 30rem;
`}
${H2} {
  font-weight: 300;
  margin-top: 1rem;
  min-height: 5rem;
}
${H3} {
  font-family: "ff-din-web",Helvetica,Arial,sans-serif;
  font-size: 1.8rem;
  font-weight: 100;
  font-style: normal;
  margin-top: 2rem;
  margin-bottom: 2rem;
  min-height: 1rem;
}
.quote_controller {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.quote {
  display: flex;
  justify-content: center;
  position: relative;
  order: 1;
  opacity: 1;
  transition: opacity 0.5s;
  height: 30rem;
  ${props => props.theme.media.tablet`
    order: 2;
  `}
}

.fader-enter {
  animation: ${FadeIn} 3s ease-in;
}

.fader-enter.fader-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}

.fader-leave {
  opacity: 1;
}

.fader-leave.fader-leave-active {
  opacity: 0;
  animation: ${FadeOut} 1s ease-in;
}

.confetti {
  display: flex;
  align-self: center
  &:first-of-type {
    order: 2;
    ${props => props.theme.media.tablet`
      order: 1;
    `}
  }
  &:last-of-type {
    order: 3;
    ${props => props.theme.media.tablet`
      order: 4;
    `}
  }
}
`

class BaseCustomerQuotes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      height: 'auto',
      left: 'https://res.cloudinary.com/roa-canon/image/upload/v1548872934/web/CONFETTI_left_single.gif',
      right: 'https://res.cloudinary.com/roa-canon/image/upload/v1548872934/web/CONFETTI_right_single.gif',
      quote: {
        quote: undefined,
        signature: undefined
      }
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
    const { index, quote, left, right, height } = this.state
    return (
      <section className={className}>
        <FlexCol mobile={{width: 4}} desktop={{width: 12}}>
          <H1>{header}</H1>
        </FlexCol>
        <StyledCustomerQuote
          quote={quote}
          index={index}
          left={left}
          right={right}
          height={height} />
      </section>
    )
  }

  quoteTimer = () => {
    this.timer = setInterval(() => {
      const { index } = this.state
      const { quotes } = this.props
      this.setState({
        height: '0',
        left: 'a',
        right: 'a'
      })
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
      setTimeout(() => {
        this.setState({
          height: 'auto',
          left: 'https://res.cloudinary.com/roa-canon/image/upload/v1548872934/web/CONFETTI_left_single.gif',
          right: 'https://res.cloudinary.com/roa-canon/image/upload/v1548872934/web/CONFETTI_right_single.gif',
        })
      }, 0)
    }, 8000)
  }
}

const CustomerQuotes = styled(BaseCustomerQuotes)`
  ${FlexRow}
  margin-top: 4rem;
  margin-bottom: 2rem;
  align-items: flex-start;
  ${props => props.theme.media.tablet`
    margin-top: 6rem;
  `}
  ${H1}, ${H2}, ${H3} {
    text-align: center;
  }
  ${H2}, ${H3} {
    color: ${props => props.theme.colors.rocketBlue};
    margin-top: 0;
    margin-bottom: 0;
    font-style: italic;
    order: 1;
    ${props => props.theme.media.tablet`
      order: 2;
    `}
  }
  ${H1} {
    @media (max-width: 958px) { font-size: 3.4rem; }
  }
`

CustomerQuotes.defaultProps = {
  ...defaultProps,
  padding: true,
  constrained: true
}

/** @component */
export default CustomerQuotes
