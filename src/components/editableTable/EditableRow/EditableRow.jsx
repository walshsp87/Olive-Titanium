import React from 'react'
import PropTypes from 'prop-types'
import './EditableRow.css'
import { Button, Glyphicon } from 'react-bootstrap'
import { Editable } from '../../editable/Editable'

export const EditableRow = ({columns, data, deleteRow, row, saveEditable}) => {
  const onClickDelete = () => {
    deleteRow(row.id)
  }

  return (
    <tr>
      { columns.map(columnMap(row, data, saveEditable)) }
      <td className="EditableRow-btnCol">
        <Button bsStyle="danger" block onClick={ onClickDelete }><Glyphicon glyph="trash" /></Button>
      </td>
    </tr>
  )
}

EditableRow.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.object,
  deleteRow: PropTypes.func,
  row: PropTypes.object,
  saveEditable: PropTypes.func,
}
  
function columnMap(row, data, save) {
  return (column) => {
    return createEditableField(column, save, row, data)
  }
}

function createEditableField(
  column,
  saveEditable,
  row,
  data
) {
  const value = row[column.key] || 'no value'
  return (
    <td className="EditableRow-editable EditableRow-cell" key={ column.key }>
      <Editable
        save={ saveEditable }
        type={ column.inputType }
        id={ row.id }
        objKey={column.key}
        selectData={ data[column.key] }
      >
        { 
          column.inputType === 'select' ?
            getSelectValue(data[column.key], value) :
            value
        }
      </Editable>
    </td>
  )
}

function getSelectValue(selectData, id) {
  try {
    return selectData
      .filter(el => el.id == id)[0].name
  } catch (e) {
    return "Uncategorized"
  }
}
