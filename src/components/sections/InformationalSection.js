import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseInformationalSection from './InformationalSection.base'

const InformationalSection = styled(BaseInformationalSection)`
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
