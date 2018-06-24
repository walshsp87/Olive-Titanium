import React from 'react'
import PropTypes from 'prop-types';
import { FormControl, InputGroup, Button, Glyphicon } from 'react-bootstrap'

import { getValidation } from '../../validateInput'

export const InputField = ({
  onCancel,
  onChange,
  onSave,
  type,
  value,
}) => ([
  <FormControl
    key="input"
    step="0.01"
    type={ type }
    value={ value }
    onChange={ onChange }
  />,
  <InputGroup.Button key="buttons">
    <Button
      bsStyle="success"
      onClick={ onSave }
      disabled={getValidation(type, value) !== 'success'}
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

InputField.propTypes = {
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  onSave: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}