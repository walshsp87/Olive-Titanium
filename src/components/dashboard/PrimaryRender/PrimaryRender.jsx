import React from 'react'
import PropTypes from 'prop-types';
import { Row, Col, Jumbotron } from 'react-bootstrap'
import './PrimaryRender.css'

import { PercentCircle } from '../../graph/PercentCircle'

export const PrimaryRender = ({ primaryChart }) => (
  <Jumbotron>
  <Row>
    <Col xs={ 12 }>
      <h2 className="PrimaryRender-title">{ primaryChart.name || 'All'}</h2>
    </Col>
    <Col xs={ 12 } smOffset={ 2 } sm={ 4 } style={{ textAlign: 'center' }}>
      <PercentCircle percent={ primaryChart.percent } size="large" />
    </Col>
    <Col xs={ 12 } sm={ 4 }>
      <h4 className="PrimaryRender-stat">$ { Math.floor(primaryChart.total * 100) / 100 || 0 } Spent</h4>
      <h4 className="PrimaryRender-stat">$ { (Math.floor((primaryChart.budget - primaryChart.total) * 100) / 100) || 0 } Remaining</h4>
      <h4 className="PrimaryRender-stat">$ { Math.floor(primaryChart.budget * 100) / 100 || 0 } Budget</h4>
    </Col>
  </Row>
  </Jumbotron>
)

PrimaryRender.propTypes = {
  primaryChart: PropTypes.object.isRequired
}