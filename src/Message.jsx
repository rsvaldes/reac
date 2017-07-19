import React from 'react';


class Message extends React.Component {

  render() {
    return (
      <div className = {"row message" + (this.props.message.selected === true ? "row message selected" : " ")} >
        <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input id="selectBox" type="checkbox" onChange={()=> this.props.selectMessage(this.props.message)}/>
          </div>
          <div className="col-xs-2">
            <i className={"star fa fa-star-o" + (this.props.message.starred === true ? "star fa fa-star" : " ")} onClick={()=> this.props.starMessage(this.props.message)}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">{this.props.message.labels.map((label,i) =>{return (
        <span className="label label-warning" key={i}>{label}</span>
      )})}
        <a href=''>
          {this.props.message.subject}
        </a>
      </div>
      </div>
    )
  }
}


export default Message
