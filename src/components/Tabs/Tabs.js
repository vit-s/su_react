import React, {Component, PureComponent} from 'react'
import {dividerClasses}                  from "@mui/material"
import Layout                            from "../Layout"

class Tabs extends Component {

  state = {
    activeIdx: 0,
  }

  setActiveTabIdx = idx => (this.setState({activeIdx: idx}))

  render() {

    let tab = this.props.items[this.state.activeIdx]

    console.log(`Tabs =>> Render ${Date.now()}`)
    console.log(`props =>> `, this.props)
    return (
      <Layout>
        {this.props.items.map((item, idx) => (
          <li key={item.label}>
            <button
              type={`button`}
              onClick={() => this.setActiveTabIdx(idx)}
            >
              {item.label}
            </button>
          </li>
        ))}
        <div>
          <h2>{tab.label}</h2>
          <p>{tab.content}</p>
        </div>
      </Layout>
    )
  }
}

export default Tabs