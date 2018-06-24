import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { Editable } from './Editable'

it('renders without crashing', () => {
  shallow(<Editable>child</Editable>)
})