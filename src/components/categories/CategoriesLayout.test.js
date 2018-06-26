import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'
import { CategoriesLayout } from './CategoriesLayout'

import { Row, Col } from 'react-bootstrap'
import { EditableTable } from '../editableTable/'

describe('<CategoriesLayout />', () => {
  /**
   * Simple component, so only shallow rendering needed.
   * Also has direct async child which can lead to very brittle testing,
   *   if component is mounted fully at this point.
   */

  let shallowComponent

  const componentLite = () => {
    if (!shallowComponent) {
      shallowComponent = shallow(<CategoriesLayout />)
    }
    return shallowComponent
  }

  beforeEach(() => {
    shallowComponent = undefined
  })

  it('renders lite without crashing', () => {
    expect(componentLite())
  })

  it('always renders 1 <Row>', () => {
    expect(componentLite().find(Row).length).toBe(1)
  })

  it('always renders 1 <Col>', () => {
    expect(componentLite().find(Col).length).toBe(1)
  })
  
  it('always renders <Col> at full width', () => {
    const component = componentLite()
    const props = component.find(Row).props().children.props
    expect(props.xs).toBe(12)

    /**
     * react-bootstrap always adds:
     * "children"
     * "bsClass"
     * "componentClass"
     * to Col component
     */
    expect(Object.keys(props).length).toBe(4)
  })

  it('always renders <EditablePath />', () => {
    expect(componentLite().find(EditableTable).length).toBe(1)
  })

  describe('<EditablePath /> call', () => {
    const props = componentLite().find(EditableTable).props()

    it('always passes 2 props', () => {
      expect(Object.keys(props).length).toBe(2)
    })
  
    it('always passes a string to apiPath', () => {
      expect(typeof props.apiPath).toBe('string')
    })

    it('always passes an array to columns', () => {
      expect(Array.isArray(props.columns)).toBe(true)
    })
  
  })
})
