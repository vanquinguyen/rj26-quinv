import React, { Component } from 'react'
import Logo3 from './3.jpg'
import './style.css'

type Props = {
  type: string,
  name: string,
  time: string,
  author: string
}

type State = {}

class BaiTap3 extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className="container">
          <div className="item">
            <div className="item__img">
                <img src={Logo3} alt="Logo" />
            </div>
            <p>{this.props.type}</p>
            <div className="item__content">
                <h3>{this.props.name}</h3>
                <p>{this.props.time} {'by'} <strong>{this.props.author}</strong></p>
            </div>
          </div>
      </div>
    )
  }
}

export default BaiTap3