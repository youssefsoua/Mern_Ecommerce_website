import React, { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  ListGroup,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cartActions'
const CartScreen = () => {
  let location = useLocation()
  let { id } = useParams()

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  console.log(cartItems)

  const dispatch = useDispatch()
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, qty, id])
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <Container fluid>
      <Row className='py-3'>
        <Col>
          <Card className='card'>
            {cartItems.length > 0 ? (
              <ListGroup>
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.product}>
                    <Row className='py-1 px-1'>
                      <Col lg={3} md={3} sm={4} xs={4}>
                        <Image width={125} height={125} src={item.image} />
                      </Col>
                      <Col
                        lg={4}
                        md={4}
                        sm={8}
                        xs={8}
                        className='CenterCartCol'
                      >
                        <Row>
                          <Link to={`/products/${item.product}`}>
                            <h6>{item.name}</h6>
                          </Link>
                        </Row>
                        <Row className='mx-4'>
                          <h5>${item.price}</h5>
                        </Row>
                      </Col>
                      <Col
                        lg={5}
                        md={5}
                        sm={12}
                        xs={12}
                        className='CenterCartCol'
                      >
                        <Row className='mx-2'>
                          <input
                            className='quantity-num'
                            type='number'
                            min={1}
                            max={item.countInStock}
                            id='quantity'
                            value={item.qty}
                            autoComplete='off'
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                          ></input>
                          <h6 style={{ minWidth: 110 }} className='py-2 px-3'>
                            <strong>
                              ${(item.price * item.qty).toFixed(2)}
                            </strong>
                          </h6>
                          <span
                            style={{ cursor: 'pointer' }}
                            className='py-1 px-3'
                            onClick={() => removeFromCartHandler(item.product)}
                          >
                            <i className='fas fa-trash'></i>
                          </span>
                        </Row>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <h3>Cart is empty</h3>
            )}
          </Card>
        </Col>
        <Col xl={4} lg={4} md={12} sm={12} className='py-3'>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}{' '}
                    articles
                  </Col>
                  <Col>
                    $
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>Free</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <hr />
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>
                    $
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className='d-flex justify-content-center'>
                <Button variant='danger'>Proceed to checkout</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CartScreen
