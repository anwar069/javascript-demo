import { Card, Button } from 'react-bootstrap';

function ProductComponent(props) {
    return (
        <>
            <Card className="product-card">

                <Card.Header as="h5">{props.product.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Rs. {props.product.price}</Card.Title>
                    <Card.Text>
                        <p>Discount : {props.product.discount}</p>
                        <p>In Stock : {props.product.stock}</p>
                        <p>In Cart : {props.isInCart.toString()}</p>
                    </Card.Text>
                    {props.isInCart ? <Button
                        variant="danger">Remove from cart</Button> : <Button
                            onClick={() => { props.onAddClick(props.product) }}
                            variant="info">Add to cart</Button>
                    }


                </Card.Body>
            </Card>
        </>
    )
}

export default ProductComponent;