import React from 'react'
import PropTypes from 'prop-types';

import { Table, Button, Glyphicon } from 'react-bootstrap'
import './EditableTableRender.css'

import { EditableRows } from '../EditableRows'

export const EditableTableRender = ({
  addRow,
  columns,
  data,
  deleteRow,
  saveEditable
}) => (
  <div className="EditableTableRender">
    <Table responsive>
      <thead>
        <tr>
          { columns.map((column, index) => <th key={ index }>{ column.title || '' }</th>) }
          <th></th>
        </tr>
      </thead>
      <tbody>
        <EditableRows
          columns={ columns }
          data={ data }
          deleteRow={ deleteRow }
          saveEditable={ saveEditable }/>
      </tbody>
    </Table>
    <Button
      block
      bsStyle="success"
      onClick={ addRow }
    >
      <Glyphicon glyph="plus" />
    </Button>
  </div>
)

EditableTableRender.propTypes = {
  addRow: PropTypes.func,
  columns: PropTypes.array.isRequired,
  data: PropTypes.object,
  deleteRow: PropTypes.func,
  saveEditable: PropTypes.func,
}