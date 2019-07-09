import styled from 'styled-components'
import { P, QuickAdd } from 'SRC'
import BaseProductTile from './productTile.base'

const ProductTile = styled(BaseProductTile)`
  display: flex;
  flex-wrap: wrap;
  ${QuickAdd} {
    max-width: 100%;
    display: flex;
    flex: 1 1 100%;
  }
  ${P} {
    flex: 1 1 100%;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
    &:first-of-type {
      margin-top: 1.7rem;
    }
  }
`

/** @component */
export default ProductTile
