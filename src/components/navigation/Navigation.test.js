import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { Navigation } from './Navigation'

it('renders without crashing', () => {
  shallow(<Navigation />)
})