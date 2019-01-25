import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H1, P, Instagram } from 'SRC'
import data from './data.json'

const BaseInstagramRegion = ({className, content, title})  => {
  return (
    <section className={className}>
      <H1>{title}</H1>
      <P>{content}</P>
      <Instagram />
    </section>
  )
}

const InstagramRegion = styled(BaseInstagramRegion)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > * {
    flex: 1 1 100%;
    display: flex;
    justify-content: center;
  }
  ${H1}, ${P} {
    margin-bottom: 2rem;
    text-align: center;
  }
`

InstagramRegion.propTypes = {
  className: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  title: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ])
}

InstagramRegion.defaultProps = {
  ...data
}

/** @component */
export default InstagramRegion
