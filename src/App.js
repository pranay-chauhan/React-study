import React from 'react';
import './App.css';
//import Person from './Class-component/Person';
import Employee from './Functional-component/Employee';
import Bird from './Class-component/State/Bird';
import Employee1 from './Class-component/Event-handling/Employee1';
import Car from "./Class-component/setState/Car";
function App() {
  return (
    <div className="App">
      {/* <Person/> */}
      <Employee/>
      <Bird/>
      <Employee1/>
      <Car/>
      </div>
  );
}

export default App;
