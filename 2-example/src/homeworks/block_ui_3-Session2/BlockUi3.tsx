import React, { Component } from 'react'
import './style.css'



type Props = {
    color: string,
    icon: string,
    name: string,
    votes: string
}

type State = {}

class BlockUi3 extends Component<Props, State> {
  state = {}

  render() {
    return (
        <div className="containerr">
            <div className="item" style={{backgroundColor: this.props.color}}>
                <div className="icon">
                    <i className={this.props.icon}></i>
                </div>
                <div className="content ">
                    <p>{this.props.name}</p>
                    <p>{this.props.votes}</p>
                </div>
            </div>
        </div>    
           

        // <div class="facebook bg-facebook">
        //     <div class=" icon">
        //         <i class="fa-brands fa-facebook-f"></i>
        //     </div>
        //     <div class="content ">
        //         <p>facebook</p>
        //         <p style="font-size: 12px;">5,00,000 likes</p>
        //     </div>
        // </div>
    )
  }
}

export default BlockUi3