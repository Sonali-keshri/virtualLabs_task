import { useState } from 'react'

import './App.css'
import Navabar from './componets/Navabar'
import { Outlet } from 'react-router-dom';
import Tabs from './componets/Tabs';


function App() {


  return (
    <div className=''>
      <Navabar />
      <div className='mt-6  h-[999px]' >
        <Outlet />
      </div>
    </div>
  )
}

export default App
