import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { EditableRows } from './EditableRows'

it('renders without crashing', () => {
  shallow(<EditableRows data={ {table: []} } />)
})