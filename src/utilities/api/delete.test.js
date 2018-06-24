import { DELETE } from './delete'

it('should be a function', () => {
  expect(typeof DELETE).toEqual('function')
})

it('should have arity of 2', () => {
  expect(DELETE.length).toEqual(2)
})