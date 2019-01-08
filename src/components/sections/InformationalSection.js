import PropTypes from 'prop-types'
import styled from 'styled-components'

const InformationalSection = styled.section`
  padding: 2.0rem 1.5rem;
  background-color: ${props => props.theme.colors.lightBlue[0]};
`

InformationalSection.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      lightBlue: PropTypes.array
    })
  })
}

/** @component */
export default InformationalSection
