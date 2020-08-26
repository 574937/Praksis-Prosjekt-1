import React, { useState } from 'react';
import { Car, Cars } from './Type';

interface ListProps {
    carList: Array<Car>
    deleteCar: (car: Car) => (e: any) => void
}

const List = (props: ListProps) => {
    return (
        <ul>
            {props.carList.map((car) => (
                <div key={car.id}>
                    <li>
                        Name: {car.name} <br />
              Color: {car.color} <br />
              Shape: {car.shape}
                    </li>
                    <button onClick={props.deleteCar(car)}>Delete Car</button>
                    <br />
                </div>
            ))}
        </ul>
    )
}

export default List;