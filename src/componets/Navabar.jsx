import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.jpg";
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import Modal from './Modal';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='min-w-[999px] border-b-4 border-red-700'>
      <nav className='flex items-center justify-between '>
        <div className='flex items-center gap-12'>
          <GiHamburgerMenu size={70} className='cursor-pointer px-4 border border-gray-300' onClick={handleMenuToggle} />
          <Link to="/"><img src={logo} alt='logo' width={100} /></Link>
        </div>
        <ul className={`flex flex-col text-2xl font-semibold gap-2 bg-gray-100 absolute top-16 left-0 p-4 text-blue-700 ${menuOpen ? 'block' : 'hidden'} z-30 w-48 m-6 mx-3 shadow-2xl`}>
          <Link to="#" onClick={() => handleActive("")}><li className='p-1 hover:underline'>Aim</li></Link>
          <Link to="#" onClick={() => handleActive("")}><li className='p-1 hover:underline'>Theory</li></Link>
          <Link to="#" onClick={() => handleActive("")}><li className='p-1 hover:underline'>Pretest</li></Link>
          <Link to="#" onClick={() => handleActive("")}><li className='p-1 hover:underline'>Procedure</li></Link>
          <Link to="#" onClick={() => handleActive("")}><li className='p-1 hover:underline'>Simulation</li></Link>
          <Link to="#" onClick={() => handleActive("")}><li className='p-1 hover:underline'>Posttest</li></Link>
          <Link to="#" onClick={() => handleActive("")}><li className='p-1 hover:underline'>References</li></Link>
          <Link to="#" onClick={() => handleActive("")}><li className='p-1 hover:underline'>Feedback</li></Link>
        </ul>
        <div>
          <button className='bg-slate-600 px-3 py-1 m-2 text-white' onClick={handleOpenModal}>Rate Me</button>
          <button className='bg-slate-600 px-3 py-1 m-2 text-white'>Report a bug</button>
        </div>
        <Modal show={showModal} onClose={handleCloseModal} >
          <div className='h-full relative'>
            <div className=''>
              <p className='absolute -top-[100px] right-0 text-4xl cursor-pointer' onClick={handleCloseModal}>x</p>
              <StarRating />
            </div>
          </div>
        </Modal>
      </nav>
    </header>
  );
};

export default Navbar;
