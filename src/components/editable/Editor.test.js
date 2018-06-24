import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { Editor } from './Editor'

it('renders without crashing', () => {
  shallow(<Editor />)
})