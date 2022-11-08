import React, { Component } from 'react'

// type Props = {}

type State = {}

interface IUser {
    name: string;
    age: number;
}

interface IProps {
    userProps: IUser;
}


class ItemUserClass extends Component<IProps, State> {
//   state = {}

  render() {
    return (
        <div className="card" style={{width: "18rem"}}>
        <div className="card-body" >
            <h5 className="card-title">{this.props.userProps.name}</h5>
            <p className="card-text">{this.props.userProps.age}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    )
  }
}

export default ItemUserClass