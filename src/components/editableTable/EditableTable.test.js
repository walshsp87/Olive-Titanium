import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { EditableTable } from './EditableTable'

it('renders without crashing', () => {
  shallow(<EditableTable columns={[]} apiPath="test" />)
})