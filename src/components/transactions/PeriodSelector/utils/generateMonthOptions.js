import React from 'react'

export const generateMonthOptions = (month, year) => {
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
        value: `${currentYear}-${String(currentMonth).padStart(2, '0')}-??`,
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