import React from "react"
import { Route, Switch } from "react-router-dom";
import './App.scss'
import Navbar from './component/navbar'
import Monoalphabetic from './component/monoalphabetic'
import Rsa from './component/rsa'
import Rail_fence from './component/Rail_fence'
import Shift_ciper from './component/shift_ciper'

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Monoalphabetic}/>
        <Route path="/rsa" component={Rsa}/>
        <Route path="/shift_ciper" component={Shift_ciper}/>
        <Route path="/rail_fence" component={Rail_fence}/>
      </Switch>    
    </>
  )
}

export default App
