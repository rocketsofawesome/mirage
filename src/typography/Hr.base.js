import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseHr = styled.hr`
  height: 1px;
  width: ${props => props.width};
  border: none;
  margin: 0.625em 0;
`

BaseHr.propTypes = {
  width: PropTypes.string.isRequired
}

BaseHr.defaultProps = {
  width: '100%'
}

/** @component */
export default BaseHr
