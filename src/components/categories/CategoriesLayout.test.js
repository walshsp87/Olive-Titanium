import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { CategoriesLayout } from './CategoriesLayout'

it('renders without crashing', () => {
  shallow(<CategoriesLayout />)
})