import React from 'react';


import NewStudent from './NewStudent';
import sortBy from "lodash/sortBy"

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:  [
      ]
      
    };

   

 
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

Student.propTypes = {};

export default Student;
