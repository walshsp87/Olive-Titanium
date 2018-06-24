import { zeroPad } from './zeroPad'

it('should return 0 padded to length on a string', () => {
  expect(zeroPad('x', 3)).toEqual('00x')
  expect(zeroPad('x', 3).length).toEqual(3)
})

it('should return str argument if longer than given length', () => {
  expect(zeroPad('long', 1)).toEqual('long')
})

it('should coerce a number into a string', () => {
  expect(zeroPad(1, 2)).toEqual('01')
  expect(zeroPad(12, 2)).toEqual('12')
})
