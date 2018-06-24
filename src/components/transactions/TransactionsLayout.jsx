import React from 'react';
import { Row, Col } from 'react-bootstrap'

import { EditableTable } from '../editableTable/'
import { PeriodSelector } from './PeriodSelector'

import { zeroPad } from '../../utilities/zeroPad'

export class TransactionsLayout extends React.Component {
  constructor(props) {
    super(props)

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
        selectPath: 'categories' 
      }
    ]
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    this.state = {
      columns,
      currMonth: month,
      currYear: year,
      dateFilter: `${year}-${zeroPad(month, 2)}-??`
    }
  }
  render() {
    return (
      <Row>
        <Col xs={ 12 }>
          <PeriodSelector 
            filterName={ this.state.dateFilter }
            month={ this.state.currMonth }
            monthChange={ this.monthChange.bind(this) }
            year={ this.state.currYear }/>
          <EditableTable
            apiPath={ 'transactions' }
            apiDateFilter={ this.state.dateFilter }
            columns={ this.state.columns }
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
