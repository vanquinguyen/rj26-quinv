import React, { Component } from 'react'
import { AiFillStar } from 'react-icons/ai';
import './style.css'
import Logo2 from './2.jpg'

type Props = {
    store: string,
    product: string,
    feedback: string,
    price: string
}

type State = {}

class BaiTap2 extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className="container">
        <div className="item">
            <img src={Logo2} alt="TV" />
            <div className="content">
                <h4>{this.props.store}</h4>
                <h3>{this.props.product}</h3>
                <div className="icon">
                    <p><AiFillStar/></p>
                    <p><AiFillStar/></p>
                    <p><AiFillStar/></p>
                    <p><AiFillStar/></p>
                    <p><AiFillStar/></p>
                    <p>{this.props.feedback}</p>
                </div>
                <p>{this.props.price}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default BaiTap2