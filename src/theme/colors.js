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
  navy: '#00003C',
  yellow: '#F0FF02',
  lightBlue0: '#EEFCFF',
  lightBlue1: '#BCE1F7',
  lightBlue2: '#76C2F3',
  lightBlue: ['#EEFCFF', '#BCE1F7', '#76C2F3'],
  electricBlue: '#080CF1',
  lightPink: '#FBDDE4',
  pink: '#FEACBE',
  white: '#FFFFFF'
}

const supportingColors = {
  gray0: '#F3F3F3',
  gray1: '#F5F5F5',
  gray2: '#E6E6E6',
  gray3: '#D5D5D5',
  gray4: '#CFCFCF',
  gray: [
    '#F3F3F3',
    '#F5F5F5',
    '#E6E6E6',
    '#D5D5D5',
    '#CFCFCF'
  ],
  red: '#FF511C'
}

const colors = { ...brandColors, ...supportingColors }
export { colors }
