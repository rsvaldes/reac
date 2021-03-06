import React from 'react';

class Toolbar extends React.Component{

  

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
              <i className={(this.props.messages.every((message) => message.selected)) ? 'fa fa-check-square-o' : (this.props.messages.some((message) => message.selected)) ? 'fa fa-minus-square-o' : 'fa fa-square-o' }></i>
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
