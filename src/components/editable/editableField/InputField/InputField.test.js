import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { InputField } from './InputField'

it('renders without crashing', () => {
  shallow(<InputField />)
})