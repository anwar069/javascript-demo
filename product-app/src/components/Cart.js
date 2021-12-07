import { Navbar, Container, Row, Col, Form, Alert, Card, Button } from 'react-bootstrap';
import ProductComponent from "./ProductComponent";

function CartComponent(props) {
    const { cart, onRemoveCart } = props;

    let total = 0;

    for (let index = 0; index < cart.length; index++) {
        const pro = cart[index];
        total = total + pro.price
    }

    return (
        <>
            {
                cart.map((pro) => {
                    return (
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col>
                                            <h5>{pro.name}</h5>
                                        </Col>
                                        <Col>
                                            In Stock {pro.stock}
                                        </Col>
                                        <Col>
                                            RS : {pro.price}
                                        </Col>
                                        <Col>
                                            <Button onClick={() => onRemoveCart(pro)} variant="danger">Delete</Button>
                                        </Col>
                                    </Row>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    )
                })
            }
            <Row>
                <Col>
                </Col>
                <Col>
                    <h4> Total </h4>
                </Col>
                <Col>
                    <h4>  RS : {total}</h4>
                </Col>
                <Col>
                </Col>
            </Row>
        </>
    )
}

export default CartComponent;