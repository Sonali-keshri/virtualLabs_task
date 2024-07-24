import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Tabs = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const handleActive = (path) => {
    setActive(path);
  };

  return (
    <div className='flex border border-black min-w-[999px]'>
      <Link to="/halfAdder/simulation1">
        <p
          className={`cursor-pointer p-4 ${active === '/halfAdder/simulation1' ? 'bg-blue-500 text-white' : 'bg-slate-300 hover:bg-gray-200'}`}
          onClick={() => handleActive('/halfAdder/simulation1')}
        >
          Simulator 1
        </p>
      </Link>
      <Link to="/halfAdder/simulation2">
        <p
          className={`cursor-pointer p-4 ${active === '/halfAdder/simulation2' ? 'bg-blue-500 text-white' : 'bg-slate-300 hover:bg-gray-200'}`}
          onClick={() => handleActive('/halfAdder/simulation2')}
        >
          Simulator 2
        </p>
      </Link>
    </div>
  )
}

export default Tabs
