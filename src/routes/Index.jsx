import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "views/Home/Home";
import CategoryProduct from "views/EcommercePage/CategoryProduct";
import Login from "views/LoginPage/Login";
import Signup from "views/SignupPage/Signup";
import UserTest from "views/UserPage/UserTest";
import PageProductDetail from "views/ProductPage/PageProductDetail";
import Resertpassword from "views/Resertpassword/Resertpassword";
import Waitingredirect from "views/Waitingredirect/Waitingredirect";
import DashboardCustomer from "views/Dashboard/Dashboard";
import Cart from "views/Cart/Cart";
import Checkout from "../views/Checkout/Checkout";
import InvoiceCustomerDetail from "views/InvoiceCustomerDetail/InvoiceCustomerDetail";

class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category-product" component={CategoryProduct} />
          <Route path="/product-detail" component={PageProductDetail} />
          <Route path="/login" component={Login} />
          <Route path="/resertpassword" component={Resertpassword} />
          <Route path="/signup" component={Signup} />
          <Route path="/user-test" component={UserTest} />
          <Route path="/invoicecustomerdetail" component={InvoiceCustomerDetail} />
          <Route path="/waitingredirect" component={Waitingredirect} />
          <Route path="/dashboardcustomer" component={DashboardCustomer} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </BrowserRouter >
    );
  }
}

export default index;
