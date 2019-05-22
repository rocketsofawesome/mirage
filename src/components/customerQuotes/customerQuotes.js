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
    const { className, quote, index, left, right } = this.props
      return (
        <FlexRow
          constrained
          element='aside'
          className={className}
          aria-hidden>
          <FlexCol
            element='img'
            key='cutsomerQuoteLeftConfetti'
            mobile={{width: 2}}
            desktop={{width: 3}}
            alt='confetti'
            className='confetti'
            src={left} />
          <FlexCol className='quote' key='cutsomeQuoteBody' mobile={{width: 4}} desktop={{width: 6}}>
              <CSSTransitionGroup
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
          <FlexCol
            element='img'
            key='cutsomerQuoteRightConfetti'
            mobile={{width: 2}}
            desktop={{width: 3}}
            alt='confetti'
            className='confetti'
            src={right} />
        </FlexRow>
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
  ${props => props.theme.media.phoneMax`
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
  min-height: 15rem;
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
      left: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/v1548872934/web/CONFETTI_left_single.gif',
      right: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/v1548872934/web/CONFETTI_right_single.gif',
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
    const { className, header, quotes } = this.props
    const { index, quote, left, right } = this.state
    return (
      <FlexRow
        element='section'
        className={className}
        align='flex-start'>
        <FlexCol key='customerQuoteHeader' mobile={{width: 4}} desktop={{width: 12}}>
          <H1>{header}</H1>
        </FlexCol>
        <StyledCustomerQuote
          quote={quote}
          index={index}
          left={left}
          right={right} />
        {quotes.map((quote, i) => {
          return (
            <blockquote key={`customerQuoteBlock-${i}`}>
              <p>{quote.quote}</p>
              <cite>
                <p>{quote.signature}</p>
              </cite>
            </blockquote>
          )
        })}
      </FlexRow>
    )
  }

  quoteTimer = () => {
    this.timer = setInterval(() => {
      const { index } = this.state
      const { quotes } = this.props
      this.setState({
        height: '0',
        left: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/v1550773588/web/transparent.png',
        right: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/v1550773588/web/transparent.png'
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
          left: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/v1548872934/web/CONFETTI_left_single.gif',
          right: 'https://d2lknnt52h7uhg.cloudfront.net/roa-canon/image/upload/v1548872934/web/CONFETTI_right_single.gif',
        })
      }, 1000)
    }, 8000)
  }
}

const CustomerQuotes = styled(BaseCustomerQuotes)`
  margin-top: 4rem;
  margin-bottom: 2rem;
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
  blockquote {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`

CustomerQuotes.defaultProps = {
  ...defaultProps,
  padding: true,
  constrained: true
}

/** @component */
export default CustomerQuotes
