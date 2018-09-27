import styled from 'styled-components'
import PropTypes from 'prop-types'

import Link from '../link/Link'

const DefaultSection = styled.section`
  border-radius: 0.3rem;
  padding: 2rem;
  background-color: ${props => props.theme.colors.gray[2]};
  position: relative;
  box-sizing: border-box;

  > ${Link} {
    position: absolute;
    top: 1.5rem;
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
