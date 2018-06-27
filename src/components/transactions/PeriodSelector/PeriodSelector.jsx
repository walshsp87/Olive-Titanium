import React from 'react'
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap'

import { generateMonthOptions } from './utils'

export const PeriodSelector = ({filterName, monthChange}) => {
  const currMonth = new Date().getMonth() + 1
  const currYear = new Date().getFullYear()

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
