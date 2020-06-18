import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header'
import ProductDetail from './components/productBoard/ProductDetail'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/dashBoard" component={Dashboard}/>
          <Route exact path="/productDetail/:idCategory/:idProduct" component={ProductDetail}/>
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
