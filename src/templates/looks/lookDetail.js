import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import {
  Button,
  Header,
  FlexCol,
  FlexRow,
  Gallery,
  ProductInformation,
  LookSizePicker,
  Footer
 } from 'SRC'

const BaseLookDetail = ({
  button,
  className, 
  images, 
  information, 
  products, 
  header, 
  footer,  
  onSizeSelect,
  currentSizes,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {header}
      <FlexRow constrained className={className}>
        <FlexCol element="aside" className='images' desktop={{width: 6}}>
          <Gallery images={images} />
        </FlexCol>
        <FlexCol element="article" className='information' desktop={{width: 5, span: 1}} >
          <ProductInformation {...information} />
          <LookSizePicker
            products={products} 
            onSizeSelect={onSizeSelect} 
            currentSizes={currentSizes} />
          {button}
        </FlexCol>
      </FlexRow>
      {footer}
    </div>
  )
}

const LookDetail =  styled(BaseLookDetail)`
  ${LookSizePicker} {
    margin-top: 4rem;
  }
  ${Button} { 
    width: 100%;
  }
`

LookDetail.propTypes = {
  button: PropTypes.node,
  className: PropTypes.string,
  footer: PropTypes.node,
  header: PropTypes.node,
  images: PropTypes.array.isRequired,
  information: PropTypes.string,
  products: PropTypes.array
}

LookDetail.defaultProps = {
  button: <Button>Add to Bag</Button>,
}

/** @component */
export default withTheme(LookDetail)