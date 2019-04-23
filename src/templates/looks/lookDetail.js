import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import {
  Header,
  FlexCol,
  FlexRow,
  Gallery,
  ProductInformation,
  LookSizePicker,
  Footer,
  Button
 } from 'SRC'

const BaseLookDetail = ({className, images, information, products, header, footer, onClick, ...props }) => {
  return (
    <div className={className} {...props}>
      {header}
      <FlexRow constrained={false} className={className}>
        <FlexCol className='breadcrumb' desktop={{width: 12}}/>
        <FlexCol element="aside" className='images' desktop={{width: 6}}>
          <Gallery images={images} />
        </FlexCol>
        <FlexCol element="article" className='information' desktop={{width: 5, span: 1}} >
          <ProductInformation {...information} />
          <LookSizePicker products={products} />
          <Button onClick={onClick}>Add Outfit to Bag</Button>
        </FlexCol>
      </FlexRow>
      {footer}
    </div>
  )
}

const LookDetail =  styled(BaseLookDetail)`
  .breadcrumb {
    height: 1.6rem;
  }
  .thumbnails {
  }
  .information {
  }
  ${LookSizePicker} {
    margin-top: 4rem;
  }
  ${Button} { 
    width: 100%;
  }
`

LookDetail.propTypes = {
  className: PropTypes.string,
  images: PropTypes.array.isRequired,
  information: PropTypes.string,
  products: PropTypes.array
}

LookDetail.defaultProps = {
  footer: <Footer />,
  header: <Header
    mobileProps={
      {
        position: 'absolute',
        drawerPosition:'absolute'
      }
    }
    desktopProps={
      {
        position: 'absolute'
      }
    } />
}

/** @component */
export default withTheme(LookDetail)
