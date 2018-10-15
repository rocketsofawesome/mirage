import PropTypes from 'prop-types'
import styled from 'styled-components'
import BaseHr from './Hr.base'

const BlueHr = styled(BaseHr)`
  background-color: ${props => props.theme.colors.rocketBlue};
`

BlueHr.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string
    })
  }),
}

/** @component */
export default BlueHr
