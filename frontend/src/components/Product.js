import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <>
      <Card className='my-3 card productCard'>
        <Link to={`/products/${product._id}`}>
          <Card.Img variant='top' src={product.image} />
        </Link>

        <Card.Body>
          <Link to={`/products/${product._id}`}>
            <Card.Title as='div' style={{ height: 50 }}>
              {product.name}
            </Card.Title>
          </Link>
          <Card.Subtitle as='h4'>
            <strong>{`USD$ ${product.price}`}</strong>
          </Card.Subtitle>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Body>
      </Card>
    </>
  )
}

export default Product
