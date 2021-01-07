import { Container, Form, Button, Card, Row, Image, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { login } from '../actions/userActions'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const user = useSelector((state) => state.userLogin)
  const { userInfo, error } = user
  const dispatch = useDispatch()
  const onLonginHandler = (e) => {
    e.preventDefault()
    let x = dispatch(login(email, password))
    console.log(error)
  }
  return (
    <Container className='d-flex justify-content-center'>
      <Card className='py-3 px-5' style={{ width: '25rem' }}>
        <Row className='d-flex justify-content-center my-2'>
          <Image src='./logo.png' rounded width={150} />
        </Row>
        <hr></hr>
        <Row className='d-flex justify-content-center my-2'>
          <Form>
            <Form.Group controlId='formBasicEmail' style={{ width: '240px' }}>
              <Form.Label className='px-1'>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                className='rounded-pill'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <Form.Text className='text-muted px-1'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group
              controlId='formBasicPassword'
              style={{ width: '240px' }}
            >
              <Form.Label className='px-1'>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                className='rounded-pill'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </Form.Group>
            <Form.Group controlId='formBasicCheckbox' className='px-1'>
              <Form.Check type='checkbox' label='Remember me' />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
              className='rounded-pill'
              style={{ width: '240px' }}
              onClick={onLonginHandler}
            >
              Login
            </Button>
            <Row className='pt-3 mx-2'>
              <Col>
                Forgot password? <Link to={'/ResetPassword'}>Click here</Link>
              </Col>
            </Row>
            <Row className='mx-3'>
              <Col>
                New Customer? <Link to={'/register'}>Sign up</Link>
              </Col>
            </Row>
          </Form>
        </Row>
      </Card>
    </Container>
  )
}

export default LoginScreen
