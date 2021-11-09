import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import ErrorMessage from 'SRC/components/inputs/ErrorMessage'

function pickColor(props, color) {
  if (props.error) {
    return props.theme.colors.textError
  }
  return props.theme.colors[color]
}

const regularContainerStyles = css`
  border: 1px solid ${props => pickColor(props, 'gray4')}
`

const miniContainerStyles = css`
  border: 3px solid ${props => pickColor(props, 'lightPink')}
`

const containerVariants = {
  regular: regularContainerStyles,
  mini: miniContainerStyles
}

const Container = styled.div`
  background-color: white;
  width: 100%;
  padding: 10px 16px 6px;
  ${props => containerVariants[props.kind]};
`

const Label = styled.label`
  display: block;
  font-size: 12px;
  font-family: ${props => props.theme.fonts.primaryFont};
  color: ${props => props.theme.colors.textPrimary};
  letter-spacing: .5px;
  font-weight: 200;
  text-align: left;
`

const SelectContainer = styled.div`
  display: flex;
  padding-top: 5px;
`

const regularSelectStyles = css`
  color: ${props => props.theme.colors.navy};

  &:focus {
    color: ${props => props.theme.colors.rocketBlue};
  }
`

const miniSelectStyles = css`
  color: ${props => props.theme.colors.rocketBlue};
`

const selectVariants = {
  regular: regularSelectStyles,
  mini: miniSelectStyles
}

const Select = styled.select`
  background-color: transparent;
  flex-grow: 1;
  appearance: none;
  border: none;
  outline: none;
  font-family: ${props => props.theme.fonts.secondaryFont};
  font-size: 20px;

  ${props => selectVariants[props.kind]}
`

function buildYears(baseYear, yearOffset) {
  const years = []

  for (let i = baseYear + yearOffset; i >= baseYear; --i) {
    years.push(i)
  }
  return years
}

function buildDays(monthIndex) {
  // Months with 31 days: 1,3,5,7,8,10,12
  const days = []
  const month = monthIndex + 1

  for (let i = 1; i <= 29; ++i) {
    days.push(i)
  }

  if (month === 2) {
    return days
  }

  days.push(30)
  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    days.push(31)
  }
  return days
}

function defaultBaseYear() {
  const today = new Date()
  return today.getFullYear() - 15
}

function buildDate({ year, month, day }) {
  if (year && month && day) {
    return new Date(year, month, day)
  }
  return null
}

function buildDefaultValues(initialValue) {
  const regex = /\d{4}-\d{2}-\d{2}/

  if (typeof initialValue === 'string' && regex.test(initialValue)) {
    return parseDateString(initialValue)
  } else if (initialValue instanceof Date) {
    return parseDateObject(initialValue)
  }
  return {}
}

function parseDateObject(date) {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate()
  }
}

function parseDateString(string) {
  const parts = string.split('-').map((part) => parseInt(part, 10))
  return {
    year: parts[0],
    month: parts[1] - 1,
    day: parts[2]
  }
}

class Datepicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = { month: null }
    this.blurred = {}
    this.components = buildDefaultValues(props.initialValue)

    this.handleMonthChange = this.handleMonthChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleMonthChange(e) {
    this.setState({ month: parseInt(e.target.value, 10) })
    this.handleChange(e)
  }

  handleChange(e) {
    const { onChange } = this.props
    this.components[e.target.name] = e.target.value
    const date = buildDate(this.components)
    onChange(date)
  }

  handleBlur(e) {
    this.blurred[e.target.name] = true
    const touched = this.blurred.year && this.blurred.month && this.blurred.day

    if (touched) {
      const { onTouched } = this.props
      onTouched()
    }
  }

  render() {
    const {
      baseYear,
      error,
      initialValue,
      kind,
      label,
      months,
      touched,
      yearOffset
    } = this.props
    const { month } = this.state
    const showError = touched && error
    const days = buildDays(month)
    const years = buildYears(baseYear, yearOffset)
    const defaults = buildDefaultValues(initialValue)

    return (
      <div>
        <Container kind={kind} error={showError}>
          <Label kind={kind}>{label}</Label>
          <SelectContainer>
            <Select
              name='month'
              kind={kind}
              onChange={this.handleMonthChange}
              onBlur={this.handleBlur}
              defaultValue={defaults.month}
            >
              <option value=''>Month</option>
              {
                months.map(
                  (month, index) => (
                    <option value={index} key={index}>
                      {month}
                    </option>
                  )
                )
              }
            </Select>
            <Select
              indented
              name='day'
              kind={kind}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              defaultValue={defaults.day}
            >
              <option value=''>Day</option>
              {
                days.map(
                  (day) => (
                    <option value={day} key={day}>
                      {day < 10 ? `0${day}` : day}
                    </option>
                  )
                )
              }
            </Select>
            <Select
              indented
              name='year'
              kind={kind}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              defaultValue={defaults.year}
            >
              <option value=''>Year</option>
              {
                years.map(
                  (year) => (
                    <option value={year} key={year}>
                      {year}
                    </option>
                  )
                )
              }
            </Select>
          </SelectContainer>
        </Container>
        {showError &&
          <ErrorMessage>{error}</ErrorMessage>
        }
      </div>
    )
  }
}

Datepicker.propTypes = {
  baseYear: PropTypes.number,
  error: PropTypes.string,
  initialValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]),
  kind: PropTypes.string,
  label: PropTypes.string.isRequired,
  months: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  onTouched: PropTypes.func,
  touched: PropTypes.bool,
  yearOffset: PropTypes.number
}

Datepicker.defaultProps = {
  baseYear: defaultBaseYear(),
  error: null,
  initialValue: null,
  kind: 'regular',
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  onTouched: () => null,
  touched: false,
  yearOffset: 30
}

export default Datepicker
