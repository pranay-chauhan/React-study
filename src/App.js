import React from 'react';
import './App.css';
//import Person from './Class-component/Person';
//import Employee from './Functional-component/Employee';
//import Bird from './Class-component/State/Bird';
//import Employee1 from './Class-component/Event-handling/Employee1';
//import Car from "./Class-component/setState/Car";
// import Shop from "./Children/Shop";
// import Fruit from './Table/Fruit';
// import Error from './Error-Boundries/Error';
// import FoodItem from './Error-Boundries/FoodItem';
// import Bird from './Class-component/Bird';
// import Car from './Functional-component/Car';
//import Employee from './Table/Employee-image';
import Fruit from './Class-component/State/Fruit';
import Student from './Table/Student';
import Flower from './Functional-component/Flower'
function App() {
  return (
    <div className="App">
      {/* <Person/> */}
      {/* <Employee/>
      <Bird/>
      <Employee1/>
      <Car/>
      <Shop name="Villege HyperMarket" location="HSR">Please Visit our HyperMarket</Shop>
      <Fruit/>
        <Error>
          <FoodItem item ='Rice'/>
        </Error>
        <Error>
          <FoodItem item ='Pulses'/>
        </Error>
        <Error>
          <FoodItem item ='Other'/>
        </Error>
        <Error>
          <FoodItem item ='Jowar'/>
        </Error> */}
        {/* <Bird name="Sparrow" color="white"/>
        <Bird/>
        <Bird/>
        <Car/> */}
        {/* <Employee/> */}
        {/* <Fruit/>
        <Student/> */}
        <Flower name="Rose" color='Pink'/>
        <Flower name='Lotus' color='Blue'>I live in Water</Flower>
      </div>
  );
}

export default App;
