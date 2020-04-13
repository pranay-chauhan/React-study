import React from 'react';
import './App.css';
//import Person from './Class-component/Person';
import Employee from './Functional-component/Employee';
import Bird from './Class-component/State/Bird';
import Employee1 from './Class-component/Event-handling/Employee1';
import Car from "./Class-component/setState/Car";
import Shop from "./Children/Shop";
function App() {
  return (
    <div className="App">
      {/* <Person/> */}
      <Employee/>
      <Bird/>
      <Employee1/>
      <Car/>
      <Shop name="Villege HyperMarket" location="HSR">Please Visit our HyperMarket</Shop>
      </div>
  );
}

export default App;
