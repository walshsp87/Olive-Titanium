import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { CategoryChartGroup } from './CategoryChartGroup'

it('renders without crashing', () => {
  shallow(<CategoryChartGroup  chartData={{}} />)
})