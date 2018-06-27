import React from 'react';
import { Row, Col } from 'react-bootstrap'

import { EditableTable } from '../editableTable/'
import { PeriodSelector } from './PeriodSelector'

import APICONST from '../../static/apiConst'

export class TransactionsLayout extends React.Component {
  constructor(props) {
    super(props)

    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1

    this.state = {
      dateFilter: `${year}-${String(month).padStart(2, '0')}-??`
    }
  }
  render() {
    const columns = [
      {
        title: 'Date',
        key: 'date',
        editable: true,
        inputType: 'date',
      },
      {
        title: 'Name',
        key: 'name',
        editable: true,
        inputType: 'text',
      },
      {
        title: 'Amount',
        key: 'value',
        editable: true,
        inputType: 'number',
      },
      {
        title: 'Category',
        key: 'catId',
        editable: true,
        inputType: 'select',
        selectPath: APICONST.CATEGORIES 
      }
    ]

    return (
      <Row>
        <Col xs={ 12 }>
          <PeriodSelector 
            filterName={ this.state.dateFilter }
            monthChange={ this.monthChange.bind(this) } />
          <EditableTable
            apiPath={ APICONST.TRANSACTIONS }
            apiDateFilter={ this.state.dateFilter }
            columns={ columns }
          />
        </Col>
      </Row>
    )
  }

  monthChange(e) {
    this.setState({
      dateFilter: e.target.value
    })
  }
}
