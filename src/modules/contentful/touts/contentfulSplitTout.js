import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MirageMarkdown, Link } from 'SRC'
import BaseContentfulSplitTout from './contentfulSplitTout.base'

const ContentfulSplitTout = styled(BaseContentfulSplitTout)`
background-color: ${props => props.theme.colors.white};
border: 1rem solid ${props => props.theme.colors.white};
box-sizing: border-box;
display: flex;
flex-wrap: wrap;

.roa-split-tout-image-link {
  box-sizing: border-box;
  display: flex;
  width: 50%;
}
${MirageMarkdown} {
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
}
.roa-split-tout-link {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  height: 50px;
  justify-content: center;
  object-fit: contain;
  text-transform: uppercase;
  text-decoration: underline;
  width: 50%;
  ${Link} {
    color: ${props => props.theme.colors.navy};
    &:hover {
      color: ${props => props.theme.colors.navy};
    }
}
`

BaseContentfulSplitTout.propTypes = {
  className: PropTypes.string,
  fields: PropTypes.shape({
    description: PropTypes.string,
    imageLinks: PropTypes.array
  })
}

/** @component */
export default ContentfulSplitTout
