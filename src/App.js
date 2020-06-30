import React, { Page, Admin } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProductDetail from "./components/productBoard/ProductDetail";
import Cart from "./components/orderDetails/Cart";
import Header from "./components/layout/Header";
import FormCustomer from "./components/customer/FormCustomer";
import CustomerConfirmOrder from "./components/customer/CustomerConfirmOrder";
import LoginPage from "./components/admin/LoginPage";
import EmployeeeConfirm from "./components//admin/EmployeeConfirm";
import ProductsByCategory from "./components/productBoard/ProductsByCategory";
import Footer from "./components/layout/Footer";
import CreateProducts from "./components/admin/products/CreateProducts";
import ListProducts from "./components/admin/products/ListProducts";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route
            exact
            path="/admin/addProduct"
            render={(props) => <CreateProducts {...props} />}
          />
          <Route
            exact
            path="/admin/employeeConfirm"
            render={(props) => <EmployeeeConfirm {...props} />}
          />
          <Route
            exact
            path="/adminLogin"
            render={(props) => <LoginPage {...props} />}
          />
          <Route
            exact
            path="/admin/listProduct"
            render={(props) => <ListProducts {...props} />}
          />
          <Route path="/pet">
            <Header />
            <Route exact path="" component={Dashboard} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/formCustomer" component={FormCustomer} />
            <Route
              exact
              path="/productDetail/:idCategory/:idProduct"
              component={ProductDetail}
            />
            <Route exact path="/confirm" component={CustomerConfirmOrder} />
            <Route exact path="/category/:id" component={ProductsByCategory} />
            <Footer />
          </Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
