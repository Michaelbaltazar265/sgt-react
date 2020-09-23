import React from 'react';

function GradeTable(props) {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Student Name</th>
          <th scope="col">Course</th>
          <th scope="col">Grade</th>
        </tr>
      </thead>
      <tbody>
        {
          props.grades.map(gradeObject => {
            return (
              <tr key={gradeObject.id}>
                <td>{gradeObject.name} </td>
                <td> {gradeObject.course} </td>
                <td> {gradeObject.grade} </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>

  );
}

export default GradeTable;
