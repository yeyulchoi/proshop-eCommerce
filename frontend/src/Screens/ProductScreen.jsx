import React from 'react'
import {  useParams, Link } from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import products from '../products';
import Rating from '../components/Rating';

const ProductScreen = () => {

    const {productId}=useParams()
    const product = products.find((p)=>p._id ===  productId)

  return (
    <>
    <Link to='/' className='btn btn-light my-3'>Go Back</Link>
    <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.name}  fluid />
        </Col>
        <Col md={4}>
        <ListGroup variant="flush">
            <ListGroup.Item>{product.name}</ListGroup.Item>
            <ListGroup.Item>
                <Rating value ={product.rating} text={product.numReviews}/>
            </ListGroup.Item>
            <ListGroup.Item>${product.price}</ListGroup.Item>  
            <ListGroup.Item>${product.description}</ListGroup.Item>            
        </ListGroup>
        </Col>
        <Col md={3} >
        <Card >        
        <ListGroup variant="flush">
            <ListGroup.Item>
                <Row>
                    <Col md={6}>Price:</Col>
                    <Col md={6}>${product.price}</Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col md={6}>Status:</Col>
                    <Col md={6}> {product.countInStock>0 ? "In Stock" : "Out of Stock" }</Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Button className="btn-block" disabled={product.countInStock ===0}>
                    Go somewhere
                </Button>
            </ListGroup.Item>  
        </ListGroup>
        </Card>
        </Col>
    </Row>
    </>
  )
}

export default ProductScreen
