import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { EditableField } from './EditableField'

it('renders without crashing', () => {
  shallow(<EditableField />)
})