import logo from './logo.svg';
import './App.css';
import PRODUCT_DATA from "./data/product-data.js"
import { Navbar, Container, Row, Col, Form } from 'react-bootstrap';
import ProductComponent from "./components/ProductComponent";
import { useState } from 'react';

function App() {
  const [searchVal, setSearchVal] = useState('');
  const [products, setProducts] = useState(PRODUCT_DATA);

  const handleChange = e => {

    let val = e.target.value;
    setSearchVal(val);

    let filterProducts = PRODUCT_DATA.filter(
      e => e.name.toLowerCase().includes(val.toLowerCase())
    )
    setProducts(filterProducts);

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
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          {products.map(
            (item) => {
              return (
                <Col xs={12} md={3} ><ProductComponent product={item} /></Col>
              )
            }
          )}

        </Row>
      </Container>
    </>
  );
}

export default App;
