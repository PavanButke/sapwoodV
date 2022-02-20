import React from 'react';

import StudentTable from './StudentTable';
import NewStudent from './NewStudent';
import sortBy from "lodash/sortBy"

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:  [
        {
          "id": 1,
          "name": "Verne",
          "marks3": 2,
          "marks1": 34,
          "marks2": 34
        },
        {
          "id": 2,
          "name": "Otto",
          "marks1": 58,
          "marks2": 34,
          "marks3": 34,
        },
        {
          "id": 3,
          "name": "Findlay",
          "marks": 16
        },
        {
          "id": 4,
          "name": "Arlie",
          "marks1": 23,
          "marks2": 34,
          "marks3": 34
        },
        {
          "id": 5,
          "name": "Emery",
          "marks2": 40,
          "marks1": 34,
          "marks3": 34
        },
        {
          "id": 6,
          "name": "Gaile",
          "marks1": 91,
          "marks2": 34,
          "marks3": 34,
        },
       
        {
          "id": 8,
          "name": "Benedetto",
          "marks1": 62,
          "marks2": 34,
        },
        {
          "id": 9,
          "name": "Danna",
          "marks1": 18,
          "marks2": 34,
          "marks3": 34,
        },
        {
          "id": 10,
          "name": "Dorothee",
          "marks1": 34,
          "marks2": 34
        }
      ]
      ,
      sortdata: [ Math.max(this.data)]
      
    };

   

    this.fetchStudents = this.fetchStudents.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.sortStudents = this.sortStudents.bind(this);
  }

  fetchStudents(){
    fetch("https://my.api.mockaroo.com/students.json?key=5dde5e00")
    .then(result=>result.json())
    .then(items=>this.setState({data: items}))
  }
  
  addStudent(name, marks1 , marks2 , marks3){
    let student = {name, marks1 , marks2 , marks3}
    console.log(student);

    this.setState({
      data: [...this.state.data, student]
    },() => this.sortStudents());
  }

  sortStudents(){
    let sortdata = sortBy(this.state.data, "marks1 , marks2 , marks3").reverse();
    this.setState({sortdata})
  }

  componentDidMount() {
    this.sortStudents();
  }

  render() {
    return (
      <div>
        <NewStudent addStudent={this.addStudent} />
       
        
    

   

      </div>
    );
  }
}

Students.propTypes = {};

export default Students;
