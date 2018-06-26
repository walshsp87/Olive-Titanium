import React from 'react'
import 'jest-enzyme'
import { shallow, mount } from 'enzyme'
import App from './App'

import { BrowserRouter, Switch } from 'react-router-dom'
import { Grid } from 'react-bootstrap'
import { Navigation } from './components/navigation'

describe('<App />', () => {
  let mountedComponent
  let shallowComponent

  const component = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<App />)
    }
    return mountedComponent
  }

  const componentLite = () => {
    if (!shallowComponent) {
      shallowComponent = shallow(<App />)
    }
    return shallowComponent
  }

  beforeEach(() => {
    mountedComponent = undefined
    shallowComponent = undefined
  })

  it('renders without crashing', () => {
    expect(component())
  })
  
  it('renders lite without crashing', () => {
    expect(componentLite())
  })

  it('always locally renders two <div> elements', () => {
    expect(componentLite().find('div').length).toBe(2)
  })

  it('always renders <BrowserRouter>', () => {
    expect(component().find(BrowserRouter).length).toBe(1)
  })

  it('always renders <Navigation />', () => {
    expect(component().find(Navigation).length).toBe(1)
  })

  it('always renders <Switch>', () => {
    expect(component().find(Switch).length).toBe(1)
  })

  it('always renders <Grid>', () => {
    expect(componentLite().find(Grid).length).toBe(1)
  })
  
})
