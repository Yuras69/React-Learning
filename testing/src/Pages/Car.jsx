import React from 'react';

const cars = [
  { name: 'Ora 5',imageUrl: "Ora03.png" ,price: 10000 },
  { name: 'Ora 6',imageUrl: "Ora05.png",  price: 12000 },
  { name: 'BMW', imageUrl: "BMW.png", price: 15000 },
];

const FilterCars= cars.filter(car => car.price > 11000)


const Car = () => (
    <div className="flex flex-col items-center justify-center">
    {FilterCars.map(car => (
      <div key={car.name}>
     <img src={car.imageUrl} alt={car.name} className="w-50 h-50 rounded-full" />
        <h2>{car.name}</h2>
        <p>Price: {car.price}</p>

      </div>
    ))}
  </div>
);

export default Car;

