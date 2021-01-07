import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Image, Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { productDetails } from '../actions/productListAction'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductDetailsScreen = () => {
  const [qty, setQty] = useState(1)
  let { id } = useParams()
  let history = useHistory()
  const productDetail = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetail
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(productDetails(id))
  }, [dispatch, id])
  const addToCartHandler = () => {
    history.push(`/cart/${id}?qty=${qty}`)
  }
  return (
    <Container className='py-3'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <Row className='my-2'>
            <Col>
              <Breadcrumb>
                <LinkContainer to='/'>
                  <Breadcrumb.Item>Products</Breadcrumb.Item>
                </LinkContainer>
                <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12}>
              <Image thumbnail src={product.image} fluid />
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} className='px-5 mt-1'>
              <Row>
                <h4>{product.name}</h4>
              </Row>
              <Row>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </Row>
              <Row className='mt-3'>
                <h4>
                  <strong>{`Price: US $${product.price}`}</strong>
                </h4>
              </Row>
              <Row className='mt-3'>
                {product.countInStock > 0 ? (
                  <span>
                    <i className='fas fa-check fa-lg text-success mx-1' />
                    Available
                  </span>
                ) : (
                  <span style={{ fontSize: 18 }}>
                    <i className='far fa-times-circle fa-lg text-danger mx-1' />
                    Out of stock
                  </span>
                )}
              </Row>
              <Row className='mt-3'>
                <p>{product.description}</p>
              </Row>
              <hr />

              <Row className='my-3'>
                <Col>
                  <Row>
                    <h5 className='mx-1'>Qty:</h5>
                    <input
                      type='number'
                      min={1}
                      max={product.countInStock}
                      id='quantity'
                      autoComplete='off'
                      className='mx-2'
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      disabled={product.countInStock === 0}
                    />
                    <span>{product.countInStock} Available / 400 Sold</span>
                  </Row>
                </Col>
              </Row>
              <Row className='my-3'>
                <Button
                  variant='info'
                  className='mx-2'
                  disabled={product.countInStock === 0}
                  onClick={addToCartHandler}
                >
                  <i className='fas fa-cart-plus px-1'></i>
                  Add to Cart
                </Button>
                <Button variant='danger' className='mx-2'>
                  <i className='far fa-heart px-1'></i>
                  Add to Wishlist
                </Button>
              </Row>
            </Col>
          </Row>
        </>
      )}
    </Container>
  )
}

export default ProductDetailsScreen
