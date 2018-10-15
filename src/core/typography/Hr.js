import PropTypes from 'prop-types'
import styled from 'styled-components'
import BaseHr from './Hr.base'

const Hr = styled(BaseHr)`
  background-color: ${props => props.theme.colors.gray[4]};
`

Hr.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      gray: PropTypes.array
    })
  }),
}

/** @component */
export default Hr
