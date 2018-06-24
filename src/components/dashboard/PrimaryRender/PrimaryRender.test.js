import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { PrimaryRender } from './PrimaryRender'

it('renders without crashing', () => {
  shallow(<PrimaryRender primaryChart={{}} />)
})