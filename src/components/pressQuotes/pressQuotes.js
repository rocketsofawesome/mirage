import React from 'react'
import styled, { withTheme } from 'styled-components'

import {
  H1,
  H2,
  FlexRow,
  FlexCol,
  Chevron
} from 'SRC'

import PressIcon from 'SRC/core/icons/press/PressIcon'
import IconRow from './IconRow'
import defaultProps from './defaultProps.js'

import MediaQuery from 'react-responsive';
import { CSSTransitionGroup } from 'react-transition-group'

class BasePressQuotes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  onClick = (index) => {
    return (() => {
      this.setState({index: index})
      clearInterval(this.timer)
      this.quoteTimer()
    })
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
    const { className, header, headerLabel, theme, quotes} = this.props
    const { index } = this.state
    return (
      <FlexRow constrained element='section' className={className}>
        <FlexCol mobile={{width: 4}} desktop={{width: 12}}>
          <H1 aria-label={headerLabel}>{header}</H1>
        </FlexCol>
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
              <H2 lowercase key={index}>{quotes[index].quote}</H2>
            </CSSTransitionGroup>
            <Chevron right onClick={this.onClickChevronRight} />
        </FlexCol>
        <FlexCol mobile={{width: 4}} desktop={{span: 1, width: 10}}>
          <MediaQuery query={theme.breakpoints.aboveTabletMax}>
            <IconRow
              quotes={quotes}
              onClick={this.onClick}
              selected={index} />
          </MediaQuery>
        </FlexCol>
        <FlexCol mobile={{width: 4}} desktop={{span: 1, width: 10}}>
          <MediaQuery query="(max-device-width: 959px)">
            <PressIcon
              key={index}
              brand={quotes[index].id}
              selected={true} />
          </MediaQuery>
        </FlexCol>
        {quotes.map(({quote, name}, index) => {
          return (
            <blockquote key={index}>
              {quote}
              <cite>{name}</cite>
            </blockquote>
          )
        })}
      </FlexRow>
    )
  }
}

const PressQuotes = styled(BasePressQuotes)`
  margin-top: 4rem;
  margin-bottom: 2rem;
  ${props => props.theme.media.tablet`
    margin-top: 6rem;
  `}
  ${H1}, ${H2} {
    text-align: center;
    margin: 0 0 1rem 0;
  }
  ${H1} {
    @media (max-width: 958px) { font-size: 3.4rem; }
  }
  ${H2} {
    color: ${props => props.theme.colors.rocketBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 0;
    margin-bottom: 0;
    min-height: 12rem;
    max-height: 45rem;
    font-style: italic;
  }
  ${Chevron} {
    flex-basis: 2.4rem;
    min-width: 2.4rem;
    height: 2.4rem;
    stroke-width: .7rem;
  }
  ${PressIcon} {
    max-height: 4.5rem;
    padding: 0.5rem;
    box-sizing: border-box;
    &: hover {
      fill: ${props => props.theme.colors.rocketBlue};
    }
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
  .press_icons {
    display: flex;
    flex-wrap: wrap;
    max-height: 12rem;
    justify-content: center;
    @media (max-width: 958px) { margin-top: 0.5em; }
    > * {
      width: 30rem;
      @media (min-width: 959px) { width: 25%; }
    }
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

PressQuotes.defaultProps = {
  ...defaultProps,
  padding: true,
  constrained: true
}

/** @component */
export default withTheme(PressQuotes)
