import React from 'react'

import { Highlighter, Link } from 'SRC'

export default class BaseHeaderLink extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: false,
      active: false
    }
  }

  enter = () => {
    const { onMouseEnter } = this.props
    this.setState({ hover: true })
    onMouseEnter && onMouseEnter()
  }

  leave = () => {
    const { onMouseLeave } = this.props
    this.setState({ hover: false })
    onMouseLeave && onMouseLeave()
  }

  render () {
    const { className, children, highlightable, highlightOn, ...props} = this.props
    const highlight = this.state[highlightOn]
    delete props.spacing
    return (
      <Link
        {...props}
        className={className}
        onMouseEnter={this.enter}
        onMouseLeave={this.leave}
        light
        underline={false}
        uppercase>
        {highlightable && <Highlighter highlight={highlight}/>}
        <span>{children}</span>
      </Link>
    )
  }
}
