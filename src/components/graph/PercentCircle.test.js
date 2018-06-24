import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { PercentCircle } from './PercentCircle'

it('renders without crashing', () => {
  shallow(<PercentCircle percent="0" />)
})