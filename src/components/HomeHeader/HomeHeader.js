import PropTypes from 'prop-types'
import styled from 'styled-components'

const HomeHeader = styled.header`
  height: 80px;
  width: 100%;
  background-color: ${props => props.theme.colors.rocketBlue};
`

HomeHeader.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

/** @component */
export default HomeHeader
