import React from 'react'
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap'
import './CategoryChartGroup.css'

import { PercentCircle } from '../../graph/PercentCircle'

export const CategoryChartGroup = ({chartData}) => (
  <Col xs={ 12 } sm={ 4 } className="CategoryChartGroup">
    <h3 className="CategoryChartGroup-title">{ chartData.name }</h3>
    <PercentCircle percent={chartData.percent} />
    <h5 className="CategoryChartGroup-percent">{ chartData.percent || 0 }%</h5>
  </Col> 
)

CategoryChartGroup.propTypes = {
  chartData: PropTypes.object.isRequired
}