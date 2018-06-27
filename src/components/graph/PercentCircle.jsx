import React from 'react'
import PropTypes from 'prop-types';

import { getColorForPercent, getSizeObj } from './utils'

export const PercentCircle = ({percent = 0, size}) => {
  const stopColor = getColorForPercent(percent)
  const sizeObj = getSizeObj(size)

  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={ sizeObj.width } height={ sizeObj.height }>
      <linearGradient id={`g${percent}`} x1="0.5" y1="1" x2="0.5" y2="0">
          <stop offset="0%" stopOpacity="1" stopColor={ stopColor }/>
          <stop offset={percent + '%'} stopOpacity="1" stopColor={ stopColor }/>
          <stop offset={percent + '%'} stopOpacity="0" stopColor={ stopColor }/>
          <stop offset="100%" stopOpacity="0" stopColor={ stopColor }/>
      </linearGradient>
      <circle cx={ sizeObj.cx } cy={ sizeObj.cy } r={ sizeObj.r } stroke="black" strokeWidth="2" fill={ `url(#g${percent})` }/>
    </svg>
  )
}

PercentCircle.propTypes = {
  percent: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
  size: PropTypes.string
}
