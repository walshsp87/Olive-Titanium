import React from 'react'
import PropTypes from 'prop-types'

import { EditableRow } from '../EditableRow'

export const EditableRows = ({columns, data, deleteRow, saveEditable}) => (
  data.table.map(datum => (
    <EditableRow
      key={ datum.id }
      columns={ columns }
      row={ datum }
      data={ data }
      deleteRow={ deleteRow }
      saveEditable={ saveEditable } />  
  ))
)

EditableRows.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.object,
  deleteRow: PropTypes.func,
  saveEditable: PropTypes.func,
}