import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import App from './App'

it('renders without crashing', () => {
  shallow(<App />)
})