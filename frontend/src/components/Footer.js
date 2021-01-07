import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container className='py-3'>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className='text-center'> Echri.tn &copy; 2020</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
