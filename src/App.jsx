import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'

function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>

      <h1 className='text-6xl font-bold text-lime-600 text-center'>Coffeeeeee: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-4 mt-6 p-10 '>
        {
          coffees.map(coffee =>

            <CoffeeCard 
            coffee={coffee} 
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            ></CoffeeCard>)
        }
      </div>


    </div>
  )
}

export default App
