import React, { useState } from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WishlistItem = ({ product }) => {
  const [quantity, setquantity] = useState(1)

  return (
    <Row className='py-1 px-1'>
      <Col lg={3} md={3} sm={4} xs={4}>
        <Image width={125} height={125} src={product.image} />
      </Col>
      <Col
        lg={4}
        md={4}
        sm={8}
        xs={8}
        className='d-flex align-items-center justify-content-between'
      >
        <Row>
          <Link to={`/products/${product._id}`}>
            <h6>{product.name}</h6>
          </Link>
        </Row>
        <Row className='mx-4'>
          <h5 style={{ minWidth: 110 }}>${product.price}</h5>
        </Row>
      </Col>
      <Col lg={5} md={5} sm={12} xs={12} className='CenterCartCol'>
        <Row className='mx-2'>
          <input
            className='quantity-num'
            type='number'
            min={1}
            max={product.countInStock}
            id='quantity'
            value={quantity}
            autoComplete='off'
            onChange={(e) => setquantity(e.target.value)}
          ></input>
          <Button variant='primary' className='mx-2'>
            <i className='fas fa-cart-plus px-1'></i>
            Add to Cart
          </Button>
          <span style={{ cursor: 'pointer' }} className='py-1 px-3'>
            <i className='fas fa-trash'></i>
          </span>
        </Row>
      </Col>
    </Row>
  )
}

export default WishlistItem
