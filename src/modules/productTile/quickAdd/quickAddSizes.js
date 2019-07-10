import styled from 'styled-components'

import BaseQuickAddSizes from './quickAddSizes.base'
import { H4 } from 'SRC'

const QuickAddSizes = styled(BaseQuickAddSizes)`
  padding: 0.8rem 0;
  ${H4} {
    text-align: center;
  }
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    justify-content: center;
  }
`

/** @component */
export default QuickAddSizes
