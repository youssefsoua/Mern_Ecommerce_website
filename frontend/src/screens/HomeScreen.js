import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productListAction'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomeScreen = () => {
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return (
    <Container fluid>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} xl={3} lg={4} md={6} sm={12}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  )
}

export default HomeScreen
