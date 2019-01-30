import React from 'react'
import styled from 'styled-components'

import {
  H1,
  H2,
  FadeInOut,
  FlexRow,
  FlexCol,
  Chevron
} from 'SRC'

import PressIcon from 'SRC/core/icons/press/PressIcon'
import defaultProps from './defaultProps.js'


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
    this.setState({key: "new_york_times", quote: quotes.new_york_times, index: 0})
    this.quoteTimer()
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
      <FlexCol mobile={{width: 4}} desktop={{width: 12}}>
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

    return (
      <section className={className}>
        <FlexCol mobile={{width: 4}} desktop={{width: 12}}>
          <H1>{header}</H1>
        </FlexCol>
        <FlexCol mobile={{width: 4}} desktop={{span: 1, width: 10}}>
          <div className="quote_controller">
            <Chevron left onClick={this.onClickChevronLeft} />
            <FadeInOut><H2 lowercase>{quote}</H2></FadeInOut>
            <Chevron right onClick={this.onClickChevronRight} />
          </div>
        </FlexCol>
        {this.renderPressRow(["new_york_times", "la_times", "people_magazine", "tech_crunch"])}
        {this.renderPressRow(["fast_company", "parents_magazine", "today_show", "new_york_post"])}
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
    &: hover {
      fill: ${props => props.theme.colors.rocketBlueHover};
    }
  }
  .quote_controller {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 30px;
  }
  .press_icons {
    display: flex;
    > * {
      width: 30rem;
    }
  }
`

PressQuotes.defaultProps = {
  ...defaultProps,
  padding: true,
  constrained: true
}

/** @component */
export default PressQuotes
