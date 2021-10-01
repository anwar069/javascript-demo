import React from "react";
import logo from './logo.svg';
import Home from "./components/Home.js";
import Cart from "./components/Cart.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { useState } from 'react';
import PRODUCT_DATA from "./data/product-data.js"

export default function App() {

  const [searchVal, setSearchVal] = useState('');
  const [products, setProducts] = useState(PRODUCT_DATA);
  const [cart, setCart] = useState([]);


  const onAddCart = (item) => {
    let arr = [item, ...cart];
    setCart(arr);
  }

  const handleChange = e => {

    let val = e.target.value;
    setSearchVal(val);

    let filterProducts = PRODUCT_DATA.filter(
      e => e.name.toLowerCase().includes(val.toLowerCase())
    )
    setProducts(filterProducts);
  }

  const onRemoveCart = (item) => {
    let ind = cart.findIndex(
      (e) => { return item.id == e.id }
    )

    if (ind != -1) {
      let newArr = [...cart];
      newArr.splice(ind, 1);
      setCart(newArr);
    }

  }

  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Link to="/">
              <Navbar.Brand>
                <Row>
                  <Col xs={3}>
                    <img
                      alt=""
                      src={logo}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{' '}
                    Taj Textiles Stores
                  </Col>

                </Row>
              </Navbar.Brand>
            </Link>

            <Col xs={3}>
              <Form.Control
                placeholder="Search Product"
                value={searchVal}
                onChange={handleChange} />
            </Col>
            <Col xs={1}>
              <Link to="/cart">
                <p className="cart"> Cart : {cart.length}</p>
              </Link>
            </Col>

          </Container>
        </Navbar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home
              products={products}
              cart={cart}
              onAddCart={onAddCart}
              onRemoveCart={onRemoveCart}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}