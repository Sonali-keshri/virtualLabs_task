import React, { useState } from 'react';
import gate from "../../../assets/halfAdder/simulator2/gate.png";

const Simulator2 = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-[#ECEFF4] min-w-[900px]  p-4 md:p-8'>
      <div className='overflow-x-auto'>
        <div className=' border-gray-300 border-2 '>
          <div className='relative p-4 w-full md:w-1/2 text-white '>
            <button className='bg-blue-700 p-2 md:p-4 px-6 ' onClick={handleMenuToggle} >Instructions</button>
            <ol className={`bg-cyan-500 p-2 absolute z-10 ${menuOpen ? "block" : "hidden"} `} >
              <li>1. Connect the Supply (+5V) to the IC.</li>
              <li>2. Press the Switches for input "A" and "B". <br /> The switch is ON state is and the switch is OFF state is </li>
              <li>3. The SUM LED glows if any one switch is ON out of both the switches else it won't glow. <br /> And the CARRY LED glows if both switches are ON else it will remain OFF in other 3 states. </li>
              <li>4. Press "ADD" button to add your inputs and outputs in the given table.</li>
              <li>5. Repeat steps 3 & 4 for the next state of inputs and their corresponding outputs.</li>
              <li>6. Press the "PRINT" button after completing your simulation to get your results.</li>
              <li>7. Press the "RESET" button whenever you want to refresh your Simulator.</li>
            </ol>
          </div>
          <div className='border border-black m-4'>
            <p className='bg-blue-700 text-white text-center w-2/6 mt-2 p-3'>Verification of truth table for HALF ADDER</p>
            <div className='p-4 relative flex justify-center'>
              <input className='w-28 absolute top-[100px] left-48 border border-black' />
              <input className='w-28 absolute top-[190px] left-48 border border-black' />
              <input className='w-28 absolute top-[100px] right-48 border border-black' />
              <input className='w-28 absolute top-[190px] right-48 border border-black' />

              <button className='px-8 bg-green-500 absolute top-[200px] left-[520px] border border-black'>Circuit</button>
              <button className='px-8 bg-green-500 absolute top-[230px] right-[195px]'>Check</button>
              <img src={gate} alt='gate' className='px-32 py-10 w-[900px]' />
            </div>
            <div className='w-full md:w-2/6 mx-auto'>
              <div className='p-4 flex gap-4'>
                <button className='px-8 bg-green-500'>ADD</button>
                <button className='px-8 bg-green-500'>RESET</button>
              </div>
              <div className='border-2 border-blue-700'>
                <div className='p-4 flex justify-between bg-blue-700'>
                  <h1 className='text-3xl'>Truth Table</h1>
                  <button className='px-8 bg-green-500'>Print</button>
                </div>
                <table className='h-[200px] overflow-auto border border-black w-full'>
                  <thead>
                    <tr className='border border-black'>
                      <th className='border border-black px-4'>Serial No.</th>
                      <th className='border border-black px-4'>Input A</th>
                      <th className='border border-black px-4'>Input B</th>
                      <th className='border border-black px-4'>Sum</th>
                      <th className='border border-black px-4'>Carry</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border border-black'>
                      <td className='border border-black px-4'>vshkv</td>
                      <td className='border border-black px-4'>vshkv</td>
                      <td className='border border-black px-4'>vshkv</td>
                      <td className='border border-black px-4'>vshkv</td>
                      <td className='border border-black px-4'>vshkv</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Simulator2;
