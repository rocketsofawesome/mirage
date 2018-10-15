import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseChevron from './CircleChevron.base'

const YellowCircleChevron = styled(BaseChevron)`
  ellipse {
    fill: ${props => props.theme.colors.yellow};
  }
  polyline {
    stroke: ${props => props.theme.colors.rocketBlue};
    stroke-width: 3;
  }
`

YellowCircleChevron.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.array,
      yellow: PropTypes.string
    })
  }),
  width: PropTypes.string
}

YellowCircleChevron.defaultProps = {
  width: '60px'
}

/** @component */
export default YellowCircleChevron
