import React, { Component } from "react";
import Logo1 from "./1.jpg";
import "./style.css";

type Props = {
  title: string;
  name: string;
  product: string;
  gen: string;
  sex: string;
};

type State = {};

// interface IProps {

// }

// interface Props {
//   Props: IProps
// }

class BaiTap1 extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="BaiTap1">
          <img src={Logo1} alt="" />
          <div className="content">
            <h1>{this.props.title}</h1>
            <p>{this.props.name}</p>
            <p>{this.props.product}</p>
            <p>{this.props.gen}</p>
            <p>{this.props.sex}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BaiTap1;
