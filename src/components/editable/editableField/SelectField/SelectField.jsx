import React from 'react'
import PropTypes from 'prop-types';
import { FormControl, InputGroup, Button, Glyphicon } from 'react-bootstrap'

export const SelectField = ({
  onCancel,
  onChange,
  onSave,
  selectData,
  value,
}) => ([
  <FormControl componentClass="select" key="select" value={ value } onChange={ onChange }>
    <option key={-1} value={-1}>Uncategorized</option>
    {
      selectData.map(el => (
        <option key={el.id} value={el.id}>{el.name}</option>
      ))
    }
  </FormControl>,
  <InputGroup.Button key="buttons">
    <Button
      bsStyle="success"
      onClick={ onSave }
    >
      <Glyphicon glyph="ok" />
    </Button>

    <Button
      bsStyle="danger"
      onClick={ onCancel }
    >
      <Glyphicon glyph="remove" />
    </Button>
  </InputGroup.Button>
])

SelectField.propTypes = {
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  onSave: PropTypes.func,
  selectData: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
