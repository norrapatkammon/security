import React from "react"
import { Route, Switch } from "react-router-dom";
import './App.scss'
import Navbar from './component/navbar'
import Monoalphabetic from './component/monoalphabetic'
import Rsa from './component/rsa'
import Viginear_cipher from './component/viginear_cipher'
import Shift_ciper from './component/shift_ciper'

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Shift_ciper}/>
        <Route path="/shift_ciper" component={Shift_ciper}/>
        <Route path="/monoalphabetic" component={Monoalphabetic}/>
        <Route path="/Viginear_cipher" component={Viginear_cipher}/>
        <Route path="/rsa" component={Rsa}/>
      </Switch>    
    </>
  )
}

export default App
