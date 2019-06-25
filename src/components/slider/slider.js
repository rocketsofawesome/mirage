import PropTypes from 'prop-types'
import styled from 'styled-components'
import BaseROASlider from './slider.base'

const  ROASlider = styled(BaseROASlider)`
.image {
  width: 100%;
}
.dots {
  position: absolute;
  bottom: 15px;

  display: block;

  width: 100%;
  padding: 0;
  margin: 0;

  list-style: none;

  text-align: center;
  li {
    position: relative;

    display: inline-block;

    width: 7px;
    height: 7px;
    margin: 0 2px;
    padding: 0;

    cursor: pointer;

    button {
      font-size: 0;
      line-height: 0;

      display: block;

      width: 7px;
      height: 7px;
      padding: 2px;

      cursor: pointer;

      color: transparent;
      border: 0;
      outline: none;
      background: transparent;

      &:hover, &:focus {
        outline: none;
      }

      &:hover:before, &:focus:before {
        opacity: 1;
      }

      &:before {
        font-family: 'slick';
        font-size: 6px;
        line-height: 5px;

        position: absolute;
        top: 0;
        left: 0;

        width: 7px;
        height: 7px;

        content: '•';
        text-align: center;

        border: ${props => props.theme.colors.navy} solid 2px;
        border-radius: 15px;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
      }
    }
  }
  .slick-active {
    button {
      &:before {
        background-color: ${props => props.theme.colors.navy} !important;
        border: 2px solid transparent!important;
      }
    }
  }
`

ROASlider.propTypes = {

}

/** @component */
export default ROASlider
