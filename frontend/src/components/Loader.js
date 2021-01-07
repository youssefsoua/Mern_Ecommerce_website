import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Container>
      <Row>
        <Spinner
          animation='border'
          variant='primary'
          style={{
            width: '100px',
            height: '100px',
            margin: 'auto',
            display: 'block',
          }}
        />
      </Row>
    </Container>
  )
}

export default Loader
