import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import { FlexRow, FlexCol, Gallery, Desktop, Default } from 'SRC'

const BaseLookDetail = ({className, theme, children, images}) => {
  return (
    <FlexRow constrained={false} className={className}>
      <FlexCol className='breadcrumb' desktop={{width: 12}}/>
      <FlexCol className='images' desktop={{width: 6}}>
        <Desktop>
          <Gallery images={images} />
        </Desktop>
        <Default>
          <h1>We mobile y'all</h1>
        </Default>
      </FlexCol>
      <FlexCol className='information' desktop={{width: 6}}/>
    </FlexRow>
  )
}

const LookDetail =  styled(BaseLookDetail)`
  border: 1px solid red;
  .breadcrumb {
    height: 1.6rem;
    border: 1px solid grey;
  }
  .thumbnails {
    border: 1px solid green;
    height: 70rem;
  }
  .image {
    border: 1px solid blue;
    height: 50rem;
  }
  .information {
    height: 80rem;
    border: 1px solid grey;
  }
`

LookDetail.propTypes = {
  className: PropTypes.string,
  images: PropTypes.array.isRequired
}

/** @component */
export default withTheme(LookDetail)
