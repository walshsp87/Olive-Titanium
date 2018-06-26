import React from 'react'
import 'jest-enzyme'
import { shallow, mount } from 'enzyme'
import { DashboardLayout } from './DashboardLayout'

import { Row, Col } from 'react-bootstrap'
import { PrimaryRender } from './PrimaryRender'
import { CategoryChartGroup } from './CategoryChartGroup';

describe('<DashboardLayout />', () => {
  let mountedComponent
  let shallowComponent

  const component = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<DashboardLayout />)
    }
    return mountedComponent
  }

  const componentLite = () => {
    if (!shallowComponent) {
      shallowComponent = shallow(<DashboardLayout />)
    }
    return shallowComponent
  }

  beforeEach(() => {
    mountedComponent = undefined
    shallowComponent = undefined
  })

  it('renders lite without crashing', () => {
    expect(componentLite())
  })

  it('renders without crashing', () => {
    expect(component())
  })

  describe('<div> wrapper', () => {
    it('always renders 1 <div> element', () => {
      expect(componentLite().find('div').length).toEqual(1)
    })
  
    it('always wraps the component in a div', () => {
      const div = componentLite().find('div').first()
      expect(div.children()).toEqual(componentLite().children())
    })
  })

  it('always renders <PrimaryRender />', () => {
    expect(component().find(PrimaryRender).length).toEqual(1)
  })

  it('always renders <Row>', () => {
    expect(componentLite().find(Row).length).toEqual(1)
  })

  describe('<CategoryChartGroup /> call', () => {
    const wrapper = componentLite()
    wrapper.setState({ categories: [{id: 1}, {id: 2}] })

    it('should have state.categories.length of 2', () => {
      expect(wrapper.state().categories.length).toEqual(2)
    })

    it('should render 2 <CategoryChartGroup /> components', () => {
      expect(wrapper.find(CategoryChartGroup).length).toEqual(2)
    })
    
  })
})
