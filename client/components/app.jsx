import React from 'react';
import HeaderTitle from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grade => {
        this.setState({ grades: grade });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <HeaderTitle text="Studdent Grade Table" />
          <GradeTable grades={this.state.grades} />
        </div>
      </div>
    );
  }
}

export default App;
