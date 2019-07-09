import styled from 'styled-components'
import { Label, QuickAdd } from 'SRC'
import BaseProductTile from './productTile.base'

const ProductTile = styled(BaseProductTile)`
  display: flex;
  flex-wrap: wrap;
  ${QuickAdd} {
    max-width: 100%;
    display: flex;
    flex: 1 1 100%;
  }
  ${Label} {
    flex: 1 1 100%;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
  }
`

/** @component */
export default ProductTile
