import React from 'react'
import styled from 'styled-components'

import {
  H1,
  H2,
  FlexRow,
  FlexCol,
  Chevron
} from 'SRC'

import PressIcon from 'SRC/core/icons/press/PressIcon'
import defaultProps from './defaultProps.js'

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

  componentDidMount () {
    const { quotes } = this.props
    this.quoteTimer()
    this.setState({key: "new_york_times", quote: quotes.new_york_times, index: 0})
  }

  componentWillUnmount () {
    clearInterval(this.timer)
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

  render () {
    const { className, header } = this.props
    const { quote } = this.state
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
              <H2 lowercase key={this.state.index}>{quote}</H2>
            </CSSTransitionGroup>
            <Chevron right onClick={this.onClickChevronRight} />
          </div>
        </FlexCol>
        {this.renderPressRow(topRow)}
        {this.renderPressRow(bottomRow)}
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
  }
  ${H2} {
    color: ${props => props.theme.colors.rocketBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 0;
    margin-bottom: 0;
    min-height: 20rem;
    font-style: italic;
  }
  ${Chevron} {
    width: 24px;
    height: 24px;
    stroke-width: 7px;
  }
  ${PressIcon} {
    max-height: 4.5rem;
    margin: 1rem;
    &: hover {
      fill: ${props => props.theme.colors.rocketBlueHover};
    }
  }
  .quote_controller {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 3rem;
    max-height: 12rem;
  }
  .press_icons {
    display: flex;
    max-height: 12rem;
    > * {
      width: 30rem;
    }
  }
  .quote_controller span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 3rem;
    max-height: 12rem;
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
export default PressQuotes
