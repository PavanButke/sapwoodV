import React from 'react';
import PropTypes from 'prop-types';

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      marks1:'',
      marks2:'',
      marks3:''

    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMarks1Change = this.handleMarks1Change.bind(this);
    this.handleMarks2Change = this.handleMarks2Change.bind(this);
    this.handleMarks3Change = this.handleMarks3Change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMarks1Change(e) {
    this.setState({marks1: e.target.value});
    
  }
  
  handleMarks2Change(e) {
    this.setState({marks2: e.target.value});
   
  }
  
  handleMarks3Change(e) {
 
    this.setState({marks3: e.target.value   });
  }



  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    this.props.addStudent(this.state.name, this.state.marks1 , this.state.marks2 , this.state.marks3) ;
    this.setState({
      name: '',
      marks1: '',
      marks2:'',
      marks3:''

    });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} class='Input' align-items='center' >
        <label padding='5rem' margin='10px'>
          Name:
         <input margin="10px" padding='10px' type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <br></br>
        <br></br>
        <label>
          Marks_1:
          <input type="number" value={this.state.marks1} onChange={this.handleMarks1Change} />
        </label>
        <br></br> 
        <br></br>
        
        <label>
          Marks_2:
          <input type="number" value={this.state.marks2} onChange={this.handleMarks2Change} />
        </label>
        <br></br>
        <br></br>
        <label>
          Marks_3:
          <input type="number" value={this.state.marks3} onChange={this.handleMarks3Change} />
        </label>
        <br></br>
        <br></br>
        <input margin-left='10px' type="submit" value="Submit" />
      </form>
    );
  }
}

StudentForm.propTypes = {
  addStudent: PropTypes.func.isRequired
};

export default StudentForm;
