import PropTypes from 'prop-types'
import styled from 'styled-components'
import BaseHr from './Hr.base'

const WhiteHr = styled(BaseHr)`
  background-color: ${props => props.theme.colors.white};
`

WhiteHr.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  }).isRequired,
}

/** @component */
export default WhiteHr
