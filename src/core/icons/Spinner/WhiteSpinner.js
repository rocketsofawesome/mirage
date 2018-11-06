import PropTypes from 'prop-types'
import styled from 'styled-components'
import Spinner from './Spinner.base'

const WhiteSpinner = styled(Spinner)`
  rect {
    fill: ${props => props.theme.colors.white};
  }
`

WhiteSpinner.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  })
}

/** @component */
export default WhiteSpinner
