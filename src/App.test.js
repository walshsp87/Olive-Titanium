import React from 'react'
import 'jest-enzyme'
import { shallow, mount } from 'enzyme'
import App from './App'

import { BrowserRouter, Switch } from 'react-router-dom'
import { Grid } from 'react-bootstrap'
import { Navigation } from './components/navigation'

describe('App', () => {
  let mountedApp
  let shallowApp

  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(<App />)
    }
    return mountedApp
  }

  const appLite = () => {
    if (!shallowApp) {
      shallowApp = shallow(<App />)
    }
    return shallowApp
  }

  beforeEach(() => {
    mountedApp = undefined
    shallowApp = undefined
  })

  it('renders without crashing', () => {
    shallow(<App />)
  })

  it('always renders two divs', () => {
    expect(appLite().find('div').length).toBe(2)
  })

  it('always renders BrowserRouter', () => {
    expect(app().find(BrowserRouter).length).toBe(1)
  })

  it('always renders Navigation', () => {
    expect(app().find(Navigation).length).toBe(1)
  })

  it('always renders Switch', () => {
    expect(app().find(Switch).length).toBe(1)
  })

  it('always has Grid', () => {
    expect(appLite().find(Grid).length).toBe(1)
  })
  
})
