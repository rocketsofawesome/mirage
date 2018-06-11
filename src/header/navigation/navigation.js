import styled from 'styled-components'
import PropTypes from 'prop-types'

const Navigation = styled.header`
  display: grid;
  align-content: center;

  width: 923px;
  height: 60px;
  margin: 0 auto;

  color: ${props => props.theme.colors.rocketBlue};
  background-color: ${props => props.theme.colors[props.colors]};

  font-family: ${props => props.theme.fonts.primaryFont};

  grid-template-columns:
    [left-links] ${props => props.links ? 'repeat(3, 1fr)' : '25%'}
    [logo] 458px
    [right-links] ${props => props.links ? 'repeat(3, 1fr)}' : '25%'};
  > h1, a, label {
    height: 60px;
    display: flex;
    align-items: center;
  }
  > *:nth-child(2n) {
    justify-content: center;
  }
`

Navigation.propTypes = {
  color: PropTypes.string,
  links: PropTypes.bool.isRequired
}

Navigation.defaultProps = {
  links: true
}

/** @component */
export default Navigation
