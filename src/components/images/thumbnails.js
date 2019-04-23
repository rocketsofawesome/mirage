import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

import { InlineImage } from 'SRC'

const Thumbnails = styled(({className, active, thumbnails, onClick}) => {
  return (
    <div className={className}>
      {thumbnails && thumbnails.map((thumbnail, index) => {
        const classes = classNames('roa-thumbnail', {
          'active': (thumbnail.src.includes(active))
        })
        return (
          <InlineImage
            key={index}
            role='button'
            className={classes}
            src={thumbnail.src}
            alt={thumbnail.alt}
            onClick={onClick(index)} />
        )
      })}
    </div>
  )
})`
  display: inline-flex;
  flex-direction: column;
  .roa-thumbnail {
    margin-bottom: 1.5rem;
    width: 100%;
    border: 1px solid transparent;
    transition: border-color 0.25s ease-in-out;
    &:hover {
      cursor: pointer;
    }
    &.active {
      border-color: ${props => props.theme.colors.rocketBlue};
    }
  }
`

Thumbnails.propTypes = {
  className: PropTypes.string,
  thumbnails: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

/** @component */
export default Thumbnails
