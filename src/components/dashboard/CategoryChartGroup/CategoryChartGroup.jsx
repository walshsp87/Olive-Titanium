import React from 'react'
import PropTypes from 'prop-types';
import { Col, Tooltip, OverlayTrigger } from 'react-bootstrap'
import './CategoryChartGroup.css'

import { PercentCircle } from '../../graph/PercentCircle'

export const CategoryChartGroup = ({chartData}) => (
  
  <Col xs={ 12 } sm={ 4 } className="CategoryChartGroup">
    <OverlayTrigger
      placement="bottom"
      overlay={tooltip(chartData)}
      delayHide={ 150 }
    >
      <h3 className="CategoryChartGroup-title">{ chartData.name }</h3>
    </OverlayTrigger>
    <PercentCircle percent={chartData.percent} />
    <h5 className="CategoryChartGroup-percent">{ chartData.percent || 0 }%</h5>
  </Col>
)

CategoryChartGroup.propTypes = {
  chartData: PropTypes.object.isRequired
}

function tooltip({name, total, budget}) {
  return (
    <Tooltip id={ `tooltip-${name}`}>
      {`$${total} / $${budget}`}
    </Tooltip>
  )
}
