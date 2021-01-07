import { Container, Form, Button, Card, Row, Image, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { register } from '../actions/userActions'

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const user = useSelector((state) => state.userRegister)
  const { userInfo, error } = user
  const dispatch = useDispatch()
  const onRegisterHandler = (e) => {
    e.preventDefault()
    dispatch(register(name, email, password))
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
            </Form.Group>
            <Form.Group controlId='formBasicEmail' style={{ width: '240px' }}>
              <Form.Label className='px-1'>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter a name'
                className='rounded-pill'
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
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

            <Button
              variant='primary'
              type='submit'
              className='rounded-pill'
              style={{ width: '240px' }}
              onClick={onRegisterHandler}
            >
              Sign up
            </Button>
            <Row className='mx-3'>
              <Col>
                Have an account? <Link to={'/login'}>Sign in</Link>
              </Col>
            </Row>
          </Form>
        </Row>
      </Card>
    </Container>
  )
}

export default RegisterScreen
