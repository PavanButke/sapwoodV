import React, { Component } from 'react';
import Students from './component/Students';
import logo from './logo.svg';
import './App.css';
import Student from './components/student';

class App extends Component {
  render() {
    return (
      <div className='App' >
        <Student/>
        
        </div>
    );
  }
}

export default App;
