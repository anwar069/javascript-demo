import logo from './logo.svg';
import './App.css';
import PRODUCT_DATA from "./data/product-data.js"
import { Navbar, Container, Row, Col, Form, Alert } from 'react-bootstrap';
import ProductComponent from "./components/ProductComponent";
import { useState } from 'react';

function App() {
  const [searchVal, setSearchVal] = useState('');
  const [products, setProducts] = useState(PRODUCT_DATA);
  const [cart, setCart] = useState([]);

  const handleChange = e => {

    let val = e.target.value;
    setSearchVal(val);

    let filterProducts = PRODUCT_DATA.filter(
      e => e.name.toLowerCase().includes(val.toLowerCase())
    )
    setProducts(filterProducts);
  }

  const checkInCart = (pro) => {
    let ind = cart.findIndex(
      (e) => { return pro.id == e.id }
    )

    return ind > -1;
  }

  const onAddCart = (item) => {
    let arr = [item, ...cart];
    setCart(arr);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
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

          <Col xs={3}>
            <Form.Control
              placeholder="Search Product"
              value={searchVal}
              onChange={handleChange} />
          </Col>
          <Col xs={1}>
            <p className="cart"> Cart : {cart.length}</p>
          </Col>
          <p> </p>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          {products.length == 0 ?
            <Alert variant="danger" >
              <Alert.Heading>No Product found!</Alert.Heading>
              <p>
                Please change search text
              </p>
            </Alert>
            : products.map(
              (item) => {
                return (
                  <Col xs={12} md={3} >
                    <ProductComponent
                      product={item}
                      onAddClick={onAddCart}
                      isInCart={
                        checkInCart(item)
                      }
                    />
                  </Col>
                )
              }
            )}

        </Row>
      </Container>
    </>
  );
}

export default App;
