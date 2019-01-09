import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Content from './parser'

const RichText = ({className, richText}) => {
  const result = new Content(richText).parse()
  if (result) {
    return (React.cloneElement(result, {className: className}))
  } else {
    return null
  }
}

RichText.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ])
}

export default styled(RichText)`
  display: flex;
  flex-direction: column;
  > * {
    white-space: pre;
  }
`
