import React from 'react'
import PropTypes from 'prop-types';

export class PercentCircle extends React.Component {
  render() {
    const stopColor = this.getColorForPercent()
    const sizeObj = this.getSizeObj();
    const percent = this.props.percent || 0
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={ sizeObj.width } height={ sizeObj.height }>
        <linearGradient id={`g${this.props.percent}`} x1="0.5" y1="1" x2="0.5" y2="0">
            <stop offset="0%" stopOpacity="1" stopColor={ stopColor }/>
            <stop offset={percent + '%'} stopOpacity="1" stopColor={ stopColor }/>
            <stop offset={percent + '%'} stopOpacity="0" stopColor={ stopColor }/>
            <stop offset="100%" stopOpacity="0" stopColor={ stopColor }/>
        </linearGradient>
        <circle cx={ sizeObj.cx } cy={ sizeObj.cy } r={ sizeObj.r } stroke="black" strokeWidth="2" fill={`url(#g${this.props.percent})`}/>
      </svg>
    )
  }

  getColorForPercent() {
    const percent = this.props.percent
    if (percent <= 33) {
      return '#5cb85c'
    } else if (percent <= 64) {
      return '#5bc0de'
    } else if (percent < 100) {
      return '#f0ad4e'
    } else {
      return '#d9534f'
    }
  }

  getSizeObj() {
    const size = this.props.size
    if (size === 'large') {
      return {
        width: 200,
        height: 200,
        cx: 100,
        cy: 100,
        r: 96,
      }
    } else {
      return {
        width: 150,
        height: 150,
        cx: 75,
        cy: 75,
        r: 71
      }
    }
  }
}

PercentCircle.propTypes = {
  percent: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
  size: PropTypes.string
}
