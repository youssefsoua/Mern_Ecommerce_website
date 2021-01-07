import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'

const Message = ({ children }) => {
  return (
    <Container>
      <Row>
        <Alert variant='danger' className='mx-3'>
          {children}
        </Alert>
      </Row>
    </Container>
  )
}

export default Message
