import React from 'react'
import { Card, Button } from 'react-bootstrap';



const Product = ({product}) => {
  return (
    <Card className='my-3 p-3' style={{ width: '18rem' }}>
      <Card.Link href={`/product/${product._id}`}>
      <Card.Img src={product.image} variant='top'/>
      </Card.Link>
      <Card.Body>
        <Card.Link href={`/product/${product._id}`}>
            <Card.Title as="div">
                <strong>{product.name}</strong>
            </Card.Title>
        </Card.Link>       
        <Card.Text as="h3">
          ${product.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Product
