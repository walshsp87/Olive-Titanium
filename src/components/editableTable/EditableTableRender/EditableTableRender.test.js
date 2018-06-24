import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { EditableTableRender } from './EditableTableRender'

it('renders without crashing', () => {
  shallow(<EditableTableRender columns={[]} />)
})