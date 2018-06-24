import React from 'react'
import PropTypes from 'prop-types';
import { FormGroup, InputGroup } from 'react-bootstrap'
import { getValidation } from './validateInput'

import { EditableField } from './editableField/EditableField'

export const Editor = ({
  onCancel,
  onChange,
  onSave,
  selectData,
  type,
  value,
}) => {
  return (
    <form onSubmit={ submit }>
      <FormGroup
        controlId="editor"
        validationState={ getValidation(type, value) }>

        <InputGroup>
          <EditableField 
            onCancel={ onCancel }
            onChange={ onChange }
            onSave={ onSave }
            selectData={ selectData }
            type={ type }
            value={ value } />
        </InputGroup>

      </FormGroup>
    </form>
  )

  function submit(e) {
    e.preventDefault()
    if (getValidation(type, value) === 'success') {
      onSave(e)
    }
  }
}

Editor.propTypes = {
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  onSave: PropTypes.func,
  selectData: PropTypes.array,
  type: PropTypes.string,
  value: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
}