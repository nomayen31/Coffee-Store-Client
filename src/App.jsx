import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees , setCoffees] = useState(loadedCoffees);
  console.log(coffees);


  return (
    <>
      <h1 className="text-3xl font-bold text-purple-600">
        Hot Cold Coffee
      </h1>
      <div className='grid lg:grid-cols-2 gap-10'>
      {
        coffees.map(coffee => <CoffeeCard 
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>)
      }
      </div>

    </>
  )
}

export default App
