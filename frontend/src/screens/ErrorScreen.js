import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const ErrorScreen = () => {
  return (
    <Container className='my-5'>
      <Row className='d-flex justify-content-center mt-5'>
        <Row>
          <Col>
            <Image src='./404.png' width={115} />
          </Col>
          <Col className='d-flex align-items-center'>
            <h1 className='text-muted display-1'>404</h1>
          </Col>
        </Row>
      </Row>
      <Row className='d-flex justify-content-center py-5'>
        <h4 className='text-danger'>The page you requested does not exist</h4>
      </Row>
    </Container>
  )
}

export default ErrorScreen
