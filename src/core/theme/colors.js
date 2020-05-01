import styled from 'styled-components'

/** @component */
export default styled.div`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  background-color: ${props => colors[props.color]};
  border: 1px solid #333;
`

const brandColors = {
  rocketBlue: '#0073D1',
  rocketBlueHover: '#0073EB',
  navy: '#00003C',
  yellow: '#F0FF02',
  yellowHover: '#D8E320',
  lightBlue0: '#EEFCFF',
  lightBlue1: '#BCE1F7',
  lightBlue2: '#76C2F3',
  lightBlue: ['#EEFCFF', '#BCE1F7', '#76C2F3'],
  electricBlue: '#080CF1',
  lightPink: '#FBDDE4',
  pink: '#FEACBE',
  white: '#FFFFFF',
  flameOrange: '#FF511C'
}

const supportingColors = {
  black: '#000000',
  gray0: '#F3F3F3',
  gray1: '#F5F5F5',
  gray2: '#F8F8F8',
  gray3: '#E6E6E6',
  gray4: '#D5D5D5',
  gray5: '#CFCFCF',
  gray6: '#979797',
  gray7: '#6e6e6e',
  gray: [
    '#F3F3F3',
    '#F5F5F5',
    '#F8F8F8',
    '#E6E6E6',
    '#D5D5D5',
    '#CFCFCF',
    '#979797',
    '#6e6e6e'
  ],
  shadyLady: '#979797',
  red: '#FF511C',
  loading: '#BFBFBF'
}

const colors = { ...brandColors, ...supportingColors }
export { colors }
