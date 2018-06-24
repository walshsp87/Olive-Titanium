import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { EditableRow } from './EditableRow'

it('renders without crashing', () => {
  shallow(<EditableRow columns={ [] } />)
})