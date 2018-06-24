import { PATCH } from './patch'

it('should be a function', () => {
  expect(typeof PATCH).toEqual('function')
})

it('should have arity of 2', () => {
  expect(PATCH.length).toEqual(2)
})