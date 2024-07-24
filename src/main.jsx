import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componets/Home.jsx';
import Simulator1 from './componets/halfAdder/simulator/Simulator1.jsx';
import Simulator2 from './componets/halfAdder/simulator/Simulator2.jsx';
import HalfAdderSimulators from './componets/halfAdder/HalfAdderSimulators.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {
        path: "/",
        element:<Home/> ,
      },
      {
        path: "halfAdder",
        element: <HalfAdderSimulators />,
        children: [
          {
            path: "simulation1",
            element: <Simulator1 />
          },
          {
            path: "simulation2",
            element: <Simulator2 />
          }
        ]
      }
    ],
  },
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
  <RouterProvider router={router} />
  </React.StrictMode>,
)
