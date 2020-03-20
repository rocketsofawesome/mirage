import styled from 'styled-components'
import PropTypes from 'prop-types'
import { P } from 'SRC'
import BaseProductTile from './productTile.base'

const ProductTile = styled(BaseProductTile)`
  margin-bottom: ${props => props.marginBottom.mobile};

  ${props => props.theme.breakpointsVerbose.aboveTablet`
    margin-bottom: ${props => props.marginBottom.desktop};
  `}

  .roa-product-tile-details {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 100%;
    text-decoration: none;
    padding-top: 1.7rem;
  }

  .roa-product-tile-details ${P} {
    flex: 1 1 100%;
  }
`

ProductTile.propTypes = {
  marginBottom: PropTypes.shape({
    desktop: PropTypes.string,
    mobile: PropTypes.string
  })
}

ProductTile.defaultProps = {
  marginBottom: {
    desktop: '6rem',
    mobile: '2rem'
  }
}
/** @component */
export default ProductTile
