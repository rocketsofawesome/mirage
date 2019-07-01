import PropTypes from 'prop-types'
import styled from 'styled-components'
import { MirageMarkdown } from 'SRC'
import BaseContentfulProductQuartet from './contentfulProductQuartet.base'

const ContentfulProductQuartet = styled(BaseContentfulProductQuartet)`
  ${MirageMarkdown} {
    text-align: center;
    margin: 2rem 0;
    * {
      margin: 0;
    }
  }

`

ContentfulProductQuartet.propTypes = {
  products: PropTypes.array
}

/** @component */
export default ContentfulProductQuartet
