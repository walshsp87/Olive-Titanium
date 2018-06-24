import React from 'react'
import { Row, Col } from 'react-bootstrap'

import { EditableTable } from '../editableTable/'

export const CategoriesLayout = () => {
  const columns = [
    {
      title: 'Name',
      key: 'name',
      editable: true,
      inputType: 'text',
    },
    {
      title: 'Budget',
      key: 'maxValue',
      editable: true,
      inputType: 'number',
    },
  ]
  return (
    <Row>
      <Col xs={ 12 }>
        <EditableTable
          apiPath={ 'categories' }
          columns={ columns }
        />
      </Col>
    </Row>
  )
}
