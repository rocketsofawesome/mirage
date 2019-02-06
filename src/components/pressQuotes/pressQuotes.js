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
import defaultProps from './defaultProps.js'

import MediaQuery from 'react-responsive';
import { CSSTransitionGroup } from 'react-transition-group'

class BasePressQuotes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      key: undefined,
      quote: undefined,
      index: undefined
    }
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  componentWillMount () {
    const { quotes } = this.props
    this.quoteTimer()
    this.setState({key: "new_york_times", quote: quotes.new_york_times, index: 0})
  }

  onClick = (press_icon) => {
    const { quotes, order } = this.props
    this.setState({key: press_icon, quote: quotes[press_icon], index: order.indexOf(press_icon)})
  }

  onClickChevronLeft = () => {
    const { quotes, order } = this.props

    if (this.state.index === 0) {
      const lastIndex = this.props.order.length - 1
      this.setState({index: lastIndex, key: order[lastIndex], quote: quotes[order[lastIndex]]})
    } else {
      const newIndex = this.state.index - 1
      this.setState({index: newIndex, key: order[newIndex], quote: quotes[order[newIndex]]})
    }
  }

  onClickChevronRight = () => {
    const { quotes, order } = this.props

    if ((this.props.order.length - 1) === this.state.index) {
      this.setState({index: 0, key: order[0], quote: quotes[order[0]]})
    } else {
      const newIndex = this.state.index + 1
      this.setState({index: newIndex, key: order[newIndex], quote: quotes[order[newIndex]]})
    }
  }

  renderPressRow = (pressIcons) => {
    return(
      <FlexCol mobile={{width: 4}} desktop={{span: 1, width: 10}}>
        <div className="press_icons">
          {pressIcons.map((press_icon, index) => {
            return(
              <PressIcon
                key={index}
                brand={press_icon}
                selected={(press_icon === this.state.key) ? true : false}
                onClick={this.onClick}
              />
            )
          })}
        </div>
      </FlexCol>
    )
  }

  renderPressRowMobile = () => {
    const { key, index } = this.state
    return(
      <FlexCol mobile={{width: 4}} desktop={{span: 1, width: 10}}>
        <div className="press_icons">
          <PressIcon
            key={index}
            brand={key}
            selected={true}
          />
        </div>
      </FlexCol>
    )
  }

  render () {
    const { className, header, theme } = this.props
    const { quote, index } = this.state
    const topRow = ["new_york_times", "today_show", "people_magazine", "tech_crunch"]
    const bottomRow = ["fast_company", "parents_magazine", "la_times", "new_york_post"]

    return (
      <section className={className}>
        <FlexCol mobile={{width: 4}} desktop={{width: 12}}>
          <H1>{header}</H1>
        </FlexCol>
        <FlexCol mobile={{width: 4}} desktop={{span: 1, width: 10}}>
          <div className="quote_controller">
            <Chevron left onClick={this.onClickChevronLeft} />
            <CSSTransitionGroup
              transitionName="quote"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={1}>
              <H2 lowercase key={index}>{quote}</H2>
            </CSSTransitionGroup>
            <Chevron right onClick={this.onClickChevronRight} />
          </div>
        </FlexCol>
        <FlexCol mobile={{width: 4}} desktop={{span: 1, width: 10}}>
          <MediaQuery query={theme.breakpoints.aboveTabletMax}>
            {this.renderPressRow(topRow)}
            {this.renderPressRow(bottomRow)}
          </MediaQuery>
        </FlexCol>
        <FlexCol mobile={{width: 4}} desktop={{span: 1, width: 10}}>
          <MediaQuery query="(max-device-width: 959px)">
            {this.renderPressRowMobile()}
          </MediaQuery>
        </FlexCol>
      </section>
    )
  }

  quoteTimer = () => {
    this.timer = setInterval(() => {
      const { index } = this.state
      const { quotes, order } = this.props
      const lastIndex = this.props.order.length - 1

      if (index === lastIndex) {
        this.setState({index: 0, key: order[0], quote: quotes[order[0]]})
      } else {
        const newIndex = this.state.index + 1
        this.setState({index: newIndex, key: order[newIndex], quote: quotes[order[newIndex]]})
      }
    }, 5000)
  }
}

const PressQuotes = styled(BasePressQuotes)`
  ${FlexRow}
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
    width: 24px;
    height: 24px;
    stroke-width: 7px;
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
    min-height: 12rem;
    max-height: 45rem;
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
`

PressQuotes.defaultProps = {
  ...defaultProps,
  padding: true,
  constrained: true
}

/** @component */
export default withTheme(PressQuotes)
