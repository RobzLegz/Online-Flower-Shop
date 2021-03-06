import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import { orderUrl } from './constants';
import ContactPage from './ContactPage';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import LoginPage from './LoginPage';
import OrdersPage from './OrdersPage';
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
          <Route path="/contact" >
            <Header />
            <ContactPage />
          </Route>
          <Route path="/privacy">
            <Header />
            <PrivacyPage />
            <Footer />
          </Route>
          <Route path={`/orders${orderUrl}`}>
            <Header />
            <OrdersPage />
          </Route>
          <Route path="/login">
            <Header />
            <LoginPage />
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
