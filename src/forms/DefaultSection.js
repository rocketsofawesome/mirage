import styled from 'styled-components'
import PropTypes from 'prop-types'

import Link from '../link/Link'

const DefaultSection = styled.section`
  border-radius: 0.1875em;
  padding: 1.25em;
  background-color: ${props => props.theme.colors.gray[2]};
  position: relative;
  float: left;
  width: 100%;
  box-sizing: border-box;

  > ${Link} {
    position: absolute;
    top: 0.9375em;
    right: 1.25em;
  }
  main {
    margin-top: 2.5em;
  }
`

DefaultSection.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      gray: PropTypes.array
    })
  }).isRequired,
}

/** @component */
export default DefaultSection
