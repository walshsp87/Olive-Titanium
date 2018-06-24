import React from 'react'
import PropTypes from 'prop-types';

import * as api from '../../utilities/api'
import { zeroPad } from '../../utilities/zeroPad'
import { EditableTableRender } from './EditableTableRender'

export class EditableTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        table: []
      },
      loading: true,
      error: false,
    }
  }

  render() {
    return <EditableTableRender
              addRow={ this.addRow(this.props.apiPath, this.props.columns).bind(this) }
              columns={ this.props.columns }
              data={ this.state.data }
              deleteRow={ this.deleteRow(this.props.apiPath).bind(this) }
              saveEditable={ this.saveEditable(this.props.apiPath).bind(this) }/>
  }

  componentWillMount() {
    this.getData(this.props.apiPath, 'table', this.props.apiDateFilter)
    this.props.columns.forEach(column => {
      if (column.selectPath) {
        this.getData(column.selectPath, column.key)
      }
    })
  }

  componentWillReceiveProps({apiDateFilter}) {
    if (this.props.apiDateFilter !== apiDateFilter) {
      this.getData(this.props.apiPath, 'table', apiDateFilter)
    }
  }

  saveEditable(path) {
    return (id, key, value) => {
      this.setState({ loading: true })
      if (typeof id === 'number') {
        const obj = {
          ...this.state.data.table.filter(datum => datum.id === id)[0],
          [key]: value,
        }
        this.patchEditable(path)(obj, id)
      } else {
        this.setState({ error: true })
      }
    }
  }

  getData(path, key, dateFilter) {
    const fullPath = dateFilter ?
      `${path}?date_like=${dateFilter}`:
      path
    this.setState({ loading: true })
    api.GET(fullPath)
      .then(
        (res) => {
          this.setState({
            loading: false,
            data:{
              ...this.state.data,
              [key]: res.length > 0 ? res : []
            }
          })
        },
        (err) => {
          this.setState({
            loading: false,
            error: true
          })
        }
      )
  }

  patchEditable(path) {
    return (obj, id) => {
      const data = this.state.data
      const index = data.table.findIndex(datum => datum.id === id)
      api.PATCH(path, obj)
        .then(
          (res) => {
            this.setState({
              loading: false,
              data: {
                ...data,
                table: [
                  ...data.table.slice(0, index),
                  res,
                  ...data.table.slice(index + 1),
                ]
              }
            })
          },
          (err) => {
            this.setState({ error: true })
          }
        )
    }
  }

  deleteRow(path) {
    return (id) => {
      const data = this.state.data
      const index = data.table.findIndex(datum => datum.id === id)
      api.DELETE(path, id)
        .then(
          (res) => {
            this.setState({
              data: {
                ...data,
                table: [
                  ...data.table.slice(0, index),
                  ...data.table.slice(index + 1)
                ]
              }
            })
          },
          (err) => {
            this.setState({ error: true })
          }
        )
    }
  }

  addRow(path, columns) {
    return () => {
      const data = this.state.data
      const obj = this.setAddValues(columns)
      api.POST(path, obj)
        .then(
          (res) => {
            this.setState({
              data: {
                ...data,
                table: [
                  ...data.table,
                  res,
                ]
              }
            })
          },
          (err) => {
            this.setState({ error: true })
          }
        )
    }
  }

  setAddValues(columns) {
    return columns.reduce((acc, { inputType, key }) => {
      let value;
      if (inputType === 'text') {
        value = ''
      } else if (inputType === 'number') {
        value = "0"
      } else if (inputType === 'date') {
        const date = new Date()
        const day = date.getDate()
        const month = String(date.getMonth() + 1)
        const year = date.getFullYear()
        value = `${year}-${zeroPad(month, 2)}-${day}`
      } else if (inputType === 'select') {
        value = -1
      }
      return {
        ...acc,
        [key]: value
      }
    }, {})
  }
}

EditableTable.propTypes = {
  columns: PropTypes.array.isRequired,
  apiPath: PropTypes.string.isRequired,
  apiDateFilter: PropTypes.string,
}