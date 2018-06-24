import React from 'react'
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap'

import { zeroPad } from '../../utilities/zeroPad'

export const PeriodSelector = ({month, year, filterName, monthChange}) => {
  const date = new Date()
  const currMonth = date.getMonth() + 1
  const currYear = date.getFullYear()

  return (
    <FormGroup controlId="periodSelect">
      <FormControl componentClass="select" value={ filterName } onChange={ monthChange }>
        { generateMonthOptions(currMonth, currYear) }
      </FormControl>
    </FormGroup>
  )
}

PeriodSelector.propTypes = {
  month: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
  year: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
  filterName: PropTypes.string,
  monthChange: PropTypes.func
}

function generateMonthOptions(month, year) {
  const monthData = getLastYearInMonths(month, year)
  return monthData.map(
    m => <option key={m.value} value={ m.value }>{ m.name }</option>
  )
}

function getLastYearInMonths(currentMonth, currentYear, accumulator = []) {
  if (accumulator.length === 12) return accumulator
  const lastMonth = getPreviousMonth(currentMonth)

  return getLastYearInMonths(
    lastMonth,
    lastMonth !== 12 ? currentYear : currentYear - 1,
    [
      ...accumulator,
      {
        value: `${currentYear}-${zeroPad(currentMonth, 2)}-??`,
        name: `${getMonthOneBase(currentMonth)} - ${currentYear}`
      }
    ]
  )
}

function getPreviousMonth(month) {
  const prevMonth = month - 1

  return prevMonth > 0 ?
          prevMonth :
          12
}

function getMonthOneBase(month) {
  const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December' ]

  return monthNames[month - 1]
}
