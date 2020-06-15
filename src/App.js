import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import Footer from './components/Footer'
import Modal from './components/Modal'
import FirstPage from './components/FirstPage'
import PhoneProvider from './Context/ProductContext'

function App() {
  return (
    <div className="text-title">
      <React.Fragment>
        <PhoneProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={FirstPage}/>
            <Route exact path="/shop" component={ProductList}/>
            <Route exact path="/details" component={Details}/>
            <Route exact path="/cart" component={Cart}/>
            <Route component={Default}/>
          </Switch>
          <Footer />
          <Modal />
        </PhoneProvider>
      </React.Fragment>
    </div>
  );
}

export default App;
