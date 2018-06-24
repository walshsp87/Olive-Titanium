import { POST } from './post'

it('should be a function', () => {
  expect(typeof POST).toEqual('function')
})

it('should have arity of 2', () => {
  expect(POST.length).toEqual(2)
})