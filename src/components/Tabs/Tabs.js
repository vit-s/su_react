import React, {PureComponent} from 'react' // PureComponent works without re-rendering.
import Layout                            from "../Layout"

class Tabs extends PureComponent {

  state = {
    activeIdx: 0,
  }

  setActiveTabIdx = idx => (this.setState({activeIdx: idx}))

  render() {

    let tab = this.props.items[this.state.activeIdx]
    console.log(`Component  =>> OK`)

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