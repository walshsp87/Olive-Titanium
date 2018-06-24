import React from 'react'
import PropTypes from 'prop-types';

import { SelectField } from './SelectField'
import { InputField } from './InputField'

export const EditableField = ({
  onCancel,
  onChange,
  onSave,
  selectData,
  type,
  value,
}) => (
  type === 'select' ?
    <SelectField
      onCancel={ onCancel }
      onChange={ onChange }
      onSave={ onSave }
      selectData={ selectData }
      value={ value } /> :
    <InputField 
      type={ type }
      value={ value }
      onCancel={ onCancel }
      onChange={ onChange }
      onSave={ onSave }
    />
)

EditableField.propTypes = {
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  onSave: PropTypes.func,
  selectData: PropTypes.array,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}