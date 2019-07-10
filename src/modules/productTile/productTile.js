import styled from 'styled-components'
import { P, QuickAdd, ColorsInterface } from 'SRC'
import BaseProductTile from './productTile.base'

const ProductTile = styled(BaseProductTile)`
  display: flex;
  flex-wrap: wrap;
  ${QuickAdd} {
    max-width: 100%;
    display: flex;
    flex: 1 1 100%;
  }
  > ${P} {
    flex: 1 1 100%;
    &:first-of-type {
      margin-top: 1.7rem;
    }
  }
  ${ColorsInterface}, ${P} {
    margin-left: 0.8rem;
    margin-right: 0.8rem;
  }
`

/** @component */
export default ProductTile
