import React from 'react';

class HeaderTitle extends React.Component {
  render(props) {
    return (
      <div className="row justify-content-between justify-content-center">
        <div className="col-4">
          <h2>Student Grade Table</h2>
        </div>
        <div className="col-4">
          <h3>Average Grade<span className="badge badge-secondary">{this.props.getNumber} </span></h3>
        </div>
      </div>
    );
  }

}

export default HeaderTitle;
