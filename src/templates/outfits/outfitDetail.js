import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import {
  Button,
  FlexCol,
  FlexRow,
  Gallery,
  ProductInformation,
  OutfitSizePicker
 } from 'SRC'

const BaseOutfitDetail = ({
  className,
  images,
  information,
  products,
  header,
  footer,
  onSizeSelect,
  currentSizes,
  sizePickerFooter,
  sizePickerHeader,
  renderProductLink,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {header}
      <FlexRow padding>
        <FlexCol element="aside" className='images' desktop={{width: 6}}>
          <Gallery images={images} />
        </FlexCol>
        <FlexCol element="article" desktop={{width: 5, span: 1}} >
          <div key='outfit-information' className='information'>
            <ProductInformation {...information} />
            <div className='roa-outfit-sizepicker-header'>{sizePickerHeader}</div>
            <OutfitSizePicker
              products={products}
              onSizeSelect={onSizeSelect}
              currentSizes={currentSizes}
              renderProductLink={renderProductLink} />
            {sizePickerFooter}
          </div>
        </FlexCol>
      </FlexRow>
      {footer}
    </div>
  )
}

const OutfitDetail =  styled(BaseOutfitDetail)`
margin: 3rem 0 9rem 0;
  .roa-outfit-sizepicker-header > * {
    display: inline-block;
    margin: 0.5rem 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  ${ProductInformation} {
    margin-bottom: 4rem;
  }
  ${OutfitSizePicker} {
    margin: 2rem 0;
  }

  ${Button} {
    width: 100%;
  }

  .information {
    max-width: 500px;
    margin-right: auto;
  }
`

OutfitDetail.propTypes = {
  className: PropTypes.string,
  footer: PropTypes.node,
  header: PropTypes.node,
  images: PropTypes.array.isRequired,
  information: PropTypes.object,
  products: PropTypes.array,
  sizePickerFooter: PropTypes.node,
  sizePickerHeader: PropTypes.node,
  renderProductLink: PropTypes.func
}

OutfitDetail.defaultProps = {
  button: <Button>Add to Bag</Button>
}

/** @component */
export default withTheme(OutfitDetail)
