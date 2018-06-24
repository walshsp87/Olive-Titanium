import React from 'react'
import { Row } from 'react-bootstrap'

import { GET } from '../../utilities/api'
import { zeroPad } from '../../utilities/zeroPad'
import { PrimaryRender } from './PrimaryRender'
import { CategoryChartGroup } from './CategoryChartGroup'

export class DashboardLayout extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      error: false,
      transactions: [],
      categories: [],
      primaryChart: {}
    }
  }

  componentWillMount() {
    this.getData()
  }

  render() {
    return (
      <div style={{ marginBottom: '64px' }}>
        <PrimaryRender primaryChart={ this.state.primaryChart }/>
        <Row>
        {
          this.state.categories.map(category => (
            <CategoryChartGroup
              key={ category.id }
              chartData={ this.generateSmallChartData(category, this.state.transactions) }/>  
          ))
        }
        </Row>
      </div>
    )
  }

  getData() {
    const date = new Date()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const props = [
      'categories',
      `transactions?date_like=${year}-${zeroPad(month, 2)}-??`,
    ]
    this.setState({
      loading: true
    })
    Promise.all(props.map(
        (prop) => GET(prop)
    ))
      .then((resArr) => {
        this.setState({
          loading: false,
          categories: resArr[0],
          transactions: resArr[1],
          primaryChart: this.getAllChartData(...resArr)
        })
      })
      .catch((err) => {
        this.setState({ error: true })
      })
  }

  generateSmallChartData(category, transactions) {
    return transactions
            .filter(transaction => transaction.catId == category.id)
            .reduce(
              this.reduceChartData,
              { name: category.name, total: 0, percent: 0, budget: category.maxValue }
            )
  }

  getAllChartData(categories, transactions) {
    return transactions.reduce(
      this.reduceChartData,
      { name: '', total: 0, percent: 0, budget: this.getTotalBudget(categories) }
    )
  }

  getTotalBudget(categories) {
    return categories
      .map(cat => parseFloat(cat.maxValue))
      .reduce((a, b) => a + b)
  }

  reduceChartData(acc, el) {
    const total = acc.total + parseFloat(el.value)
    const percent = Math.floor((total / acc.budget) * 100) || 0
    return {
      ...acc,
      total,
      percent,
    }
  }
}

