import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import WishlistItem from '../components/WishlistItem'
import products from '../products'

const WishlistScreen = () => {
  return (
    <Container>
      <Row className='mx-3'>
        <h3>My Wishlist:</h3>
      </Row>
      <Row className='py-3'>
        <Col>
          <Card>
            {products.map((product) => (
              <WishlistItem product={product} />
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default WishlistScreen
