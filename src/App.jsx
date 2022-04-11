import React from "react"
import './App.scss'
import Navbar from './component/navbar'
import Monoalphabetic from './component/monoalphabetic'
import Rsa from './component/rsa'
import Rail_fence from './component/Rail_fence'
import Shift_ciper from './component/shift_ciper'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>       
          <Route exact path="/" >
            <Monoalphabetic/>
          </Route>
      <Rsa/>
      <Shift_ciper/>
      <Rail_fence/>
    </>
  )
}

export default App
