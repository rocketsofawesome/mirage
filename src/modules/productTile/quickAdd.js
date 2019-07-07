import PropTypes from 'prop-types'
import styled from 'styled-components'
import QuickAddBase from './quickAdd.base'
import { P } from 'SRC'

const QuickAdd = styled(QuickAddBase)`
  width: 100%;
  position: relative
  .roa-quick-add {
    position: absolute;
    bottom: 2.2rem;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0.1rem 0.2rem 0.4rem -0.1rem rgba(0, 0, 0, 0.21);
    ${P} {
      text-transform: uppercase;
      text-align: center;
      padding: 0.8rem 0;
    }
  }
`

QuickAdd.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      white: PropTypes.string
    })
  })
}

/** @component */
export default QuickAdd
