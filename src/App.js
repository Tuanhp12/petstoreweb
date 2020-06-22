import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard';
import ProductDetail from './components/productBoard/ProductDetail'
import Cart from './components/orderDetails/Cart'
import Header from './components/layout/Header';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/productDetail/:idCategory/:idProduct" component={ProductDetail}/>
          </Switch>
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
