import { getValidation } from './validateInput'

it('should evaluate text', () => {
  const type = 'text'
  expect(!!getValidation(type, '')).toEqual(true)
})

it('should evaluate number', () => {
  const type = 'number'
  expect(!!getValidation(type, 0)).toEqual(true)
})

it('should evaluate date', () => {
  const type = 'date'
  expect(!!getValidation(type, 0)).toEqual(true)
})

it('should return success if type is text and length is over 2', () => {
  const type = 'text'
  expect(getValidation(type, '123')).toEqual('success')
})

it('should return error if type is text and length is 2 or less', () => {
  const type = 'text'
  expect(getValidation(type, '12')).toEqual('error')
  expect(getValidation(type, '1')).toEqual('error')
  expect(getValidation(type, '')).toEqual('error')
})

it('should return success if type is number and value is over 0', () => {
  const type = 'number'
  expect(getValidation(type, '0.1')).toEqual('success')
  expect(getValidation(type, '1')).toEqual('success')
})

it('should return error if type is number and value is 0 or less', () => {
  const type = 'number'
  expect(getValidation(type, '0')).toEqual('error')
  expect(getValidation(type, '-1')).toEqual('error')
})

it('should return error if type is number and value is not coercable to a number', () => {
  const type = 'number'
  expect(getValidation(type, 'test')).toEqual('error')
})

it('should return success if type is date and value can be coerced to a date', () => {
  const type = 'date'
  expect(getValidation(type, '2-13-2018')).toEqual('success')
  expect(getValidation(type, '2/13/2018')).toEqual('success')
  expect(getValidation(type, '2018-2-13')).toEqual('success')
  expect(getValidation(type, 'Feb 13 2018')).toEqual('success')
  expect(getValidation(type, 'February 13 2018')).toEqual('success')
})

it('should return error if type is date and value cannot be coerced to a date', () => {
  const type = 'date'
  expect(getValidation(type, 'test')).toEqual('error')
  expect(getValidation(type, NaN)).toEqual('error')
})

it('should return null if type does not match text, number, or date', () => {
  expect(getValidation(null, 'test')).toEqual(null)
  expect(getValidation('string', 'test')).toEqual(null)
})