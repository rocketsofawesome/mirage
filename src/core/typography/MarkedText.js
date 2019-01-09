import PropTypes from 'prop-types'
import styled from 'styled-components'

const MarkedText = styled.span`
  ${props => props.underline && `text-decoration: underline;`}
  ${props => props.bold && `font-weight: bold;`}
  ${props => props.italic && 'font-style: italic;'}
  white-space: pre;
`

MarkedText.propTypes = {
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  underline: PropTypes.bool
}

/** @component */
export default MarkedText
