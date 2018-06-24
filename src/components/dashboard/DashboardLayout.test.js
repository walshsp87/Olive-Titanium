import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { DashboardLayout } from './DashboardLayout'

it('renders without crashing', () => {
  shallow(<DashboardLayout />)
})