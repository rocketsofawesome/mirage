import styled from 'styled-components'

const BlockQuote = styled.blockquote`
  position: relative;
  padding-left: 1em;
  border-left: 0.2rem solid ${props => props.theme.colors.navy};
  font-family: ${props => props.theme.fonts.primaryFont};
  font-size: ${props => props.fontSize};
  line-height: 1.7;
  font-weight: 100;
  &:before, &:after {
    content: '\\201C';
    font-family: 'Sanchez';
    color: ${props => props.theme.colors.navy};
  }
  &:after {
    content: '\\201D';
  }
`

BlockQuote.propTypes = {

}

BlockQuote.defaultProps = {
  fontSize: '1.8rem'
}

/** @component */
export default BlockQuote
