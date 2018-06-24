export function getValidation(type, value) {
  if (type === 'text') return getTextValidation(value)
  else if (type === 'number') return getNumberValidation(value)
  else if (type === 'date') return getDateValidation(value)
  return null
}

function getDateValidation(value) {
  return new Date(value) == 'Invalid Date' ?
    'error' :
    'success'
}

function getNumberValidation(value) {
  return parseFloat(value, 10) > 0 ?
    'success' :
    'error'
}

function getTextValidation(value) {
  const length = value.length
  return length > 2 ?
    'success' :
    'error'
}