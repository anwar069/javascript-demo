import '../App.css';
import { Navbar, Container, Row, Col, Form, Alert } from 'react-bootstrap';
import ProductComponent from "./ProductComponent";
import { useState } from 'react';

function Home(props) {
    // const products = props.products;
    // const cart = props.cart;
    const { products, cart, onAddCart, onRemoveCart } = props;

    const checkInCart = (pro) => {
        let ind = cart.findIndex(
            (e) => { return pro.id == e.id }
        )

        return ind > -1;
    }




    return (
        <>
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
                                            onRemoveClick={onRemoveCart}
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

export default Home;
