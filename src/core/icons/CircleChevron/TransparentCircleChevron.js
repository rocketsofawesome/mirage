import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseChevron from './CircleChevron.base'

const TransparentCircleChevron = styled(BaseChevron)`
  ellipse {
    fill: #FFF;
    opacity: 0.5;
  }
  polyline {
    stroke: ${props => props.theme.colors.navy};
    stroke-width: 2;
  }
`

TransparentCircleChevron.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      rocketBlue: PropTypes.array
    })
  }),
  width: PropTypes.string
}

TransparentCircleChevron.defaultProps = {
  width: '6rem'
}

/** @component */
export default TransparentCircleChevron
