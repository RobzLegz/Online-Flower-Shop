import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/checkout" exact>
            <Header />
            <Checkout />
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
