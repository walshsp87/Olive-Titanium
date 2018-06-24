import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { PeriodSelector } from './PeriodSelector'

it('renders without crashing', () => {
  shallow(<PeriodSelector
            month="1"
            year="2018"
            filterName=""
            monthChange={() => {}} />)
})