import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col  items-center md:justify-normal justify-center gap-20 mt-10 min-w-[900px] md:p-0 p-4'>
      <h1 className='text-3xl'>Construction of half/ full adder using XOR and NAND gates and verification of its operation</h1>
      <h1 className='text-3xl'>Simulation</h1>
      <div>
       <Link to="/halfAdder/simulation1"> <button className='bg-blue-700 p-4 rounded-lg text-white mr-4 '>Half Adder</button></Link>
       <Link to=""> <button className='bg-blue-700 p-4 rounded-lg text-white '>Full Adder</button></Link>
      </div>
    </div>
  )
}

export default Home