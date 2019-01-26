import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FlexRow } from 'SRC'

const ExampleFlexRow = styled.section`
  ${FlexRow}
  background-color: #CCCCCC;
  div {
    margin-top: 1rem;
    > span {
      background-color: #F3F3F3;
      height: 8rem;
      display: block;
      width: 100%;
    }
  }
`

ExampleFlexRow.propTypes = {
  constrained: PropTypes.bool,
  padding: PropTypes.bool
}

ExampleFlexRow.defaultProps = {
  constrained: true,
  padding: true
}

/** @component */
export default ExampleFlexRow
