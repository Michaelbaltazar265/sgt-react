import React from 'react';
import HeaderTitle from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
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

  getAverageGrade() {
    let num = 0;
    if (this.state.grades.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < this.state.grades.length; i++) {
        num += this.state.grades[i].grade;
      }
      num = Math.round(num / this.state.grades.length);
      return num;

    }

  }

  render() {
    return (
      <div className="container">
        <HeaderTitle getNumber = { this.getAverageGrade()}/>
        <div className="row">
          <GradeTable grades={this.state.grades} />
        </div>
      </div>
    );
  }
}

export default App;
