import React, { useState, useEffect } from 'react'
import './App.css'
import Listado from './Listado'

import axios from 'axios';

function App() {


   const [fondoClaro, setFondo] = useState(true);

  return (
    <>
  <div  className={fondoClaro ? "modo-claro" : "modo-oscuro"}>
       <Listado fondoClaro={fondoClaro} setFondo={setFondo} ></Listado>

</div>

     
    </>
  )
}

export default App