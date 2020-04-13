import React from 'react';
import './App.css';
//import Person from './Class-component/Person';
import Employee from './Functional-component/Employee';
import Bird from './Class-component/State/Bird'
function App() {
  return (
    <div className="App">
      {/* <Person/> */}
      <Employee/>
      <Bird/>
      </div>
  );
}

export default App;
