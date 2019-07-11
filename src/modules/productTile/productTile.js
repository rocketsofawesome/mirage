import styled from 'styled-components'
import PropTypes from 'prop-types'
import { P, QuickAdd, ColorsInterface } from 'SRC'
import BaseProductTile from './productTile.base'

const ProductTile = styled(BaseProductTile)`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${props => props.marginBottom.mobile};
  ${props => props.theme.breakpointsVerbose.aboveTablet`
    margin-bottom: ${props => props.marginBottom.desktop};
  `}
  ${QuickAdd} {
    max-width: 100%;
    display: flex;
    flex: 1 1 100%;
  }
  .roa-prodiuct-tile-details {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 100%;
    text-decoration: none;
  }
  .roa-prodiuct-tile-details ${P} {
    flex: 1 1 100%;
    &:first-of-type {
      margin-top: 1.7rem;
    }
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
