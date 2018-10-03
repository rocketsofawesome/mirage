import styled from 'styled-components'
import PropTypes from 'prop-types'

import Link from '../link/Link'
import { styles } from '../typography/Label'

const DefaultSection = styled.section`
  border-radius: 0.3rem;
  padding: 1rem 2rem;
  ${props => props.theme.media.tablet`
    padding: 1.5rem 4rem;
  `}
  background-color: ${props => props.theme.colors.gray[2]};
  position: relative;
  box-sizing: border-box;

  > ${Link} {
    ${styles}
    position: absolute;
    top: 1rem;
    line-height: 2rem;
    vertical-align: text-bottom;
    ${props => props.theme.media.tablet`
      top: 1.5rem;
    `}
    right: 2rem;
  }

  main {
    margin-top: 4rem;
  }
`

DefaultSection.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      gray: PropTypes.array
    })
  }),
}

/** @component */
export default DefaultSection
