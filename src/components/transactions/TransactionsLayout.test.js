import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { TransactionsLayout } from './TransactionsLayout'

it('renders without crashing', () => {
  shallow(<TransactionsLayout />)
})