import React from 'react'
import Tabs from '../Tabs'
import { Outlet } from 'react-router-dom'
import Simulator1 from './simulator/Simulator1'

const HalfAdderSimulators = () => {
  return (
    <>
    <Tabs/>
    {/* <Simulator1/> */}
    <Outlet/>
    </>
  )
}

export default HalfAdderSimulators