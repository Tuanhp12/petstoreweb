import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard';
import ProductDetail from './components/productBoard/ProductDetail'
import Cart from './components/orderDetails/Cart'
import Header from './components/layout/Header';
import FormCustomer from './components/customer/FormCustomer';
import CustomerConfirmOrder from './components/customer/CustomerConfirmOrder'
import LoginPage from './components/admin/LoginPage'
import EmployeeeConfirm from './components//admin/EmployeeConfirm'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/formCustomer" component={FormCustomer} />
            <Route exact path="/productDetail/:idCategory/:idProduct" component={ProductDetail}/>
            <Route exact path="/confirm" component={CustomerConfirmOrder}/> 
            <Route exact path="/adminLogin" component={LoginPage}/>
            <Route exact path="/employeeConfirm" component={EmployeeeConfirm}/>
          </Switch>
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
