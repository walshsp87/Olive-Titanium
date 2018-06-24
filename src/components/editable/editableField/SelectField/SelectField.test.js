import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { SelectField } from './SelectField'

it('renders without crashing', () => {
  shallow(<SelectField selectData={ [] } />)
})