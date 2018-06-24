import React from 'react'
import PropTypes from 'prop-types';
import './Editable.css'
import { Editor } from '../Editor'

export class Editable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editMode: false, value: '' }
  }

  render() {
    return (
      <span
        className={ this.testNoValue() ? 'Editable-no-val' : ''}
        onClick={ this.editClick.bind(this) }>
        { this.state.editMode ?
          <Editor
            onChange={ this.editorChange.bind(this) }
            onCancel={ this.onCancel.bind(this) }
            onSave={ this.onSave.bind(this) }
            selectData={ this.props.selectData }
            type={ this.props.type }
            value={ this.state.value }
          /> :
          this.props.children }
      </span>
    )
  }

  testNoValue() {
    return this.props.children === 'no value' && !this.state.editMode
  }

  onSave() {
    this.props.save(this.props.id, this.props.objKey, this.state.value)
    this.onCancel()
  }

  onCancel() {
    this.setState({editMode: false})
  }

  editorChange(e) {
    this.setState({ value: e.target.value });
  }

  editClick() {
    if (!this.state.editMode) {
      this.setState({ editMode: true, value: this.props.children })
    }
  }
}

Editable.propTypes = {
  children: PropTypes.string,
  save: PropTypes.func,
  type: PropTypes.string,
  id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  objKey: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  selectData: PropTypes.array
}
