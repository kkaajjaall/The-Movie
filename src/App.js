import React from 'react'
import Home from "./home"
import { Route,Switch } from 'react-router'
import contact from './pages/contact'
import char from './pages/char'
import char1 from './details/char1'
import char2 from './details/char2'
import char3 from './details/char3'
import char4 from './details/char4'
import char5 from './details/char5'
import char6 from './details/char6'

const app = () => {
  return (
    <>
    <Switch>
            <Route exact path="/" component={Home}></Route>
            
            <Route  path="/contact" component= {contact}></Route>
            <Route  path="/char" component= {char}></Route>
            <Route  path="/char1" component= {char1}></Route>
            <Route  path="/char2" component= {char2}></Route>
            <Route  path="/char3" component= {char3}></Route>
            <Route  path="/char4" component= {char4}></Route>
            <Route  path="/char5" component= {char5}></Route>
            <Route  path="/char6" component= {char6}></Route>
           
      </Switch>
    </>
  )
}

export default app
