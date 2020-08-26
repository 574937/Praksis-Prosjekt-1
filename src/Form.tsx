import React, { useState, FC } from 'react';
import { Car } from './Type';

interface FormProps {
    addCar: (car: Car)=> void

}

const Form = (props: FormProps) => {
    const [car, setCar] = useState({
        name: '',
        color: '',
        shape: '',
    });

    const handleChange = (e: {target: { value: any; name: any; }; }) => {
        const value = e.target.value;
        setCar({
            ...car, [e.target.name]: value
        })
        return;
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        props.addCar(
            {
                name: car.name,
                color: car.color,
                shape: car.shape
            });
        setCar({
            name: '',
            color: '',
            shape: ''
        });
}

    return (
        <form onSubmit={handleSubmit}>
            <label>What is the name of the car?</label>
            <input
                name='name'
                type='text'
                value={car.name}
                autoComplete='off'
                onChange={handleChange} />
            <br/>

            <label>What color is the car?</label>
            <input
                name='color'
                type='text'
                value={car.color}
                autoComplete='off'
                onChange={handleChange} />
            <br/>

            <label>What is the shape of the car?</label>
            <input
                name='shape'
                type='text'
                value={car.shape}
                autoComplete='off'
                onChange={handleChange} />
            <br/>

            <button>Insert this car to your garage</button>
        </form>
    )
}

export default Form;
