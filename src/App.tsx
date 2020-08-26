import React, { useState, FC } from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './Form';
import List from './liste';
import { Car, Cars} from './Type';


const App: FC = () => {

  const firstArray: Array<Car> =[{
    id: 1,
    name: 'M3Ess',
    color: 'White',
    shape: 'Coupe'
  },
  {
    id: 2,
    name: '535D',
    color: 'Silbergrau',
    shape: 'Wagon'
  }]
  const[carList, setCarList] = useState(firstArray as Cars);
  
  const addCar = (car: Car) => {
    setCarList([...carList,
    {
      id: carList.length + 1,
      name: car.name,
      color: car.color,
      shape: car.shape
    }])
  }
  const deleteCar = (car: Car) => (e: any) => {
    setCarList(carList
      .filter(otherCar => otherCar !== car));
  }

  return (
    <div className="App">
      <header className="App-header">
       <div>
         
         <h1>This is a list of your cars!</h1>
         <Form addCar={addCar}/>
         <List carList={carList} deleteCar={deleteCar} />
       </div>
      </header>
    </div>
  );
}


export default App;
