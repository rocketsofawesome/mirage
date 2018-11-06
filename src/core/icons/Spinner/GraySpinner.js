import PropTypes from 'prop-types'
import styled from 'styled-components'
import Spinner from './Spinner.base'

const GraySpinner = styled(Spinner)`
  rect {
    fill: ${props => props.theme.colors.loading};
  }
`

GraySpinner.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      loading: PropTypes.string
    })
  })
}

/** @component */
export default GraySpinner
