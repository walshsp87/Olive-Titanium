import { GET } from './get'

it('should be a function', () => {
  expect(typeof GET).toEqual('function')
})

it('should have arity of 1', () => {
  expect(GET.length).toEqual(1)
})