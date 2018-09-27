import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseChevron from './CircleChevron.base'

const CircleChevron = styled(BaseChevron)`
  ellipse {
    fill: ${props => props.theme.colors.lightBlue[2]};
  }
  polyline {
    stroke: ${props => props.theme.colors.white};
    stroke-width: 4;
  }
`

CircleChevron.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      lightBlue: PropTypes.array,
      white: PropTypes.string
    })
  }),
  width: PropTypes.string
}

/** @component */
export default CircleChevron
