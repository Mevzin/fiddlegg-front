import React from 'react';
import { Switch, Route, BrowserRouter} from "react-router-dom";
import Home from '../pages/Home/Index'
import Summoner from '../pages/Summoner/Index';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/summoner/:nick?/:locale" component={Summoner}/>
      </Switch>
    </BrowserRouter>
  )
}