import React, { useEffect, useState } from 'react';
import gate from "../../../assets/gate.png";
import switchOn from "../../../assets/switchon.png";
import switchOff from "../../../assets/switchoff.png";
import ledOn from "../../../assets/LedOn.png";

const Simulator1 = () => {
  const [switches, setSwitches] = useState({
    supply: false,
    inpA: false,
    inpB: false
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };


  const [data, setData] = useState([]);

  const handleSwitch = (flag) => {
    if (flag === "supply") {
      setSwitches(prev => ({ ...prev, supply: !prev.supply }));
    } else if (switches.supply === true && flag === "inputA") {
      setSwitches(prev => ({ ...prev, inpA: !prev.inpA }));
    } else if (switches.supply === true && flag === "inputB") {
      setSwitches(prev => ({ ...prev, inpB: !prev.inpB }));
    } else {
      alert("Turn on the supply");
    }
  };

  const handleLed = () => {
    if (switches.supply) {
      if (switches.inpA && !switches.inpB || !switches.inpA && switches.inpB) {
        return (
          <div>
            <img src={ledOn} alt='ledOn' width={40} className='absolute md:top-[334px] top-[313px] md:right-[492px] right-[256px]' />
          </div>
        );
      } else if (switches.inpA && switches.inpB) {
        return (
          <div>
            <img src={ledOn} alt='ledOn' width={40} className='absolute md:top-[333px] top-[311px] md:right-[400px] right-[165px]' />
          </div>
        );
      }
    }
  };

  const handleReset = () => {
    setSwitches({
      supply: false,
      inpA: false,
      inpB: false
    });
    setData([]);
  };

  const handleAdd = () => {
    if (switches.supply) {
      if (switches.inpA && !switches.inpB) {
        const body = {
          inpAval: 1,
          inpBval: 0,
          sum: 1,
          carry: 0,
        };
        setData(prev => [...prev, body]);
      } else if (switches.inpB && !switches.inpA) {
        const body = {
          inpAval: 0,
          inpBval: 1,
          sum: 1,
          carry: 0,
        };
        setData(prev => [...prev, body]);
      } else if (switches.inpA && switches.inpB) {
        const body = {
          inpAval: 1,
          inpBval: 1,
          sum: 0,
          carry: 1,
        };
        setData(prev => [...prev, body]);
      } else {
        const body = {
          inpAval: 0,
          inpBval: 0,
          sum: 0,
          carry: 0,
        };
        setData(prev => [...prev, body]);
      }
    }
  };

  useEffect(() => {
    console.log("data: ", data);
  }, [data]);

  return (
    <div className='bg-[#ECEFF4] min-w-[999px]  md:inline-block blockw-full  p-4 md:p-8'>
      <div className='overflow-x-auto'>
        <div>
          <div className='relative p-4 w-full md:w-1/2 text-white'>
            <button className='bg-blue-700 p-2 md:p-4 px-6 ' onClick={handleMenuToggle} >Instructions</button>
            <ol className={`bg-cyan-500 p-2 absolute z-10 ${menuOpen ? "block":"hidden"} `} >
              <li>1. Connect the Supply (+5V) to the IC.</li>
              <li>2. Press the Switches for input "A" and "B". <br /> The switch is ON state is and the switch is OFF state is </li>
              <li>3. The SUM LED glows if any one switch is ON out of both the switches else it won't glow. <br /> And the CARRY LED glows if both switches are ON else it will remain OFF in other 3 states. </li>
              <li>4. Press "ADD" button to add your inputs and outputs in the given table.</li>
              <li>5. Repeat steps 3 & 4 for the next state of inputs and their corresponding outputs.</li>
              <li>6. Press the "PRINT" button after completing your simulation to get your results.</li>
              <li>7. Press the "RESET" button whenever you want to refresh your Simulator.</li>
            </ol>
          </div>
          <div className='p-4 border border-black m-4'>

            <div>
              <h1 className='bg-blue-700 w-fit p-3'>Experiment to perform logic of half adder on kit</h1>
              <div className='relative'>
                <div className='absolute left-4 md:left-20 top-12'>
                  {switches.supply ? (<img src={switchOn} alt='switchOn' width={60} onClick={() => handleSwitch("supply")} />) :
                    (<img src={switchOff} alt='switchOn' width={60} onClick={() => handleSwitch("supply")} />)}
                  <small className='text-center'>Supply</small>
                </div>
                <div className='absolute left-4 md:left-20 md:top-64 top-60'>
                  {switches.inpA ? (<img src={switchOn} alt='switchOn' width={60} onClick={() => handleSwitch("inputA")} />) :
                    (<img src={switchOff} alt='switchOn' width={60} onClick={() => handleSwitch("inputA")} />)}
                  <small className='text-center'>Input A</small>
                </div>
                <div className='absolute left-4 md:left-20 top-[320px] md:top-[340px]'>
                  {switches.inpB ? (<img src={switchOn} alt='switchOn' width={60} onClick={() => handleSwitch("inputB")} />) :
                    (<img src={switchOff} alt='switchOn' width={60} onClick={() => handleSwitch("inputB")} />)}
                  <small className='text-center'>Input B</small>
                </div>

                {handleLed()}
                <img src={gate} alt='gate' className='px-16 md:px-32 py-10' />
              </div>
            </div>

            <div className='w-full md:w-2/6 mx-auto h-1/2'>
              <div className='p-4 flex  gap-4'>
                <button className='px-8 bg-green-500 ' onClick={handleAdd}>ADD</button>
                <button className='px-8 bg-green-500 ' onClick={handleReset}>RESET</button>
              </div>
              <div className='border-2 border-blue-700'>
                <div className='p-4 flex justify-between bg-blue-700'>
                  <h1 className='text-xl md:text-3xl'>Truth Table</h1>
                  <button className='px-8 bg-green-500'>Print</button>
                </div>
                <table className='border border-black w-full'>
                  <thead>
                    <tr>
                      <th className='border border-black px-4'>Serial No.</th>
                      <th className='border border-black px-4'>Input A</th>
                      <th className='border border-black px-4'>Input B</th>
                      <th className='border border-black px-4'>Sum</th>
                      <th className='border border-black px-4'>Carry</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((item, idx) => {
                      return (
                        <tr className='text-center border border-black' key={idx}>
                          <td className='border border-black'>{idx + 1}</td>
                          <td className='border border-black'>{item.inpAval}</td>
                          <td className='border border-black'>{item.inpBval}</td>
                          <td className='border border-black'>{item.sum}</td>
                          <td className='border border-black'>{item.carry}</td>
                        </tr>
                      );
                    })}
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

export default Simulator1;
