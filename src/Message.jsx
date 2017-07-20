import React from 'react';


class Message extends React.Component {

  render() {
    return (
      <div className = {"row message" + (this.props.message.selected === true ? " selected" : " ") + (this.props.message.read === true ? " read" : " unread")} >
        <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input id="selectBox" type="checkbox" checked = {this.props.message.selected === true ? true : false} onChange={()=> this.props.selectMessage(this.props.message)}/>
          </div>
          <div className="col-xs-2">
            <i className={(this.props.message.starred === true ? "star fa fa-star" : "star fa fa-star-o")} onClick={()=> this.props.starMessage(this.props.message)}></i>
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
