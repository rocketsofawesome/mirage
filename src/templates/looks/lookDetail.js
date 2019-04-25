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

/*
  It would be cool to know the structure of these props being passed down.. ie:

  images (Array)
    [
      {
        alt: 'Fuzzy Tiger Tee detail',
        src: 'production/catalog/jhpde0cdhl11lu9fa41o'
      },
      {
        alt: 'Cool Down Active Short front',
        src: 'production/catalog/xrpiecxqwmiso3acxucc'
      },
      {
        alt: 'Cool Down Active Short back',
        src: 'production/catalog/wmwxd0bxeavdtgt0uqzx'
      }
    ]

  information (Object)
    {
      subheader: "The Trend: Sparkly Rainbow",
      header: "Weekends Are For Fun Outfit",
      price: '$55',
      description: "Cheesecake bocconcini red leicester."
    }

  products (Array)
    [
      {
        image: {
          alt: 'Fuzzy Tiger Tee front',
          src: 'https://res.cloudinary.com/roa-canon/image/upload/c_scale,w_122/v1548780269/production/catalog/rfxx1bcmwy7zych1pmof.png'
        },
        sizes: [
          { value: 3, inStock: true },
          { value: 4, inStock: true },
          { value: 5, inStock: true },
          { value: 6, inStock: true },
          { value: 7, inStock: false },
          { value: 9, inStock: true },
          { value: 12, inStock: true },
        ],
        id: '12345'
      },
      {}
    ]

  header (Node)
  footer (Node)
  onClick (Function)
*/
const BaseLookDetail = ({
  className, 
  images, 
  information, 
  products, 
  header, 
  footer, 
  addToBag, 
  onSizeSelect,
  currentSizes,
  ...props
}) => {
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
          <LookSizePicker
            products={products} 
            onSizeSelect={onSizeSelect} 
            currentSizes={currentSizes} />
          <Button onClick={addToBag}>Add Outfit to Bag</Button>
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
