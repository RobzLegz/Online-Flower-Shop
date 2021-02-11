import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import PrivacyPage from './PrivacyPage';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>
          <Route path="/privacy">
            <Header />
            <PrivacyPage />
            <Footer />
          </Route>
          <Route path="/" >
            <Header />
            <Home />
            <Footer />
          </Route>          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
