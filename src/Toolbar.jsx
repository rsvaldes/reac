import React from 'react';

class Toolbar extends React.Component{

  setClass = () => {
    let boxClass = '';
    if (this.props.messages.every((message) => message.selected)) {
      boxClass = 'fa fa-check-square-o';
    }
    else if (this.props.messages.some((message) => message.selected)) {
      boxClass = 'fa fa-minus-square-o';
    }
    else {
      boxClass = 'fa fa-square-o';
    }
    return boxClass;
  }

  render() {
    return (
      <div className="App">
        <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span className="badge badge">2</span>
              unread messages
            </p>
            <button onClick = {this.props.selectAll} className="btn btn-default">
              <i className={this.setClass()}></i>
            </button>
            <button className="btn btn-default">
              Mark As Read
            </button>
            <button className="btn btn-default">
              Mark As Unread
            </button>

            <select className="form-control label-select">
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <select className="form-control label-select">
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <button className="btn btn-default">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Toolbar;
